const {test,expect}=require('@playwright/test')
test('Register Functionlity',async({page})=>{
        await page.goto('https://automationexercise.com/login');
        await page.locator("//h2[text()='New User Signup!']");
        await page.locator("//input[@name='name']").click();
        await page.locator("//input[@name='name']").fill('Naveena');
        // await page.locator("//input[@name='email']").click();
        await page.locator("//input[@data-qa='signup-email']").fill('naveena3489@gmail.com');
        await page.click("//button[@data-qa='signup-button']");
        await page.close();
    }
    )
