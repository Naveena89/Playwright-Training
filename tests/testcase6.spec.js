const {test,expect}=require('@playwright/test')
test('Contact Us',async({page})=>{
        await page.goto('https://automationexercise.com/login');
        await page.getByText('Contact us').click()  
        await expect(page.getByText('Get In Touch')).toBeVisible();
        await page.getByPlaceholder('Name').click(); 
        await page.getByPlaceholder('Name').fill('Naveena Roshika'); 
        await page.getByPlaceholder('Email', { exact: true }).click(); 
        await page.getByPlaceholder('Email', { exact: true }).fill('naveena3489@gmail.com'); 
        await page.getByPlaceholder('Subject').click(); 
        await page.getByPlaceholder('Subject').fill('Assignment'); 
        await page.getByPlaceholder('Your Message Here').click(); 
        await page.getByPlaceholder('Your Message Here').fill('Hello'); 
        await page.getByText('Submit').click(); 
        //await page.getByText('OK').click(); // ok button
        await expect(page.getByText('Success! Your details have been submitted successfully.')).toBeVisible();
        await page,getByText('Home').click();
        await page.waitForTimeout(3000);
        //await page.close();
    }
    )