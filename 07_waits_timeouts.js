const { chromium } = require('playwright');
const expect = require('expect');

(async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 50 });
  const context = await browser.newContext();
  context.setDefaultTimeout(45000);
  const page = await context.newPage();
  page.setDefaultTimeout(45000);

  await page.goto('https://react-redux.realworld.io/#/login');
  const title = await page.title();
  expect(title).toBe('Conduit');

  await page.fill('input[type="email"]', 'qacamp.acad@gmail.com');
  await page.press('input[type="email"]', 'Tab');
  await page.type('input[type="password"]', 'test12345');
  //   await page.click('form >> "Sign in"');
  await page.click('form >> "Sign in"', { timeout: 45000 });

  //static wait
  await page.waitForTimeout(5000);

  //waitForSelector - default 30 seconds
  await page.waitForSelector('.ion-compose');

  //waitForNavigation
  await Promise.all([
    page.waitForNavigation(), //The promise resolves after the navigation has completed
    await page.click('form >> "Sign in"'), //Clicking the button will indi
  ]);

  //waitForEvent
  const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    page.click('a[target="_blank"]'), //Opens a new tab
  ]);

  //waitfForLoadState
  await page.waitForLoadState();

  await browser.close();
})();
