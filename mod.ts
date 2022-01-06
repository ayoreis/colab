import puppeteer from 'https://deno.land/x/puppeteer@9.0.2/mod.ts'

const browser = await puppeteer.launch()
const page = await browser.newPage()

await page.goto('https://colab.to')
await page.screenshot({ path: 'example.png' })

await browser.close()