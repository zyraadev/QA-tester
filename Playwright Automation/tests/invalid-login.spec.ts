import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import invalidUsers from '../test-data/invalidLogin.json';

for (const user of invalidUsers) {
  test(`Invalid login: ${user.name}`, async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();

    await loginPage.login(
      user.username,
      user.password
    );

    await loginPage.verifyLoginError(user.expectedError);
  });
}