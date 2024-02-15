const {test,expect}=require('@playwright/test')
test('checkbox',async({page})=>{
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        await expect(page).toHaveTitle('OrangeHRM');
        await page.locator("//input[@name='username']").click();
        await page.locator("//input[@name='username']").fill('Admin');
        await page.locator("//input[@name='password']").click();
        await page.locator("//input[@name='password']").fill('admin123');
        await page.locator("//button[@type='submit']").click();
        await page.locator("//span[text()='Leave']").click(); 
        await page.locator("//span[contains(@class,'oxd-checkbox-input')]").click();
        await page.locator("//span[contains(@class,'oxd-checkbox-input')]").isChecked();
});