import { toMatchImageSnapshot } from 'jest-image-snapshot';
import { getStorybookIframe, getElementBySelector, getBoundaryBox, takeSnapshot } from 'utils';

expect.extend({ toMatchImageSnapshot });

describe('Button Visual Suite', () => {
  let browser;
  let page;
  let storybook;
  let button;
  beforeAll(async () => {
    [storybook, browser, page] = await getStorybookIframe('button', 'with-text');
    button = await getElementBySelector(storybook, '[data-test-id="custom-component"]');
  });

  afterAll(async () => {
    browser.close();
  });

  it('should render button', async () => {
    const clip = await getBoundaryBox(button);

    const normalSnapshot = await takeSnapshot(storybook, { clip });

    expect(normalSnapshot).toMatchImageSnapshot();
  });

  it('should render red hover button', async () => {
    const clip = await getBoundaryBox(button);

    await button.hover();
    const normalSnapshot = await takeSnapshot(storybook, { clip });

    expect(normalSnapshot).toMatchImageSnapshot();
  });

  it('should render blue active button', async () => {
    const clip = await getBoundaryBox(button);
    const x = clip.x + (clip.width / 2);
    const y = clip.y + (clip.height / 2);
    page.mouse.move(x, y);
    page.mouse.down();
    const normalSnapshot = await takeSnapshot(storybook, { clip });

    expect(normalSnapshot).toMatchImageSnapshot();
  })
});
