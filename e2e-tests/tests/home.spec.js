import {test,expect} from 'playwright/test'

let UI_URL='http://localhost:3000'

test('should display the home content',async({page})=>{
await page.goto(UI_URL)
await expect( page.getByText('nothing like it').nth(0)).toBeVisible()
await expect( page.getByText('SMILE').nth(0)).toBeVisible()

})