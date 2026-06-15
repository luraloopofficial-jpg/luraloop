const puppeteer = require('puppeteer-core');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:/Users/MUHAMMED AMEEN/.cache/puppeteer/chrome/win64-149.0.7827.22/chrome-win64/chrome.exe',
    headless: "new"
  });
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', error => console.log('PAGE ERROR:', error.message));

  try {
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
  } catch (e) {
    console.error("Navigation error:", e);
  }
  
  await browser.close();
})();
