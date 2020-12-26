#!/bin/sh

echo '#!/bin/sh

set -e

npx eslint .
npx stylelint "**/*.scss"' > .git/pre-commit

cd app
npm install

cd ..
cd server
npm install