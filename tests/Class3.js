import {test,expect,chromium} from'@playwright/test';
test('open https://practicesoftwaretesting.com/ and check that the link to create a new account is visible', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');
  await page.locator('[data-test="Sign in"]').click();
  expect(page.url()).toContain('login');
  await page.locator('[data-test="Register your account"]').click();
  expect(page.url()).toContain('register');
  // Use .not for one of the verifications
  await page.waitForTimeout(3000); // pausa de 3 segundos
  await page.locator('[data-test="New Account Creation"]').not.toBeVisible();
  // Use .soft to validate multiple fields in the account registration form
  
  
  // Verify Registration button on the Registration Page is visible
  expect(productNames.every(name => name.toLowerCase().includes('saw'))).toBeFalsy();
  Type "brush" in the search input and click on the search button and no result found
});