import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.navigate();

  await loginPage.login(
    'standard_user',
    'secret_sauce'
  );
});

test('User can add Backpack to cart', async ({ page }) => {

  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);

  await inventoryPage.addBackpackToCart();

  await cartPage.verifyCartBadge('1');

});

test('User can open the cart', async ({ page }) => {

  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);

  await inventoryPage.addBackpackToCart();

  await cartPage.openCart();

  await expect(page).toHaveURL(/cart/);

  await cartPage.verifyProductInCart('Sauce Labs Backpack');
  await cartPage.verifyProductPrice('$29.99');
  await cartPage.verifyProductQuantity('1');

});