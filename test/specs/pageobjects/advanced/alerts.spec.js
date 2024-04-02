import AlertsPage from "../../../pageobjects/advanced/alerts.page.js";

describe('Alerts Page', () => {
    it('alert', async() => {
        await AlertsPage.open()
        await AlertsPage.clickOnAlert()
    })

    it('timer alert', async() => {
        await AlertsPage.open()
        await AlertsPage.clickOnTimerAlert()
    })

    it('confirm alert', async() => {
        await AlertsPage.open()
        await AlertsPage.clickOnConfirmAlert()
    })
})