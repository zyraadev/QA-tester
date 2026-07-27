# QA Tester Portfolio

Manual and automated QA testing portfolio targeting [SauceDemo](https://www.saucedemo.com/).


## Manual Testing

Bug reports tracked in `Bug reports.xlsx` with reproduction steps, expected/actual results, and severity. Supporting screenshots stored in `Screenshots/`.

## Playwright Automation

Page Object Model pattern with TypeScript. Tests cover login, add-to-cart, cart verification, checkout, and order completion.


### Tested Flow

1. Login with valid credentials
2. Verify inventory page loads
3. Add product to cart
4. Verify cart badge count
5. Open cart and verify product
6. Complete checkout with customer info
7. Verify order confirmation

## Tech Stack

- **Framework:** Playwright Test
- **Language:** TypeScript
- **Pattern:** Page Object Model
- **Browsers:** Chromium, Firefox, WebKit
