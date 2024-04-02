import Page from "../page.js";

class LinkPage extends Page {
    
    open() {
        return super.open('links')
    }

    /**
     * @param {string} linkText 
     */
    async clickOnLinkText(linkText) {
        await $(`=${linkText}`).scrollIntoView()
        await $(`=${linkText}`).click()
    }

    /**
     * @param {string} linkText 
     */
    async clickOnPartialLinkText(linkText) {
        await $(`*=${linkText}`).scrollIntoView()
        await $(`*=${linkText}`).click()
    }

}

export default new LinkPage()
