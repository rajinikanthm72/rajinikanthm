import { test, expect } from '@playwright/test';

test('Dynamic form should render and submit successfully', async ({ page }) => {
  // Step 1: Navigate to the form page
  await page.goto('http://localhost:3000');

  // Step 2: Enter valid JSON schema (ensure this matches your application's expected format)
  await page.fill('textarea', JSON.stringify({
    fields: [{ id: "name", label: "Name", required: true }]
  }));

  // Step 3: Verify form renders (check for label text)
  const label = page.locator('label');
  await expect(page.locator('text=Form successfully submitted!')).toBeVisible();


  // Step 4: Fill out the form input with the required value
  await page.fill('input[name="name"]', 'John Doe');

  // Step 5: Ensure that the submit button is present and submit the form
  // Using string selector directly with page.click()
  await page.click('button[type="submit"]');

  // Step 6: Verify success message appears after form submission
  const successMessage = page.locator('text=Form successfully submitted!');
  await expect(successMessage).toBeVisible();
});
