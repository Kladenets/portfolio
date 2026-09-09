import { expect, type Page, test } from '@playwright/test';

const mobileViewport = { width: 390, height: 844 };
const desktopViewport = { width: 900, height: 844 };

function getHeader(page: Page) {
  return page.locator('header');
}

function getToggle(page: Page) {
  return page.getByRole('button', {
    name: /software engineer kyle kent/i,
  });
}

async function getPanelHeight(page: Page) {
  return page
    .locator('#resume-contact')
    .evaluate((element) => element.getBoundingClientRect().height);
}

test.describe('responsive resume header', () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize(mobileViewport);
    await page.goto('/resume');
  });

  test('starts collapsed and has no horizontal overflow on mobile', async ({
    page,
  }) => {
    const toggle = getToggle(page);
    const panel = page.locator('#resume-contact');

    await expect(toggle).toHaveAttribute('aria-expanded', 'false');
    await expect(panel).toHaveAttribute('aria-hidden', 'true');
    await expect(panel).toHaveJSProperty('inert', true);
    await expect.poll(() => getPanelHeight(page)).toBe(0);
    expect(
      await page.evaluate(
        () =>
          document.documentElement.scrollWidth <=
          document.documentElement.clientWidth
      )
    ).toBe(true);
  });

  test('expands and collapses with the native keyboard interaction', async ({
    page,
  }) => {
    const toggle = getToggle(page);
    const panel = page.locator('#resume-contact');

    await toggle.focus();
    await toggle.press('Enter');
    await expect(toggle).toHaveAttribute('aria-expanded', 'true');
    await expect(panel).toHaveAttribute('aria-hidden', 'false');
    await expect.poll(() => getPanelHeight(page)).toBeGreaterThan(0);

    await toggle.press('Space');
    await expect(toggle).toHaveAttribute('aria-expanded', 'false');
    await expect.poll(() => getPanelHeight(page)).toBe(0);
  });

  test('allows the whole mobile header to toggle with a pointer', async ({
    page,
  }) => {
    const header = getHeader(page);
    const toggle = getToggle(page);
    const headerBox = await header.boundingBox();

    expect(headerBox).not.toBeNull();
    await page.mouse.click(headerBox!.x + 2, headerBox!.y + 2);
    await expect(toggle).toHaveAttribute('aria-expanded', 'true');

    await page.mouse.click(headerBox!.x + 2, headerBox!.y + 2);
    await expect(toggle).toHaveAttribute('aria-expanded', 'false');
  });

  test('collapses from the contact panel while preserving link semantics', async ({
    page,
  }) => {
    const toggle = getToggle(page);
    const panel = page.locator('#resume-contact');
    const links = panel.getByRole('link');

    await toggle.click();
    await expect(toggle).toHaveAttribute('aria-expanded', 'true');
    await expect(links).toHaveCount(4);
    await expect(links.first()).toHaveAttribute('href', /mailto:/);

    const panelBox = await panel.boundingBox();
    expect(panelBox).not.toBeNull();
    await page.mouse.click(
      panelBox!.x + panelBox!.width - 2,
      panelBox!.y + panelBox!.height - 2
    );
    await expect(toggle).toHaveAttribute('aria-expanded', 'false');
  });

  test('uses desktop link semantics and restores mobile disclosure on resize', async ({
    page,
  }) => {
    const toggle = getToggle(page);

    await toggle.click();
    await expect(toggle).toHaveAttribute('aria-expanded', 'true');
    await page.setViewportSize(desktopViewport);
    await expect(page.locator('header button')).toHaveCount(0);
    await expect(page.locator('#resume-contact').getByRole('link')).toHaveCount(
      4
    );
    await expect.poll(() => getPanelHeight(page)).toBeGreaterThan(0);

    await page.setViewportSize(mobileViewport);
    await expect(getToggle(page)).toHaveAttribute('aria-expanded', 'false');
    await expect.poll(() => getPanelHeight(page)).toBe(0);
  });

  test('honors reduced motion without changing the accessible states', async ({
    page,
  }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    const toggle = getToggle(page);

    await toggle.click();
    await expect(toggle).toHaveAttribute('aria-expanded', 'true');
    await expect(page.locator('#resume-contact')).toHaveAttribute(
      'aria-hidden',
      'false'
    );
  });
});
