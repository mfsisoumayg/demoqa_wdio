import TextBoxPage from "../../../pageobjects/elements/textbox.page.js"

describe('Text Box Page', async() => {
    it('text box', async() => {
        await TextBoxPage.open()

        await TextBoxPage.fillFullName("Soumay Gupta")
        await TextBoxPage.fillEmail("soumayg@mindfiresolutions.com")
        await TextBoxPage.fillCurrAddress("L2-1001, SVP Gulmohar Garden, Raj Nagar Extn, Ghaziabad, Uttar Pradesh")
        await TextBoxPage.fillPermAddress("L2-1001, SVP Gulmohar Garden, Raj Nagar Extn, Ghaziabad, Uttar Pradesh")

        await TextBoxPage.submitButton()
    })
})