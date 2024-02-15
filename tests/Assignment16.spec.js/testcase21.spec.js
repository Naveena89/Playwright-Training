const {test,expect}=require('@playwright/test')
test('Product',async({page})=>{
        await page.goto('https://automationexercise.com/login');
        await page.getByText('Products').click();  
        await expect(page.getByText('All Products')).toBeVisible();
        await page.getByText('View Product').first().click();
        await expect(page.getByText('Write Your Review')).toBeVisible();
        await page.getByPlaceholder('Your Name').fill('Naveena Roshika');
        await page.getByPlaceholder('Email Address', { exact: true }).fill('naveena3489@gmail.com');
        await page.getByPlaceholder('Add Review Here!').fill('Nice Product');
        await page.getByText('Submit').click(); 
        await expect.soft(page.getByText('Thank you for your review.')).toBeVisible();
        await page.waitForTimeout(3000);
        //await page.close();
    }
    )