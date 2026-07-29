import { Page, Locator, expect } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly cartBadge: Locator;
  readonly cartIcon: Locator;
  readonly productName: Locator;
  readonly productPrice: Locator;
  readonly productQuantity: Locator;
  readonly removeButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartBadge = page.locator('.shopping_cart_badge');
    this.cartIcon = page.locator('.shopping_cart_link');
    this.productName = page.locator('.inventory_item_name');
    this.productPrice = page.locator('.inventory_item_price');
    this.productQuantity = page.locator('.cart_quantity');
    this.removeButton = page.locator('#remove-sauce-labs-backpack');
  }

  async verifyCartBadge(count: string) {
    await expect(this.cartBadge).toHaveText(count);
  }

  async openCart() {
    await this.cartIcon.click();
  }

  async verifyProductInCart(product: string) {
    await expect(this.productName).toHaveText(product);
  }

  async verifyProductPrice(price: string) {
    await expect(this.productPrice)
        .toHaveText(price);
  }

  async verifyProductQuantity(quantity: string) {
    await expect(this.productQuantity)
        .toHaveText(quantity);
  }

  async removeProduct() {
  await this.removeButton.click();
  }

  async verifyCartIsEmpty() {
  await expect(this.cartBadge).not.toBeVisible();
  }





  
}