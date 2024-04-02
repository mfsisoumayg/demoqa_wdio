import RadioButtonPage from "../../../pageobjects/elements/radiobutton.page.js"
import { radioBtns } from "../../../resources/radiobuttons.js"

describe('Radio Button Page', () => {
    it('radio button', async() => {
        await RadioButtonPage.open()

        await RadioButtonPage.validateAll()
        await RadioButtonPage.clickRadioBtn(radioBtns.yes)

        // await browser.saveScreenshot("radiobutton.png")
    })
})