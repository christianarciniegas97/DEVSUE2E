Cypress E2E Automation – Purchase Flow

This project contains an end-to-end automated test built with Cypress.
It validates a complete purchase flow, from product selection to checkout
confirmation.

--------------------------------------------------

Requirements

- Node.js (version 18 or higher)
- npm

--------------------------------------------------

Installation

1. Clone the repository or unzip the project folder
2. Open a terminal in the project root directory
3. Install dependencies:

   npm install

--------------------------------------------------

Running the tests

To open Cypress Test Runner:

   npm run cy:open

To run the tests in headless mode:

   npm run cy:run

--------------------------------------------------

Test reports

Test reports are generated automatically using Mochawesome and are included
in this project as supporting evidence of the implementation.

The report is generated after running the tests in headless mode:

   npm run cy:run

HTML reports are available in the following directory:

   cypress/reports/index.html

--------------------------------------------------

Project structure

- cypress/e2e        → Test specifications
- cypress/pages      → Page Objects
- cypress/helpers    → Network and utility helpers
- cypress/fixtures   → Test data (data-driven)
- cypress/reports    → Test execution reports
- cypress.config.js  → Cypress configuration
