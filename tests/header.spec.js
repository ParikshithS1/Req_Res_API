const { test } = require('@playwright/test');
const { HeaderPage } = require('../src/ui/HeaderPage');

test.describe('ReqRes Header Feature Validation Flow', () => {

  test('Execute complete navigation journey using specific XPath flow @smoke @sanity @regression', async ({ page }) => {
    const headerPage = new HeaderPage(page);

    // 1. Visit Website
    await headerPage.navigate();
    
    // 2. Verify ReqRes logo present
    await headerPage.verifyLogo();

    // 3. Verify Pricing text and click it
    await headerPage.verifyAndClickPricing();

    // 4. Verify Pricing section text
    await headerPage.verifyPricingSection();

    // 5. Go back to header, verify Teams and click it
    await headerPage.verifyAndClickTeams();

    // 6. Verify Teams page text load
    await headerPage.verifyTeamsPage();

    // 7. Click ReqRes logo
    await headerPage.clickLogo();

    // 8. Verify Blog and click it
    await headerPage.verifyAndClickBlog();

    // 9. Verify Blog section text
    await headerPage.verifyBlogPage();

    // 10. Click ReqRes logo
    await headerPage.clickLogo();

    // 11. Verify Docs on header and click it
    await headerPage.verifyAndClickDocs();

    // 12. Verify Docs text inside body
    await headerPage.verifyDocsPage();

    // 13. Click ReqRes logo
    await headerPage.clickLogo();

    // 14. Verify About text and click it
    await headerPage.verifyAndClickAbout();

    // 15. Verify About ReqRes text inside body
    await headerPage.verifyAboutPage();

    // 16. Click back to ReqRes logo
    await headerPage.clickLogo();

    // 17. Verify Get Started button text and click it
    await headerPage.verifyAndClickGetStarted();

    // 18. Wait for pop-up modal to appear and verify "Create your account" text
    await headerPage.verifyModalOpened();

    // 19. Click cross mark to close modal
    await headerPage.closeModal();

    // 20. Verify final ReqRes text element and click to route to homepage
    await headerPage.verifyReqResHomeTextAndClick();
  });
});