// @ts-check
import { test, expect } from '@playwright/test'
const LOCALHOST_URL = 'http://localhost:5173/'
test('App shows random fact and image', async ({ page }) => {
  await page.goto(LOCALHOST_URL)

  const text = await page.getByRole('paragraph')
  const imageCat = await page.getByRole('catFact')
  const textContent = await text.textContent()
  // const imagefact = await imageCat.getAttribute('catFact')

  console.log({ page })
  await expect(textContent?.length).toBeGreaterThan(0)
  /*  await expect(imagefact?.length).toBeGreaterThan(0) */
})
