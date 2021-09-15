const { chromium } = require('playwright');
const expect = require('expect');
const { saveVideo } = require('playwright-video');

(async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 50 });
  const context = await browser.newContext({recordVideo:{dir: 'videos/'}});

  const page = await context.newPage();

//   const capture = await saveVideo(page, 'SignIn.mp4');

  await page.goto('https://react-redux.realworld.io/#/login');

  await page.fill('input[type="email"]', 'qacamp.acad@gmail.com');
  await page.press('input[type="email"]', 'Tab');
  await page.type('input[type="password"]', 'test12345');
  await page.click('form >> "Sign in"');

  await context.close();
//   await capture.stop();

  await browser.close();
})();
