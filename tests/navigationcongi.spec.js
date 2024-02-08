// navigation config
const {test,expect}=require('@playwright/test')
test('Navigation Config',async({page})=>{
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        await expect(page).toHaveTitle('OrangeHRM');
        await page.locator("//input[@name='username']").click();
        await page.locator("//input[@name='username']").fill('Admin');
        await page.locator("//input[@name='password']").click();
        await page.locator("//input[@name='password']").fill('admin123');
        await page.locator("//button[@type='submit']").click();
        await page.locator("//span[text()='Admin']").click(); //Admin button
});