import { test, expect } from '@playwright/test';

test('home page loads successfully', async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com/');
  await expect(page).toHaveTitle(/Demo Web Shop/i);
  await expect(page.locator('.product-grid')).toBeVisible();
});