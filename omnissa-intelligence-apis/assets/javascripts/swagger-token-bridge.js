(function () {
  'use strict';

  var form = document.getElementById('swagger-token-bridge-form');
  if (!form) {
    return;
  }

  var authHostInput = document.getElementById('swagger-auth-host');
  var clientIdInput = document.getElementById('swagger-client-id');
  var clientSecretInput = document.getElementById('swagger-client-secret');
  var statusElement = document.getElementById('swagger-token-bridge-status');
  var submitButton = document.getElementById('swagger-token-submit');

  function setStatus(kind, message) {
    statusElement.textContent = message;
    statusElement.dataset.state = kind;
  }

  function setSubmitting(isSubmitting) {
    submitButton.disabled = isSubmitting;
    submitButton.textContent = isSubmitting ? 'Getting token...' : 'Get access token';
  }

  function encodeBasicCredentials(value) {
    var bytes = new TextEncoder().encode(value);
    var binary = '';
    bytes.forEach(function (byte) {
      binary += String.fromCharCode(byte);
    });
    return window.btoa(binary);
  }

  function getSwaggerIframe() {
    var iframes = Array.prototype.slice.call(document.querySelectorAll('iframe'));
    var preferred = iframes.find(function (iframe) {
      return /swagger/i.test(iframe.src || '') || /swagger/i.test(iframe.title || '');
    });
    return preferred || iframes[0] || null;
  }

  function getSwaggerUiFromIframe(iframe) {
    if (!iframe || !iframe.contentWindow) {
      return null;
    }

    try {
      return iframe.contentWindow.ui || iframe.contentWindow.swaggerUi || null;
    } catch (error) {
      return null;
    }
  }

  function waitForSwaggerUi() {
    return new Promise(function (resolve, reject) {
      var started = Date.now();

      function check() {
        var iframe = getSwaggerIframe();
        var swaggerUi = getSwaggerUiFromIframe(iframe);

        if (swaggerUi && typeof swaggerUi.preauthorizeApiKey === 'function') {
          resolve(swaggerUi);
          return;
        }

        if (Date.now() - started > 20000) {
          reject(new Error('Swagger UI did not finish loading.'));
          return;
        }

        window.setTimeout(check, 250);
      }

      check();
    });
  }

  async function fetchToken(authHost, clientId, clientSecret) {
    var tokenUrl = new URL('/oauth/token', authHost);
    tokenUrl.searchParams.set('grant_type', 'client_credentials');

    var response;
    try {
      response = await window.fetch(tokenUrl.toString(), {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Basic ' + encodeBasicCredentials(clientId + ':' + clientSecret)
        }
      });
    } catch (error) {
      throw new Error('The browser could not reach the auth endpoint. This is usually caused by CORS or a network failure. Obtain a token outside Swagger and paste it into Bearer auth manually.');
    }

    var payload;
    try {
      payload = await response.json();
    } catch (error) {
      throw new Error('The token endpoint did not return valid JSON.');
    }

    if (!response.ok) {
      var message = payload && payload.errors && payload.errors.length ? payload.errors[0].message : null;
      throw new Error(message || ('Token request failed with HTTP ' + response.status + '.'));
    }

    if (!payload.access_token) {
      throw new Error('The token response did not include an access_token value.');
    }

    return payload.access_token;
  }

  form.addEventListener('submit', async function (event) {
    event.preventDefault();

    var authHost = authHostInput.value.trim();
    var clientId = clientIdInput.value.trim();
    var clientSecret = clientSecretInput.value;

    if (!authHost || !clientId || !clientSecret) {
      setStatus('error', 'Enter the auth host, clientId, and clientSecret before requesting a token.');
      return;
    }

    setSubmitting(true);
    setStatus('working', 'Requesting access token...');

    try {
      var token = await fetchToken(authHost, clientId, clientSecret);
      var swaggerUi = await waitForSwaggerUi();

      swaggerUi.preauthorizeApiKey('bearerAuth', token);
      clientSecretInput.value = '';
      setStatus('success', 'Access token retrieved and Bearer auth was populated in Swagger. You can now use Try it out on the Intelligence APIs.');
    } catch (error) {
      setStatus('error', error.message || 'Unable to retrieve an access token.');
    } finally {
      setSubmitting(false);
    }
  });
})();
