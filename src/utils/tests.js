import puppeteer from 'puppeteer';

export const getStorybookIframe = async (component, story) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(`http://localhost:7010/?path=/story/${component}--${story}`);

  const storybook = await page.$('#storybook-preview-iframe');

  return [storybook, browser, page];
};

export const getElementBySelector = async (storybook, cssSelector) => {
  const frame = await storybook.contentFrame();

  await frame.waitForSelector(cssSelector);
  const element = await frame.$(cssSelector);

  return element;
};

export const getBoundaryBox = async (element) => {
  const { x, y, width, height } = await element.boundingBox();

  return { x, y, width, height };
}

export const takeSnapshot = async (storybook, snapshotOptions) => {
  const screenshot = await storybook.screenshot(snapshotOptions);

  return screenshot;
};
