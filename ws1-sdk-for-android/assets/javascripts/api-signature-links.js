/*
 * Inline type links for API signature code blocks.
 *
 * Pygments strips hyperlinks from fenced code, so enhance-gfm.py emits the
 * signature's type references in a hidden `.api-sig-types` block (where mkdocs
 * resolves the relative URLs). This script re-attaches each resolved link to the
 * matching token span inside the preceding highlighted signature, so the types
 * render inline -- highlighted, copyable and clickable.
 */
(function () {
  function linkifySignatures() {
    document.querySelectorAll(".api-sig-types").forEach(function (meta) {
      var map = {};
      meta.querySelectorAll("a").forEach(function (a) {
        var key = a.textContent.trim();
        if (key) map[key] = a.getAttribute("href");
      });
      if (!Object.keys(map).length) return;

      // The highlighted signature is the nearest preceding `.highlight` block.
      var block = meta.previousElementSibling;
      while (block && !block.classList.contains("highlight")) {
        block = block.previousElementSibling;
      }
      if (!block) return;
      var code = block.querySelector("code");
      if (!code) return;

      code.querySelectorAll("span").forEach(function (span) {
        if (span.dataset.apiLinked) return;
        var href = map[span.textContent.trim()];
        if (!href) return;
        var a = document.createElement("a");
        a.setAttribute("href", href);
        a.className = "api-type-link";
        span.parentNode.insertBefore(a, span);
        a.appendChild(span);
        span.dataset.apiLinked = "1";
      });
    });
  }

  // Material's instant navigation swaps content without a full reload, so hook
  // `document$` when available and fall back to a one-shot load otherwise.
  if (typeof document$ !== "undefined" && document$.subscribe) {
    document$.subscribe(linkifySignatures);
  } else {
    document.addEventListener("DOMContentLoaded", linkifySignatures);
  }
})();
