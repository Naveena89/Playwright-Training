import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/search?q=%27https%3A%2F%2Fopensource-demo.orangehrmlive.com%2Fweb%2Findex.php%2Fauth%2Flogin%27&oq=%27https%3A%2F%2Fopensource-demo.orangehrmlive.com%2Fweb%2Findex.php%2Fauth%2Flogin%27&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDQ2MjdqMGoyqAIAsAIA&sourceid=chrome&ie=UTF-8');
  await page.getByRole('link', { name: 'OrangeHRM HR Software |' }).click();
  await page.goto('https://www.google.com/search?q=%27https%3A%2F%2Fopensource-demo.orangehrmlive.com%2Fweb%2Findex.php%2Fauth%2Flogin%27&oq=%27https%3A%2F%2Fopensource-demo.orangehrmlive.com%2Fweb%2Findex.php%2Fauth%2Flogin%27&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDQ2MjdqMGoyqAIAsAIA&sourceid=chrome&ie=UTF-8');
  await page.getByRole('link', { name: 'OrangeHRM OrangeHRM https://opensource-demo.orangehrmlive.com' }).click();
});