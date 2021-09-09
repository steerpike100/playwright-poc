const { chromium, selectors } = require("playwright");

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://react-redux.realworld.io/#/login?_k=9l03t2");

  //class selector
  // const signIn = await page.$('.btn')
  //css selector 1
  // const signIn = await page.$('css=button')
  //css selector 2
  //const signIn = await page.$("button");
  //xpath selector 1
  //const signIn = await page.$('xpath=//button[@type="submit"]');
  //xpath selector 2
  //const signIn = await page.$('//button[@type="submit"]');
  //text selector
  //const signIn = await page.$('"Sign in"');

  //const form = await page.$("css=form");
  //const signIn = await form.$('"Sign in"');

  //const signIn = await page.$("css=form >> 'Sign in'")
  const signIn = await page.$("form >> 'Sign in'");

  await signIn.click();

  const input = await page.$$('.form-control')
  await input[0].click()
  await input[1].click()


  await browser.close();
})();
