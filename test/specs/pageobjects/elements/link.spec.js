import LinkPage from "../../../pageobjects/elements/link.page.js"

describe('Link Page', () => {
    it('links for new tab', async() => {
        await LinkPage.open()

        await LinkPage.clickOnLinkText("Home")
        const w = await browser.getWindowHandles()
        await browser.switchToWindow(w[0])

        await browser.saveScreenshot("elements_links.png")
    })
})