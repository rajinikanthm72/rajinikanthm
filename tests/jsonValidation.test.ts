import { test, expect } from '@playwright/test';

test('JSON schema should validate correctly', async ({ page }) => {
  // Step 1: Navigate to the form page
  await page.goto('http://localhost:3000');

  // Step 2: Enter an invalid JSON schema
  const invalidSchema = '{ "fields": [{ "id": "name", "label": "Name" }]'; // Missing closing brace
  await page.fill('textarea', invalidSchema);

  // Step 3: Verify if an error message appears for invalid JSON
  const errorMessage = page.locator('.error-message'); // Assuming error message is displayed with class '.error-message'
  await expect(errorMessage).toBeVisible();

  // Step 4: Enter a valid JSON schema
  const validSchema = JSON.stringify({
    fields: [{ id: "name", label: "Name", required: true }]
  });
  await page.fill('textarea', validSchema);

  // Step 5: Verify that no error message appears for valid JSON
  await expect(errorMessage).not.toBeVisible();
});
