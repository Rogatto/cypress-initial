# cypress-initial
This repository contains examples about cypress automation tools with NodeJs

# To make download Cypress and npx

1. Install nodeJS first on your machine
2. npm install cypress --save-dev
3. npm install -g npx

# To open Cypress aplication

npm i cypress -D
npx cypress open

# To execute on command line

npm start

or

npm run cypress:run -- --browser chrome --reporter mochawesome

# To execute visual testing wih cypress

npm i cypress-plugin-snapshots -S
npm install --save-dev @percy/cypress

configure percy to visual testing:

# Windows
$ set PERCY_TOKEN=<your token here>

# Unix 
$ export PERCY_TOKEN=<your token here>

# Execute percy tests

npx percy exec -- cypress run --spec 'cypress/integration/examples/visual.testing.spec.js'