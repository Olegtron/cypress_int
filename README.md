# Testing saucedemo.com web application
Cypress project
## Requirement
- Download and install VS Code (https://code.visualstudio.com/Download) or any other IDE.
- Download and install Node.js (https://nodejs.org/en/download/) at least v.14.x
### Installing
- Download or clone my git repository
- Install all depencies from package.json

```
npm install
```

**Project opening**
- Open project folder in VSCode or another IDE

Specs (tests) located in: cypress/e2e/spec/*cy.js

Page objects located in: cypress/e2e/page_objects/*cy.js


**Project Run**
- Type in terminal following commands:
```
npm run cypress:open - this will open Cypress dashboard from which you can run tests
```
OR
```
npm run cypress:run  - this will run tests in headless mode
```
- To generate and open allure report type in terminal following commands:
```
npm run spec:allure
```
```
npm run allure:report
```
```
npm run allure:open
```
