# Cypress_Kiwoko

## About the proyect
Automation Testing with Cypress executed on Kiwoto website, developed by María Niveiros.


## Setup proyect
Clone proyect from this repository
``git clone https://github.com/maria-niveiros/Cypress_Kiwoko``

  


## Install Cypress
Use the project cloned above and in terminal navigate to the project folder.
``$ npm install cypress --save-dev``


## Install Mochawesome reporting tool
Installing mochawesome from the command console
``$ npm install --save-dev mochawesome``


## Run tests
Running test from the command console and save it to a file report

#### To run tests on Google Chrome
``$ npm run cy:run:chrome -- --reporter mochawesome --reporter-options reportDir=myReport,reportFilename=reportFilec``

#### To run tests on Microsoft Edge
``$ npm run cy:run:edge -- --reporter mochawesome --reporter-options reportDir=myReport,reportFilename=reportFilec``

#### To run tests on Firefox
``$ npm run cy:run:firefox -- --reporter mochawesome --reporter-options reportDir=myReport,reportFilename=reportFilec``
