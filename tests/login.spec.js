// @ts-check
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { ShopPage }  = require('../pages/ShopPage');
const { loginData } = require('../test-data/login.data');

test.describe('TC-001 — Valid Login with Admin Role (Default State)', () => {

  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('should log in successfully with valid credentials and Admin role selected by default', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const shopPage  = new ShopPage(page);
    const { username, password } = loginData.validUser;

    // Step 2 — Verify Admin radio is pre-selected on page load (no interaction)
    await expect(loginPage.adminRadio).toBeChecked();
    await expect(loginPage.userRadio).not.toBeChecked();

    // Steps 3–4 — Enter credentials
    await loginPage.fillUsername(username);
    await loginPage.fillPassword(password);

    // Verify error alert is not visible before submission
    await expect(loginPage.errorAlert).not.toBeVisible();

    // Step 5 — Click Sign In
    await loginPage.clickSignIn();

    // Step 6 — Verify URL navigates away from the login page
    await expect(page).toHaveURL(/angularpractice\/shop/);

    // Step 7 — Verify page title matches the authenticated application
    await expect(page).toHaveTitle('ProtoCommerce');

    // Step 8 — Verify key post-login landmark is visible
    await expect(shopPage.shopHeading).toBeVisible();

    // Verify no error alert leaked through
    await expect(loginPage.errorAlert).not.toBeVisible();
  });

});
