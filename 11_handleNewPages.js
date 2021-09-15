const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 50 });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://react-redux.realworld.io/#/login');

  const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    page.click('a[target="_blank"]'), //opens a new tab
  ]);

  console.log(await page.title());
  console.log(await newPage.title());

  await browser.close();
})();
