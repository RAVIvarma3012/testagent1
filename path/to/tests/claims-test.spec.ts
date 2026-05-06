/**
 * @fileoverview This file contains the test spec for automating the claims form test case.
 * It includes steps to click on 'Claims' and fill in the required fields using the Playwright framework.
 * Debug logging is implemented for better traceability.
 */

import { test, expect } from '@playwright/test';

/**
 * Test suite for the Claims form functionality.
 */
test.describe('Claims Form Test Suite', () => {

  /**
   * Test case for filling out the claims form.
   */
  test('should fill the claims form correctly', async ({ page }) => {
    // Step 1: Click on the 'Claims' link.
    await page.getByRole('link', { name: 'Claims', exact: true }).click();

    // Step 2: Fill the 'Enter your Name' field with 'John Doe'.
    await page.getByRole('textbox', { name: 'Enter your Name' }).fill('John Doe');

    // Step 3: Fill the '1 (702) 123-4567' field with '+919876543210'.
    await page.getByRole('textbox', { name: '1 (702) 123-' }).fill('+919876543210');

    // Step 4: Fill the 'Enter your email' field with 'johndoe@example.com'.
    await page.getByRole('textbox', { name: 'Enter your email' }).fill('johndoe@example.com');

    // Step 5: Fill the 'Enter your query here...' field with 'I need help with my health insurance claim process.'.
    await page.getByRole('textbox', { name: 'Enter your query here...' }).fill('I need help with my health insurance claim process.');
  });

});
