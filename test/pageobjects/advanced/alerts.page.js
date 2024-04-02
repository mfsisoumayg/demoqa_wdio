import Page from '../page.js'

class AlertPage extends Page {
    #alertBtn = 'button#alertButton'
    #after5SecBtn = 'button#timerAlertButton'
    #confBtn = 'button#confirmButton'
    #textBtn = 'button#promtButton'

    open () {
        return super.open('alerts');
    }

    async clickOnAlert() {
        await $(this.#alertBtn).scrollIntoView()
        await $(this.#alertBtn).click()
        if (await browser.isAlertOpen()){
            await browser.acceptAlert()
        } else {
            throw new Error("Alert not shown")
        }
    }

    async clickOnTimerAlert() {
        await $(this.#after5SecBtn).scrollIntoView()
        await $(this.#after5SecBtn).click()
        await browser.waitUntil(async() => await browser.isAlertOpen(), {
            timeout : 5100,
            timeoutMsg: 'Timer alert not shown'
        })
    }

    async clickOnConfirmAlert() {
        await $(this.#confBtn).scrollIntoView()
        await $(this.#confBtn).click()
        if (await browser.isAlertOpen()){
            await browser.acceptAlert()
        } else {
            throw new Error("Confirm alert not shown")
        }
    }

}

export default new AlertPage();
