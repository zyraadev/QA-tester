import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';

test('Products are sorted A to Z', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  await loginPage.navigate();
  await loginPage.login('standard_user', 'secret_sauce');

  await inventoryPage.sortByNameAZ();

  const actualProducts =
    await inventoryPage.getAllProductNames();

  const expectedProducts =
    [...actualProducts].sort();

  expect(actualProducts).toEqual(expectedProducts);

});

test('Products are sorted Z to A', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  await loginPage.navigate();
  await loginPage.login(
    'standard_user',
    'secret_sauce'
  );

  await inventoryPage.sortByNameZA();

  const actualProducts =
    await inventoryPage.getAllProductNames();

  const expectedProducts =
    [...actualProducts].sort().reverse();

  expect(actualProducts).toEqual(expectedProducts);

});