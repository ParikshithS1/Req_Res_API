const { expect } = require('@playwright/test');

class HeaderPage {
  constructor(page) {
    this.page = page;
    
    // Exact XPaths requested by the user
    this.logoReqRes = page.locator("(//span[contains(text(), 'Req')])[1]");
    this.navPricing = page.locator("(//a[normalize-space()='Pricing'])[1]");
    this.pricingSectionText = page.locator("//section[@id='pricing']//div[contains(@class, 'text-center')]/p[1]");
    this.navTeams = page.locator("(//a[@class='rr-nav-link'][normalize-space()='Teams'])[1]");
    this.teamsPageText = page.locator("//h1[contains(., 'One backend for')]");
    this.navBlog = page.locator("(//a[contains(@class, 'rr-nav-link')][normalize-space()='Blog'])[1]");
    this.blogPageText = page.locator("//p[normalize-space()='Blog']");
    this.navDocs = page.locator("(//a[contains(@class, 'rr-nav-link')][normalize-space()='Docs'])[1]");
    this.docsPageText = page.locator("//p[normalize-space()='Docs']");
    this.navAbout = page.locator("(//a[contains(@class, 'rr-nav-link')][normalize-space()='About'])[1]");
    this.aboutPageText = page.locator("//h1[contains(., 'About ReqRes')]");
    this.btnGetStarted = page.locator("(//a[normalize-space()='Get Started'])[1]");
    
    // Explicit requested XPaths for the modal verification step
    this.createAccountHeader = page.locator("//h1[normalize-space()='Create your account']");
    this.closeModalBtn = page.locator("//button[@aria-label='Close modal']");
    this.reqresHomeText = page.locator("//span[contains(normalize-space(.), 'ReqRes')]");
  }

  async navigate() {
    await this.page.goto('/');
  }

  async verifyLogo() {
    await expect(this.logoReqRes).toBeVisible();
  }

  async clickLogo() {
    await this.logoReqRes.click();
  }

  async verifyAndClickPricing() {
    await expect(this.navPricing).toBeVisible();
    await this.navPricing.click();
  }

  async verifyPricingSection() {
    await expect(this.pricingSectionText).toBeVisible();
  }

  async verifyAndClickTeams() {
    await expect(this.navTeams).toBeVisible();
    await this.navTeams.click();
  }

  async verifyTeamsPage() {
    await expect(this.teamsPageText).toBeVisible();
  }

  async verifyAndClickBlog() {
    await expect(this.navBlog).toBeVisible();
    await this.navBlog.click();
  }

  async verifyBlogPage() {
    await expect(this.blogPageText).toBeVisible();
  }

  async verifyAndClickDocs() {
    await expect(this.navDocs).toBeVisible();
    await this.navDocs.click();
  }

  async verifyDocsPage() {
    await expect(this.docsPageText).toBeVisible();
  }

  async verifyAndClickAbout() {
    await expect(this.navAbout).toBeVisible();
    await this.navAbout.click();
  }

  async verifyAboutPage() {
    await expect(this.aboutPageText).toBeVisible();
  }

  async verifyAndClickGetStarted() {
    await expect(this.btnGetStarted).toBeVisible();
    await this.btnGetStarted.click();
  }

  async verifyModalOpened() {
    await expect(this.createAccountHeader).toBeVisible({ timeout: 15000 });
  }

  async closeModal() {
    await this.closeModalBtn.click();
  }

  async verifyReqResHomeTextAndClick() {
    await expect(this.reqresHomeText).toBeVisible();
    await this.reqresHomeText.click();
  }
}

module.exports = { HeaderPage };