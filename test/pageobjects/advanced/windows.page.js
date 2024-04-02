import Page from '../page.js'

class WindowsPage extends Page {

    #newTabBtn = 'button#tabButton'
    #newWinBtn = 'button#windowButton'
    #newWinMsgBtn = 'button#messageWindowButton'

    open () {
        return super.open('browser-windows');
    }

    async clickNtBtn() {
        await $(this.#newTabBtn).scrollIntoView()
        await $(this.#newTabBtn).click()
    }

    async clickNwBtn() {
        await $(this.#newWinBtn).scrollIntoView()
        await $(this.#newWinBtn).click()
    }

}

export default new WindowsPage()
