import { expect } from '@wdio/globals'
import Page from "../page.js";

class ButtonPage extends Page {
    #btnDoubleClick = "//button[@id='doubleClickBtn']"
    #doubleClickMsg = "//p[@id='doubleClickMessage']"

    #btRightClick = "//button[@id='rightClickBtn']"
    #rightClickMsg = "//p[@id='rightClickMessage']"

    #btnDynClick = "//button[text()='Click Me']"
    #dynClickMsg = "//p[@id='dynamicClickMessage']"

    open() {
        return super.open('buttons')
    }

    async buttonDc() {
        const btnElement = $(this.#btnDoubleClick)
        await btnElement.scrollIntoView()
        await btnElement.doubleClick()
        const btnMsg = $(this.#doubleClickMsg)
        await btnMsg.scrollIntoView()
        await expect(btnMsg).toBeDisplayed()
    }

    async buttonRc() {
        const btnElement = $(this.#btRightClick)
        await btnElement.scrollIntoView()
        await btnElement.click({ button: 'right' })
        const btnMsg = $(this.#rightClickMsg)
        await btnMsg.scrollIntoView()
        await expect(btnMsg).toBeDisplayed()
    }

    async buttonDyC() {
        const btnElement = $(this.#btnDynClick)
        await btnElement.scrollIntoView()
        await btnElement.click()
        const btnMsg = $(this.#dynClickMsg)
        await btnMsg.scrollIntoView()
        await expect(btnMsg).toBeDisplayed()
    }
}

export default new ButtonPage()
