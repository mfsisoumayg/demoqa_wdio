import Page from "../page.js";

class TextBoxPage extends Page {
    #fullName = "//input[@id='userName']"
    #email = "//input[@id='userEmail']"
    #cAddress = "//textarea[@id='currentAddress']"
    #pAddress = "//textarea[@id='permanentAddress']"
    #submitBtn = "//button[@id='submit']"

    open () {
        return super.open('text-box');
    }

    /**
     * @param {string} name
     */
    async fillFullName(name) {
        await $(this.#fullName).scrollIntoView()
        await $(this.#fullName).setValue(name)
    }

    /**
     * @param {string} email
     */
    async fillEmail(email) {
        await $(this.#email).scrollIntoView()
        await $(this.#email).setValue(email)
    }

    /**
     * @param {string} cAddress
     */
    async fillCurrAddress(cAddress) {
        await $(this.#cAddress).scrollIntoView()
        await $(this.#cAddress).addValue(cAddress)
    }

    /**
     * @param {string} pAddress
     */
    async fillPermAddress(pAddress) {
        await $(this.#pAddress).scrollIntoView()
        await $(this.#pAddress).addValue(pAddress)
    }

    async submitButton() {
        await $(this.#submitBtn).scrollIntoView()
        await $(this.#submitBtn).click()
    }
    
}

export default new TextBoxPage();
