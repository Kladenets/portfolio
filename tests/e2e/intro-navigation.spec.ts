import { expect, test } from '@playwright/test';

const viewports = [
  { name: 'mobile', width: 390, height: 844 },
  { name: 'desktop', width: 1280, height: 844 },
];

test.describe('intro navigation', () => {
  for (const viewport of viewports) {
    test(`arrow scrolls to skills on ${viewport.name}`, async ({ page }) => {
      await page.setViewportSize(viewport);
      await page.goto('/');

      const arrow = page.getByRole('link', { name: 'Scroll to skills' });
      const skills = page.locator('#skills');

      await expect(arrow).toHaveAttribute('href', '#skills');
      await arrow.click();
      await expect(page).toHaveURL(/#skills$/);

      await expect
        .poll(
          () =>
            skills.evaluate((element) => {
              const scrollContainer = element.closest('main');
              if (!scrollContainer) return Number.POSITIVE_INFINITY;

              return Math.abs(
                element.getBoundingClientRect().top -
                  scrollContainer.getBoundingClientRect().top
              );
            }),
          { timeout: 5000 }
        )
        .toBeLessThan(4);
    });
  }
});
