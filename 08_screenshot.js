const { chromium } = require('playwright');
const expect = require('expect');
const { saveVideo } = require('playwright-video');

(async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 50 });
  const context = await browser.newContext();
  const page = await context.newPage();

  const capture = await saveVideo(page, 'SignIn.mp4');

  await page.goto('https://react-redux.realworld.io/#/login');
  const title = await page.title();
  expect(title).toBe('Conduit');

  await page.fill('input[type="email"]', 'qacamp.acad@gmail.com');
  await page.press('input[type="email"]', 'Tab');
  await page.type('input[type="password"]', 'test12345');
  //   await page.click('form >> "Sign in"');
  await page.click('form >> "Sign in"');

  await capture.stop();

  const html = await page.innerHTML('.feed-toggle');
  expect(html).toMatch('Your Feed');

  //Screenshot
  await page.screenshot({ path: 'SignIn.png', fullPage: true });

  await browser.close();
  
})();
