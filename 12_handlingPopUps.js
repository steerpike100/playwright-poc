const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 50 });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://react-redux.realworld.io/#/login');

  const [newPage] = await Promise.all([
    context.waitForEvent('popup'),
    page.click('#open'), //opens a pop up
  ]);

  await browser.close();
})();
