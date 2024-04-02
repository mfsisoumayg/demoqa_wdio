import Page from "../page.js";

class CheckBoxPage extends Page {

    /*
    <li>
        <span></span>
        <ol>
            <li></li>
            <li></li>
        </ol>
    </li>

    //input[@type='checkbox']
    */

    #expandList = 'li.rct-node-collapsed button'
    #checkBox = "//span[contains(text(),'XYZ')]/ancestor::label" //  replace XYZ

    open() {
        return super.open('checkbox')
    }

    async expandAll() {
        while (true) {
            const toggleElements = await $$(this.#expandList)
            if (toggleElements.length > 0) {
                for (let element of toggleElements) {
                    await element.scrollIntoView()
                    await element.click()
                }
            } else {
                break
            }
        }
    }

    /**
     * @param {string} name
     */
    async tickCheckBox(name) {
        const checkBox = this.#checkBox.replace('XYZ', name)
        const checkBoxElement = await $(checkBox)
        await checkBoxElement.scrollIntoView()
        await checkBoxElement.click()
    }

}

export default new CheckBoxPage()
