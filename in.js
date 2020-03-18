const puppeteer = require('puppeteer');

const obj = {};
async function higher() {
  const browser = await puppeteer.launch();

  async function kraul(href){
    const page = await browser.newPage();

    const response = await page.goto(href);
    obj[href] = response._status;
    let hrefs = await page.$$eval('a', as => as.map(a => a.href));
    if (hrefs) {
      hrefs.forEach(item => {
        console.log(item);
        if (typeof item === "string" && !(item in obj)) {
          console.log(obj);
          kraul(item);
        }
      });
    }
  }

  kraul('https://rubygarage.org');
}

higher();
