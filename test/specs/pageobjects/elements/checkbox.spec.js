import CheckBoxPage from "../../../pageobjects/elements/checkbox.page.js"
import { checkBoxes } from "../../../resources/checkbox.js"

describe('Check Box Page', async() => {
    it('check box', async() => {
        await CheckBoxPage.open()

        await CheckBoxPage.expandAll() 
        await CheckBoxPage.tickCheckBox(checkBoxes.home) 
    })
})