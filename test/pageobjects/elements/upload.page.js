import Page from "../page.js";

class UploadPage extends Page {
    #upload = "//input[@id='uploadFile']"

    open() {
        return super.open('upload-download')
    }

    async uploadFile(filePath) {
        const remoteFilePath = await browser.uploadFile(filePath)

        await $(this.#upload).scrollIntoView()
        await $(this.#upload).setValue(remoteFilePath)

        await browser.saveScreenshot("elements_upload.png")
    }

}

export default new UploadPage()
