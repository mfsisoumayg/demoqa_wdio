import PracFormPage from "../../../pageobjects/forms/practiceform.page.js"

describe('Practice Form Page', () => {

    it('practice form', async() => {
        await PracFormPage.open()

        await PracFormPage.fillName('Soumay', 'Gupta')
        await PracFormPage.fillEmail('soumayg@mindfiresolutions.com')
        await PracFormPage.selectGender('Male')
        await PracFormPage.fillContactNo('+91XXXXXX69')

        await PracFormPage.fillDob('30','August','1998')

        await browser.saveScreenshot("forms_practiceForms.png")
    })

})