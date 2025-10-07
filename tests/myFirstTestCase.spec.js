import {test,expect,chromium} from'@playwright/test';

/*test('open google and search for Endava',async({page})=>{
  await page.goto('https://www.google.com');
  await page.locator('input[name="q"]').fill('Endava');
  await page.locator('[name="q"]').click('Enter');
  await expect(page).toHaveURL(/Endava/);
});*/

test('open https://practicesoftwaretesting.com/ and check for item to exist in the menu', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');
  await page.locator('[data-test="search-query"]').fill('Hammer');
  await page.locator('[data-test="search-submit"]').click();
  // Verifica que en cada card el título contenga 'hammer'
  await page.waitForTimeout(3000); // pausa de 3 segundos
  await page.waitForSelector('[data-test="product-name"]');
  const productNames = await page.locator('[data-test="product-name"]').allTextContents();
  console.log(productNames.length);
  // Confirmar que todos contienen 'hammer'
  expect(productNames.every(name => name.toLowerCase().includes('hammer'))).toBeTruthy();
  for (let i = 0; i < productNames.length; i++) {
    console.log(productNames[i]);
  }
  // Assertion: verify que el span con data-test='search-term' no contenga 'saw'
  expect(productNames.every(name => name.toLowerCase().includes('saw'))).toBeFalsy();
  //Type "brush" in the search input and click on the search button and no result found
  await page.locator('[data-test="search-query"]').fill('Brush');
  await page.locator('[data-test="search-submit"]').click();
  await page.waitForTimeout(3000); // pausa de 3 segundos
  await expect(page.locator('[data-test="no-results"]')).toBeVisible();
  const noResultsText = await page.locator('[data-test="no-results"]').innerText();
  console.log(noResultsText);
});