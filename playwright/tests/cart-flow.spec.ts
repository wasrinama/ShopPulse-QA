import { test, expect } from '@playwright/test';

test('add product to cart and verify cart page', async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com/');

  await page.locator('text=14.1-inch Laptop').click();
  await expect(page).toHaveURL(/141-inch-laptop/i);

  await page.locator('#add-to-cart-button-31').click();

  await page.locator('a[href="/cart"]').first().click();
  await expect(page).toHaveURL(/cart/i);

  await expect(page.locator('.cart')).toContainText('14.1-inch Laptop');

  await page.screenshot({ path: 'screenshots/cart-page.png', fullPage: true });
});
