import { Page, Locator, expect } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;
  readonly pageTitle: Locator;
  readonly cartIcon: Locator;
  readonly addBackpackButton: Locator;
  readonly sortDropdown: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pageTitle = page.locator('.title');
    this.cartIcon = page.locator('.shopping_cart_link');
    this.addBackpackButton = page.locator('#add-to-cart-sauce-labs-backpack');
    this.sortDropdown = page.locator('.product_sort_container');
  }

  async verifyInventoryPage() {
    await expect(this.page).toHaveURL(/inventory/);
    await expect(this.pageTitle).toHaveText('Products');
  }
  async addBackpackToCart() {
  await this.addBackpackButton.click();
  }

  async sortByNameAZ() {
  await this.sortDropdown.selectOption('az');
  }

  async getAllProductNames() {
  return await this.page
    .locator('.inventory_item_name')
    .allTextContents();
  } 

  async sortByNameZA() {
  await this.sortDropdown.selectOption('za');
  }

  async sortByPriceLowHigh() {
  await this.sortDropdown.selectOption('lohi');
  } 

  async getAllProductPrices() {
  const prices = await this.page
    .locator('.inventory_item_price')
    .allTextContents();

  return prices.map(price =>
    Number(price.replace('$', ''))
  );
}

async sortByPriceHighLow() {
  await this.sortDropdown.selectOption('hilo');
}




}