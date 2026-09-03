const { expect } = require('@playwright/test');

class FooterPage {
  constructor(page) {
    this.page = page;
  // Exact XPaths requested by the user
this.logoReqRes = page.locator("(//span[contains(text(), 'Req') and ./span[text()='Res']])[3]");
this.docsPage = page.locator("(//a[contains(text(),'Docs')])[3]");
this.logoReq = page.locator("(//span[contains(text(), 'Req')])[1]");
this.forCompanies =  page.locator("//a[contains(text(),'For companies')]");
this.sponshorship = page.locator("(//a[@data-visitors-event='Sponsorship CTA'])[2]");
this.support = page.locator("//a[contains(text(),'Support')]");
   
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

  async verifyDocsPage(){
    await expect(this.docsPage).toBeVisible();
  }

  async clickDocsPage(){
    await this.docsPage.click();
  }

    async clickLogoReq() {
    await this.logoReq.click();
  }

  async verifyForCompaies(){
    await expect(this.forCompanies).toBeVisible();
  }
  
 async verifySponsorship(){
    await expect(this.sponshorship).toBeVisible();
  }
 
  async verifySupport(){
await expect(this.support).toBeVisible();
  }
}
 module.exports = { FooterPage };   
