// @ts-check
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { ShopPage }  = require('../pages/ShopPage');
const { loginData } = require('../test-data/login.data');

test.describe('TC-003 — Valid Login with Terms Checkbox Checked', () => {

  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('should log in successfully when Terms and Conditions checkbox is checked before submitting', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const shopPage  = new ShopPage(page);
    const { username, password } = loginData.validUser;

    // Precondition — Admin radio is selected by default (no interaction required)
    await expect(loginPage.adminRadio).toBeChecked();

    // Step 2 — Enter username
    await loginPage.fillUsername(username);

    // Step 3 — Enter password
    await loginPage.fillPassword(password);

    // Step 4 — Check the Terms & Conditions checkbox
    await loginPage.checkTerms();
    await expect(loginPage.termsCheckbox).toBeChecked();

    // Verify error alert is not visible before submission
    await expect(loginPage.errorAlert).not.toBeVisible();

    // Step 5 — Click Sign In
    await loginPage.clickSignIn();

    // Expected Result — Login succeeds and user is redirected
    await expect(page).toHaveURL(/angularpractice\/shop/);
    await expect(page).toHaveTitle('ProtoCommerce');
    await expect(shopPage.shopHeading).toBeVisible();

    // Expected Result — No error is shown
    await expect(loginPage.errorAlert).not.toBeVisible();
  });

});
