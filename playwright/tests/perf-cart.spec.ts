import { test, expect } from '@playwright/test';
import { logMetric, assertThreshold } from '../utils/perfHelper';

test('measure product and cart flow timings', async ({ page }) => {
  const homeStart = Date.now();
  await page.goto('https://demowebshop.tricentis.com/');
  const homeLoad = Date.now() - homeStart;
  logMetric('Home page load', homeLoad);
 assertThreshold('Home page load', homeLoad, 6000);

  const productStart = Date.now();
  await page.locator('text=14.1-inch Laptop').click();
  await expect(page).toHaveURL(/141-inch-laptop/i);
  const productOpen = Date.now() - productStart;
  logMetric('Product page open', productOpen);
  assertThreshold('Product page open', productOpen, 3000);

  const cartAddStart = Date.now();
  await page.locator('#add-to-cart-button-31').click();
  const cartAddTime = Date.now() - cartAddStart;
  logMetric('Add to cart action', cartAddTime);
  assertThreshold('Add to cart action', cartAddTime, 3000);

  const cartOpenStart = Date.now();
  await page.locator('a[href="/cart"]').first().click();
  await expect(page).toHaveURL(/cart/i);
  const cartOpen = Date.now() - cartOpenStart;
  logMetric('Cart page open', cartOpen);
  assertThreshold('Cart page open', cartOpen, 3000);

  await page.screenshot({ path: 'screenshots/perf-cart-page.png', fullPage: true });
});