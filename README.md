# Cypress Cucumber Test Project

This project demonstrates automated testing using Cypress with Cucumber for BDD (Behavior Driven Development) approach.

## Test Target
- **Application Under Test**: [SauceDemo](https://www.saucedemo.com/)
- **Testing Framework**: Cypress + Cucumber

## Project Structure
```
cypress-pet-project/
├── cypress/
│   ├── e2e/
│   │   ├── features/           # Gherkin feature files
│   │   └── step_definitions/   # Step definition files
│   ├── support/
│   │   ├── pages/             # Page Object Model files
│   │   ├── commands.js        # Custom Cypress commands
│   │   └── e2e.js            # Support file
│   └── fixtures/             # Test data files
├── cypress.config.js         # Cypress configuration
├── package.json             # Dependencies and scripts
└── README.md
```

## Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd cypress-pet-project
```

2. Install dependencies:
```bash
npm install
```

## Running Tests

### Open Cypress Test Runner
```bash
npx cypress open
```

### Run tests in headless mode
```bash
npx cypress run
```

### Run specific feature file
```bash
npx cypress run --spec "cypress/e2e/features/login.feature"
```

## Dependencies

- **cypress**: End-to-end testing framework
- **@badeball/cypress-cucumber-preprocessor**: Cucumber integration for Cypress
- **@bahmutov/cypress-esbuild-preprocessor**: ESBuild preprocessor for faster builds

## Test Scenarios

### Login Feature
- ✅ Successful login with valid credentials
- 🔄 Invalid credentials handling (planned)
- 🔄 Empty fields validation (planned)

## Page Object Model

The project follows the Page Object Model pattern for better test maintainability:
- `cypress/support/pages/loginPage.js` - Login page interactions

## Configuration

### Cypress Configuration
- Base URL: `https://www.saucedemo.com`
- Spec pattern: `cypress/e2e/**/*.feature`
- Step definitions: `cypress/e2e/step_definitions/**/*.js`

## Contributing

1. Create feature files in `cypress/e2e/features/`
2. Implement step definitions in `cypress/e2e/step_definitions/`
3. Create page objects in `cypress/support/pages/`
4. Follow BDD principles for test scenarios

## Test Data

Valid test credentials for SauceDemo:
- **Username**: `standard_user`
- **Password**: `secret_sauce`

## Reports

Test execution videos and screenshots are automatically generated in:
- `cypress/videos/`
- `cypress/screenshots/`

## Troubleshooting

If you encounter issues:
1. Ensure all dependencies are installed: `npm install`
2. Clear Cypress cache: `npx cypress cache clear`
3. Verify Node.js