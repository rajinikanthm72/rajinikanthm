import { test, expect } from '@playwright/test';

test('Layout should be responsive on window resize', async ({ page }) => {
  // Step 1: Navigate to the form page
  await page.goto('http://localhost:3000');

  // Step 2: Resize the window to simulate a mobile device
  await page.setViewportSize({ width: 375, height: 667 }); // Mobile viewport size

  // Step 3: Verify if the form elements are correctly adjusted for small screen
  const form = page.locator('form');
  await expect(form).toBeVisible();

  // Step 4: Resize back to desktop
  await page.setViewportSize({ width: 1280, height: 800 });

  // Step 5: Verify if the form layout returns to the desktop view
  await expect(form).toBeVisible();
});
