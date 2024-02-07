const {test,expect}=require('@playwright/test')
test('Adding User',async({page})=>{
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        await expect(page).toHaveTitle('OrangeHRM');
        await page.locator("//input[@name='username']").click();
        await page.locator("//input[@name='username']").fill('Admin');
        await page.locator("//input[@name='password']").click();
        await page.locator("//input[@name='password']").fill('admin123');
        await page.locator("//button[@type='submit']").click();
        await page.locator("//span[text()='Admin']").click(); //Admin button
        
        //Adding User 
        await page.locator("//button[@class='oxd-button oxd-button--medium oxd-button--secondary']").click(); // Add button
        await expect(page.locator("//label[text()='User Role']")).toBeVisible(); //user role
        await page.locator("//label[text()='User Role']/parent::div/following-sibling::div").click(); 
        await page.getByRole('option', { name: 'Admin' }).click();
        await expect(page.locator("//label[text()='Status']")).toBeVisible(); //status
        await page.locator("//label[text()='Status']/parent::div/following-sibling::div").click();
        await page.locator("//span[text()='Enabled']").click();
        await expect(page.locator("//label[text()='Username']")).toBeVisible(); 
        await page.getByPlaceholder('Type for hints...').fill('Haider Ali');
        await page.locator("//label[text()='Username']/parent::div/following-sibling::div/input").fill('Naveena');      
        await page.locator("//label[text()='Password']/parent::div/following-sibling::div/input").fill('Naveena89');
        await page.locator("//label[text()='Confirm Password']/parent::div/following-sibling::div/input").fill('Naveena89');
        await page.getByText('Save').click();
        await page.waitForTimeout(3000);
});