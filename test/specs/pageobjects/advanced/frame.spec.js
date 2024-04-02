import FramesPage from "../../../pageobjects/advanced/frames.page.js";

describe('Frame Page',() => {
    it('frame', async() => {
        await FramesPage.open()

        const frame1 = await $("iframe[id='frame1']")
        await frame1.moveTo()

        await browser.switchToFrame(frame1)
        console.log(await $("<h1>").getText())

        await browser.switchToParentFrame()
        console.log(await $("<h1>").getText())
        
        await browser.saveScreenshot("frame 1.png")
    })
})