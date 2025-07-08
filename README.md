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
│   │   ├── features/              # Gherkin feature files
│   │   │   ├── login.feature
│   │   │   ├── products.feature
│   │   │   ├── shoppingCart.feature
│   │   │   ├── checkout.feature
│   │   │   ├── siteNavigation.feature
│   │   │   └── differentUserTypes.feature
│   │   └── step_definitions/      # Step definition files
│   │       ├── common.steps.js    # Shared step definitions
│   │       ├── login.steps.js
│   │       ├── products.steps.js
│   │       ├── shoppingCart.steps.js
│   │       ├── checkout.steps.js
│   │       ├── navigation.steps.js
│   │       └── userType.steps.js
│   ├── support/
│   │   ├── pages/                 # Page Object Model files
│   │   │   ├── loginPage.js
│   │   │   ├── productsPage.js
│   │   │   ├── shoppingCartPage.js
│   │   │   ├── checkoutPage.js
│   │   │   ├── navigationPage.js
│   │   │   └── userTypesPage.js
│   │   ├── commands.js            # Custom Cypress commands
│   │   └── e2e.js                # Support file
│   └── fixtures/                  # Test data files
├── cypress.config.js             # Cypress configuration
├── package.json                  # Dependencies and scripts
├── .gitignore                    # Git ignore rules
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

### Run all feature files
```bash
npx cypress run --spec "cypress/e2e/features/**/*.feature"
```

### Run specific test scenarios
```bash
# Login tests
npx cypress run --spec "cypress/e2e/features/login.feature"

# Products tests
npx cypress run --spec "cypress/e2e/features/products.feature"

# Shopping cart tests
npx cypress run --spec "cypress/e2e/features/shoppingCart.feature"

# Checkout tests
npx cypress run --spec "cypress/e2e/features/checkout.feature"

# Navigation tests
npx cypress run --spec "cypress/e2e/features/siteNavigation.feature"

# User types tests
npx cypress run --spec "cypress/e2e/features/differentUserTypes.feature"
```

## NPM Scripts

Add these scripts to your `package.json` for easier test execution:

```json
{
  "scripts": {
    "test": "cypress run",
    "test:open": "cypress open",
    "test:features": "cypress run --spec 'cypress/e2e/features/**/*.feature'",
    "test:login": "cypress run --spec 'cypress/e2e/features/login.feature'",
    "test:products": "cypress run --spec 'cypress/e2e/features/products.feature'",
    "test:cart": "cypress run --spec 'cypress/e2e/features/shoppingCart.feature'",
    "test:checkout": "cypress run --spec 'cypress/e2e/features/checkout.feature'",
    "test:navigation": "cypress run --spec 'cypress/e2e/features/siteNavigation.feature'",
    "test:users": "cypress run --spec 'cypress/e2e/features/differentUserTypes.feature'"
  }
}
```

Then run tests using:
```bash
npm run test:open    # Open Cypress Test Runner
npm run test         # Run all tests headless
npm run test:login   # Run only login tests
```

## Dependencies

- **cypress**: End-to-end testing framework
- **@badeball/cypress-cucumber-preprocessor**: Cucumber integration for Cypress
- **@bahmutov/cypress-esbuild-preprocessor**: ESBuild preprocessor for faster builds

## Test Scenarios

### Login Feature
- ✅ Successful login with valid credentials
- ✅ Invalid credentials handling
- ✅ Empty fields validation

### Products Feature
- ✅ View product details
- ✅ Add products to cart
- ✅ Sort products by price

### Shopping Cart Feature
- ✅ View cart contents
- ✅ Remove products from cart
- ✅ Continue shopping from cart

### Checkout Feature
- ✅ Complete checkout with valid information
- ✅ Validation for missing required fields

### Site Navigation
- ✅ Logout functionality
- ✅ Menu navigation
- ✅ Footer links verification

### Different User Types
- ✅ Problem user experience
- ✅ Performance glitch user
- ✅ Locked out user

## Page Object Model

The project follows the Page Object Model pattern for better test maintainability:
- `cypress/support/pages/loginPage.js` - Login page interactions
- `cypress/support/pages/productsPage.js` - Products page interactions
- `cypress/support/pages/shoppingCartPage.js` - Shopping cart functionality
- `cypress/support/pages/checkoutPage.js` - Checkout process
- `cypress/support/pages/navigationPage.js` - Site navigation
- `cypress/support/pages/userTypesPage.js` - Different user types handling

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
- **Standard User**: `standard_user` / `secret_sauce`
- **Problem User**: `problem_user` / `secret_sauce`
- **Performance Glitch User**: `performance_glitch_user` / `secret_sauce`
- **Locked Out User**: `locked_out_user` / `secret_sauce` (will be rejected)

## Features Coverage

### ✅ Implemented Features
1. **Login System** - Valid/invalid credentials, locked users
2. **Product Catalog** - View details, sorting, add to cart
3. **Shopping Cart** - Add/remove items, view contents
4. **Checkout Process** - Complete order with shipping info
5. **Site Navigation** - Menu, logout, footer links
6. **User Experience** - Different user types testing

### 🔄 Potential Future Enhancements
- API testing integration
- Visual regression testing
- Performance monitoring
- Cross-browser testing
- Mobile responsive testing

## Reports

Test execution videos and screenshots are automatically generated in:
- `cypress/videos/`
- `cypress/screenshots/`

## Troubleshooting

If you encounter issues:
1. Ensure all dependencies are installed: `npm install`
2. Clear Cypress cache: `npx cypress cache clear`
3. Verify Node.js