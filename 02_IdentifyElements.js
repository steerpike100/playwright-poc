const {chromium} = require('playwright');

(async() => {
const browser = await chromium.launch({headless:false})
const page = await browser.newContext()
const page = await browser.newPage()
await page.goto("https://react-redux.realworld.io/#/login?_k=9l03t2")
})()    


