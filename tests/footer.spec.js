const { test } = require('@playwright/test');
const { FooterPage } = require('../src/ui/FooterPage');

test.describe('ReqRes Footer Feature Validation Flow', () => {

  test('Execute complete navigation journey using specific XPath flow @smoke @sanity @regression', async ({ page }) => {
    const footerPage = new FooterPage(page);
  // 1. Visit Website
    await footerPage.navigate();

  //2. Verify the logo
await footerPage.verifyLogo();
   
  //3. Click the logo
      await footerPage.clickLogo();

      //4. Verify the docsPage
    await footerPage.verifyDocsPage();

    //5. Click on the docsPage
    await footerPage.clickDocsPage();

    await footerPage.clickLogoReq();
    //6. Verify the forCompanies
    await footerPage.verifyForCompaies();
   //7. Veriy the Sponsorship
await footerPage.verifySponsorship();
    //8. Verify the Support 
await footerPage.verifySupport();
  });  
});






