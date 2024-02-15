const {test,expect}=require('@playwright/test')
test('Student Registration Form',async({page})=>{
        await page.goto('https://demoqa.com/automation-practice-form');
        //await page.getByText('Practice Form').click();
        await expect(page.getByText('Name')).toBeVisible();
        await expect(page.getByText('Email')).toBeVisible();
        await expect(page.getByText('Gender')).toBeVisible();
        await expect(page.getByText('Mobile(10 Digits)')).toBeVisible();
        await expect(page.getByText('Date of Birth')).toBeVisible();
        await expect(page.getByText('Subjects')).toBeVisible();
        await expect(page.getByText('Hobbies')).toBeVisible();
        await expect(page.getByText('Select Picture')).toBeVisible();
        await expect(page.getByText('Current Address')).toBeVisible();
        await expect(page.getByText('State and City')).toBeVisible();
})