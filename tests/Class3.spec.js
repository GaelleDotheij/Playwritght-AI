import {test,expect,chromium} from'@playwright/test';

test('open https://practicesoftwaretesting.com/ and check that the link to create a new account is visible', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');
  await page.waitForTimeout(4000); // pausa de 4 segundos
  await page.locator('[data-test="nav-sign-in"]').click();
  await page.waitForTimeout(4000); // pausa de 4 segundos
  expect(page.url()).toContain('login');
  await page.locator('[data-test="Register your account"]').click();
  expect(page.url()).toContain('register');
  // Use .not for one of the verifications
  await page.waitForTimeout(3000); // pausa de 3 segundos
  await page.locator('[data-test="New Account Creation"]').not.toBeVisible();
  // Use .soft to validate multiple fields in the account registration form
  await page.locator('[data-test="First name"]').soft().toBeVisible();
  await page.locator('[data-test="Family name"]').soft().toBeVisible(); //should fail
  await page.locator('[data-test="Street"]').soft().toBeVisible();
  await page.locator('[data-test="Number"]').soft().toBeVisible(); //should fail
  // Verify Registration button on the Registration Page is visible
  expect(page.locator('[data-test="register-submit"]')).toBeVisible();
});