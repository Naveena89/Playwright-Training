const {test,expect}=require('@playwright/test')
test('Invoice',async({page})=>{
        await page.goto('https://automationexercise.com/login'); 
        await expect(page.getByText('Home')).toBeVisible();
        
        await page.locator("//h2[text()='Login to your account']"); //login
        await page.locator("//input[@data-qa='login-email']").fill('naveena3489@gmail.com');
        await page.locator("//input[@data-qa='login-password']").fill('Naveena89')
        await page.locator("//button[@data-qa='login-button']").click();
        await page.getByText('Cart', { exact: true }).click();
        //await page.getByText('Continue Shopping', { exact: true }).click();
        // await page.getByText('Products', { exact: true }).click(); 
        // await page.getByText('Add to Cart', { exact: true }).first().click();
        await page.getByText('Proceed to Checkout').click(); 
        //await page.getByText('Description').fill('Lovely Product');
        await page.getByText('Place Order').click();
        await page.locator("//input[@class='form-control']").fill('Naveena');
        //await page.getByText("//input[@name='card_number']").fill('9874566942152895');
        // await page.getByText('CVC').fill('896');
        // await page.getByPlaceholder('MM').fill('10');
        // await page.getByPlaceholder('YYYY').fill('2025');
        // await page.getByText('Pay and Confirm Order').click();
        // await expect(page.getByText('Your order has been placed successfully!')).toBeVisible();
        // await page.getByText('Download Invoice').click();
        // await page.getByText('Continue').click();
        await page.waitForTimeout(3000);
    });