import ButtonPage from "../../../pageobjects/elements/button.page.js";

describe('Button Page', () => {
    it('buttons', async() => {
        await ButtonPage.open()

        await ButtonPage.buttonDc()
        await ButtonPage.buttonRc()
        await ButtonPage.buttonDyC()

        // await browser.saveScreenshot("elements_buttons.png")
    })
})