// @ts-check

class ShopPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;

    // Locators
    this.shopHeading = page.getByRole('heading', { name: 'Shop Name', level: 1 });
  }
}

module.exports = { ShopPage };
