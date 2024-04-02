import WindowsPage from "../../../pageobjects/advanced/windows.page.js";

describe('Browser Windows Page', () => {

    it('new tabs', async() => {
        await WindowsPage.open()
        await WindowsPage.clickNtBtn()
        const w = await browser.getWindowHandles()

        await browser.switchToWindow(w[1])
        await browser.saveScreenshot("advanced_windows_tabs(1).png")

        await browser.switchToWindow(w[0])
        await browser.saveScreenshot("advanced_windows_tabs(0).png")
    })

    it('new windows', async() => {
        await WindowsPage.open()
        await WindowsPage.clickNwBtn()
        const w = await browser.getWindowHandles()

        await browser.switchToWindow(w[1])
        await browser.saveScreenshot("advanced_windows_newwin(1).png")

        await browser.switchToWindow(w[0])
        await browser.saveScreenshot("advanced_windows_newwin(0).png")
    })
})
