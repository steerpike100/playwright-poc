const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 50 });
//   const context = await browser.newContext({
//     viewport: { width: 1600, height: 1200 },
//   });
  const page = await context.newPage();
  await page.setViewportSize({ width: 1600, height: 1200 });

  await page.goto('https://todomvc.com/examples/react/#/');
})();


const puppeteer = require('puppeteer');
const browser = await puppeteer.launch()
const page = await browser.newPage()
await page.goto('https://todomvc.com/examples/react/#/')

await page.setViewport({ width: 2560, height: 1329 })

await page.waitForSelector('.learn-bar > .todoapp > div > .header > .new-todo')
await page.click('.learn-bar > .todoapp > div > .header > .new-todo')

await page.waitForSelector('.learn-bar > .todoapp > div > .header > .new-todo')
await page.click('.learn-bar > .todoapp > div > .header > .new-todo')

await browser.close()