# ReqRes Header Automation Suite

A production-ready End-to-End automation framework using **Playwright** and the **Page Object Model (POM)** pattern to fully validate layout navigation across the `https://reqres.in/` header component framework.

## Project Architecture & Design
This implementation has been refactored to fully eliminate the legacy file-based `AuthModalPage.js` database simulator class, embedding the pop-up modal action routines directly inside the main `HeaderPage` POM implementation for structural performance.

## Prerequisites
* Node.js v18+ 

## Installation
1. Install core dependencies:
   ```bash
   npm install
   ```
2. Install browser runtimes:
   ```bash
   npx playwright install --with-deps
   ```

## Test Runner Configurations
Execute suite segments locally using optimized test filtering:

```bash
# Smoke Testing Suite
npm run test:smoke

# Sanity Validation Runs
npm run test:sanity

# Continuous Integration Regression Suite
npm run test:regression
```
