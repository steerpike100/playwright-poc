const { chromium, selectors } = require('playwright');
const expect = require('expect');
// (async () => {
//   const browser = await chromium.launch({ headless: false, slowMo: 50 });
//   const context = await browser.newContext();
//   const page = await context.newPage();
//   await page.goto("https://react-redux.realworld.io/#/login?_k=9l03t2");

//   await page.fill('input[type="email"]', "qacamp.acad@gmail.com");
//   await page.press('input[type="email"]', "Tab");
//   await page.type('input[type="password"]', "test12345");
//   await page.click('form >> "Sign in"', { position: { x: 0, y: 0 }, button: 'left', modifiers:['Shift'], force:true, timeout:45000})})
// await page.dblclick('form >> "Sign in"')})
// await page.focus('form >> "Sign in"');
// await page.focus('form >> "Sign in"');
// ();

// (async () => {
//     const browser = await chromium.launch({ headless: false, slowMo: 50 });
//     const context = await browser.newContext();
//     const page = await context.newPage();
//     await page.goto("https://todomvc.com/examples/react/#/");

//     await page.type('.new-todo', "Task_1")
//     await page.keyboard.press('Enter')
//     await page.type('.new-todo', "Task_2")
//     await page.keyboard.press('Enter')

//     const elements = await page.$$('.toggle')
//     elements.forEach(element => element.check())

//   })();

(async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 50 });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://react-redux.realworld.io/#/login?_k=9l03t2');

  await page.fill('input[type="email"]', 'qacamp.acad@gmail.com');
  await page.press('input[type="email"]', 'Tab');
  await page.type('input[type="password"]', 'test12345');
  await page.click('form >> "Sign in"');
  // await page.click('form >> "Sign in"', {
  //   position: { x: 0, y: 0 },
  //   button: 'left',
  //   modifiers: ['Shift'],
  //   force: true,
  //   timeout: 45000,
  // });

  await page.waitForTimeout(25000);

  const logoText = await page.$eval('.navbar-brand', (el) => el.innerText);
  expect(logoText).toBe('conduit');

  const logoHref = await page.$eval('.navbar-brand', (el) => el.href);
  expect(logoHref).toBeDefined();

  const popularTags = await page.$$eval('.navbar-brand', (el) => el.length);
  expect(popularTags).toBeGreaterThanOrEqual(5);
  expect(popularTags).toBeLessThan(30);
  expect(popularTags).toEqual(20);

  // const content = await page.textContent('.navbar-brand');
  // console.log('content:' + content);

  // const text = await page.innerText('.navbar-brand');
  // console.log('text:' + content);

  const html = await page.innerHTML('.feed-toggle');
  expect(html).toMatch('Your Feed');
  expect(html).toMatch('Global Feed');

  const href = await page.getAttribute('.navbar-brand', 'href');
  expect(href).not.toMatch('https://react-redux/blah.io');

  await browser.close();
})();
