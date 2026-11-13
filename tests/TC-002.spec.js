// @ts-check
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { ShopPage }  = require('../pages/ShopPage');
const { loginData } = require('../test-data/login.data');

test.describe('TC-002 — Valid Login with User Role', () => {

  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('should log in successfully after selecting User role, confirming the modal, and checking terms', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const shopPage  = new ShopPage(page);
    const { username, password } = loginData.validUser;

    // Step 2 — Select User radio button
    await loginPage.selectUserRole();

    // Step 3 — Verify the confirmation modal appears with the correct message
    await expect(loginPage.modal).toBeVisible();
    await expect(loginPage.modalBody).toContainText(
      'You will be limited to only fewer functionalities of the app. Proceed?'
    );

    // Step 4 — Confirm the modal by clicking Okay
    await loginPage.confirmUserRoleModal();

    // Verify modal is dismissed and User radio remains selected
    await expect(loginPage.modal).not.toBeVisible();
    await expect(loginPage.userRadio).toBeChecked();
    await expect(loginPage.adminRadio).not.toBeChecked();

    // Step 5 — Enter username
    await loginPage.fillUsername(username);

    // Step 6 — Enter password
    await loginPage.fillPassword(password);

    // Verify error alert is not visible before submission
    await expect(loginPage.errorAlert).not.toBeVisible();

    // Step 7 — Check the Terms & Conditions checkbox
    await loginPage.checkTerms();
    await expect(loginPage.termsCheckbox).toBeChecked();

    // Step 8 — Click Sign In
    await loginPage.clickSignIn();

    // Verify successful login: URL navigates to the shop
    await expect(page).toHaveURL(/angularpractice\/shop/);

    // Verify page title matches the authenticated application
    await expect(page).toHaveTitle('ProtoCommerce');

    // Verify key post-login landmark is visible
    await expect(shopPage.shopHeading).toBeVisible();

    // Verify no error alert is shown after login
    await expect(loginPage.errorAlert).not.toBeVisible();

    // Note: TC-002 expected result states "Limited functionality is applied for the User role."
    // No observable DOM difference between Admin and User role was found on the shop page
    // during live exploration. This aspect is Pending Requirement Clarification.
  });

});
