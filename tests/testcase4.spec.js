const {test,expect}=require('@playwright/test')
test('Login and Logout Functionlity',async({page})=>{
        await page.goto('https://automationexercise.com/login');
        await page.locator("//h2[text()='Login to your account']"); //login
        await page.locator("//input[@data-qa='login-email']").fill('naveena3489@gmail.com');
        await page.locator("//input[@data-qa='login-password']").fill('Naveena89')
        await page.click("//button[@data-qa='login-button']");
        await page.getByText('Logout').click()  //logout
        await page.close();
    }
    )