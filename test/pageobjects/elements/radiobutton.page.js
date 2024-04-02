import Page from "../page.js";

class RadioButtonPage extends Page {
    #buttons = "div.custom-control input"
    #button = "//label[text()='XYZ']/parent::div/input" // replace XYZ

    open() {
        return super.open('radio-button')
    }

    async validateAll() {
        const rBtnElements = await $$(this.#buttons)
        for (let element of rBtnElements) {
            console.log(await element.isEnabled())
        }
    }

    /**
     * @param {string} name
     */
    async clickRadioBtn(name) {
        const btnXpath = this.#button.replace('XYZ',name)
        const btnElement = await $(btnXpath)
        await btnElement.scrollIntoView()
        if (await btnElement.isEnabled()) {
            await btnElement.click()
        }
        else {
            throw new Error("Element not enabled")
        }        
        
    }

}

export default new RadioButtonPage()