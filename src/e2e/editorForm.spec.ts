import { test, expect } from '@playwright/test';

test('Dynamic form should render, submit successfully, and verify success message', async ({ page }) => {
  await page.goto('http://localhost:3000');

  // Enter valid JSON schema
  await page.fill('textarea', JSON.stringify({
    fields: [{ id: "name", label: "Name", required: true }]
  }));

  // Verify form renders
  await expect(page.locator('label')).toContainText('Name');

  // Fill form and submit
  await page.fill('input[name="name"]', 'John Doe');
  await page.click('button[type="submit"]');

  // Verify successful submission (adjust selector based on your implementation)
  const successMessage = await page.locator('.success-message'); // Example selector
  await expect(successMessage).toBeVisible(); // Assert visibility
  await expect(successMessage).toContainText('Form successfully submitted!'); // Assert content
});