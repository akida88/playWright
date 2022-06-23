// @ts-check
const { test, expect } = require('@playwright/test');
const Linkmobility = 'Linkmobility';
const url = 'https://www.linkedin.com/';


test.describe('LinkedIn Search',  () => {
  test('click on Jobs icon', async ({page,context,browser}) => {
    await page.goto(url);
    await page.click('text="Jobs"');
    await page.locator('[placeholder="Search job titles or companies"]').fill(Linkmobility);
    await page.press('[placeholder="Location"]', 'Delete');
    await page.fill('[placeholder="Location"]', 'Sofia, Sofia City, Bulgaria');
    await page.press('[placeholder="Location"]', 'Enter');
    await expect(page.locator('body:has(section[class="two-pane-serp-page__results-list"]) >>ul>>li>> a >>span>> text="Product Owner"'))
    .toBeVisible();
    await page.click(`[data-tracking-control-name='public_jobs_jserp-result_search-card']`);
    const [newPage] = await Promise.all([context.waitForEvent('page'), await page.click('text="Apply on company website"')]);
    const shortUrl = "https://careers.linkmobility.com/apply/product-owner/c7cmyj";
    const longUrl = "https://www.linkedin.com/jobs/view/externalApply/3071901421";
    const newPageUrl = await  newPage.url();
     const index = newPageUrl.indexOf("?");
    const filteredPage = newPageUrl.substring(0,index);
    console.log(filteredPage);
    const is = newPageUrl ==shortUrl || filteredPage ==longUrl;
    await expect(is).toBe(true);

  });
});
