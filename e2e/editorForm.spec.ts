import { test, expect } from '@playwright/test';

test('should fill and submit the form successfully', async ({ page }) => {
    // Navigate to the page
    await page.goto('http://localhost:3000'); // Make sure your app is running at this URL

    // Fill the form
    await page.fill('input[name="name"]', 'John Doe');

    // Submit the form
    await page.click('button[type="submit"]');

    // Verify that the success message is visible
    const successMessage = page.locator('text=Form successfully submitted!');
    await expect(successMessage).toBeVisible(); // This checks that the success message is visible on the page
});
