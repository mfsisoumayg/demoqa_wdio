import UploadPage from "../../../pageobjects/elements/upload.page.js"

describe('Upload & Download Page', () =>{
    it('upload', async() => {
        await UploadPage.open()

        await UploadPage.uploadFile('C:\\Users\\SOUMYA GUPTA\\Pictures\\wallpaper.png')
    })
})