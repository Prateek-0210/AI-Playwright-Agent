// @ts-check

class LoginPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;

    // Locators
    this.usernameInput = page.locator('#username');
    this.passwordInput = page.locator('#password');
    this.adminRadio    = page.locator('input[value="admin"]');
    this.userRadio     = page.locator('input[value="user"]');
    this.signInButton  = page.locator('#signInBtn');
    this.errorAlert    = page.locator('.alert.alert-danger');
  }

  async navigate() {
    await this.page.goto('/loginpagePractise/');
  }

  /** @param {string} username */
  async fillUsername(username) {
    await this.usernameInput.fill(username);
  }

  /** @param {string} password */
  async fillPassword(password) {
    await this.passwordInput.fill(password);
  }

  async clickSignIn() {
    await this.signInButton.click();
  }

  /**
   * Convenience method: fill credentials and submit in one call.
   * @param {string} username
   * @param {string} password
   */
  async login(username, password) {
    await this.fillUsername(username);
    await this.fillPassword(password);
    await this.clickSignIn();
  }
}

module.exports = { LoginPage };
