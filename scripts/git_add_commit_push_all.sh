#!/bin/bash

cmsg="add LICENSE file back into repo"

cd app-volumes-apis/
git add .
git commit -a -s -m "$cmg"
git push
cd ../euc-dev.github.io/
git add .
git commit -a -s -m "$cmg"
git push
cd ../euc-samples/
git add .
git commit -a -s -m "$cmg"
git push
cd ../horizon-apis/
git add .
git commit -a -s -m "$cmg"
git push
cd ../horizon-powercli/
git add .
git commit -a -s -m "$cmg"
git push
cd ../horizon-sdk/
git add .
git commit -a -s -m "$cmg"
git push
cd ../horizon-terraform/
git add .
git commit -a -s -m "$cmg"
git push
cd ../ws1-access-apis/
git add .
git commit -a -s -m "$cmg"
git push
cd ../ws1-api-intelligence/
git add .
git commit -a -s -m "$cmg"
git push
cd ../ws1-identity-services-api/
git add .
git commit -a -s -m "$cmg"
git push
cd ../ws1-notification-services-api/
git add .
git commit -a -s -m "$cmg"
git push
cd ../ws1-sdk-intelligence/
git add .
git commit -a -s -m "$cmg"
git push
cd ../ws1-sdk-uem-android/
git add .
git commit -a -s -m "$cmg"
git push
cd ../ws1-sdk-uem-ios/
git add .
git commit -a -s -m "$cmg"
git push
cd ../ws1-uem-apis/
git add .
git commit -a -s -m "$cmg"
git push
cd ..


