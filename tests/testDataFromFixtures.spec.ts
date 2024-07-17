import {test, expect} from '@playwright/test';
import { test} from '../'

test.beforeEach("Login", async ({page}) => {

    test.setTimeout(120000); // 10 seconds timeout for each test case
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.getByPlaceholder('Username').fill('Admin')
    await page.getByPlaceholder('Password').fill('admin123')
    await page.getByRole('button', { name: 'Login'}).click()
    await expect(page.getByRole('heading', { name: 'Dashboard'})).toBeVisible()
});

test('testDataFromFixtures.spec', async ({page}) => {
    await page.getByRole('link', { name: 'Recruitment'}).click();
    await page.getByRole('button', { name: ' Add '}).click();
    await expect(page.locator('#app')).toContainText('Add Candidate');
    await page.getByPlaceholder('First Name').fill('Sam');
    await page.getByPlaceholder('Middle Name').fill('Johnson');
    await page.getByPlaceholder('Last Name').fill('Doe');
    await page.getByPlaceholder('Type here').first().fill('sam@gmail.com');
    await page.getByRole('button', { name: 'Save'}).click();
    //await expect(page.getByText('Application Stage')).toBeVisible();
});