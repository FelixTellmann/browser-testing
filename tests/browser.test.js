import { test } from '@playwright/test'

test('test browser', async ({ page }) => {
  // point this to wherever you want
  // await page.goto('http://localhost:3000/')
  // page.goto('http://localhost:3000/')
  page.goto('https://try.everymanjack.com/')
  // await page.goto('https://www.houseofmacadamias.com/')
  // await page.goto('https://hdlol13aq1m7sopm-19826381.shopifypreview.com')

  // keep browser open
  await page.pause()
})

