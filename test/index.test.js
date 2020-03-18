const puppeteer = require('puppeteer');

const browserConfig = require('./../config/browser');
const resolutions = require('./../config/resolutions');
const pages = require('./../config/pages');
const scroll = require('./utils/scrollAllPage');

describe.each(pages)('Page %p',  (currentPage) => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch(browserConfig);
    page = await browser.newPage();

    await page.goto(`https://rubygarage.org/${currentPage}`);
  });

  test.each(resolutions)('Test screenshot on %i width, height %i > %s', async (width, height, d) => {
    await page.setViewport({
      width,
      height
    });
    await scroll(page);
    const image = await page.screenshot({fullPage: true});

    expect(image).toMatchImageSnapshot({
      customSnapshotsDir: `screenshots/rgorg-${currentPage}`,
      customSnapshotIdentifier: `${d}-${width}`
    });
  });

  afterAll(async () => {
    await browser.close();
  })
});
