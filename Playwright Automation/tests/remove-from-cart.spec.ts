import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.navigate();
  await loginPage.login('standard_user', 'secret_sauce');
});

test('User can remove item from cart', async ({ page }) => {

  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);

  // Add an item
  await inventoryPage.addBackpackToCart();

  // Verify badge
  await cartPage.verifyCartBadge('1');

  // Open cart
  await cartPage.openCart();

  // Verify product exists
  await cartPage.verifyProductInCart('Sauce Labs Backpack');

  // Remove product
  await cartPage.removeProduct();

  // Verify cart is now empty
  await cartPage.verifyCartIsEmpty();

});

