import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('User cannot log in with invalid password', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.navigate();

  await loginPage.login(
    'standard_user',
    'wrong_password'
  );

  await loginPage.verifyLoginError();
});