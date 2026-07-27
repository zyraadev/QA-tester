import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { CheckoutCompletePage } from '../pages/CheckoutCompletePage';
import customer from '../test-data/customer.json';


test('Valid user can log in successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);
  const checkoutCompletePage = new CheckoutCompletePage(page);

  await loginPage.navigate();
  await loginPage.login('standard_user', 'secret_sauce');

  await inventoryPage.verifyInventoryPage();

  await inventoryPage.addBackpackToCart();
  await cartPage.verifyCartBadge('1');
  
  await cartPage.openCart();
  await cartPage.verifyProductInCart('Sauce Labs Backpack');

  await checkoutPage.clickCheckout();

await checkoutPage.fillCustomerInformation(
  customer.firstName,
  customer.lastName,
  customer.postalCode
);

await checkoutPage.continueCheckout();
await checkoutPage.finishOrder();
await checkoutCompletePage.verifyOrderSuccess();


});