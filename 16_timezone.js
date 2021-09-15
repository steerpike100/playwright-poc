const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
const context = await browser.newContext(){
    locale"'de-DE
}
const page = await context.newPage()

  await page.goto('https://todomvc.com/examples/react/#/');
})();
