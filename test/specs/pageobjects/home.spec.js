import HomePage from '../../pageobjects/home.page.js'
import { cards } from '../../resources/cards.js'

describe('home page', () => {

    it('cards', async() => {
        await HomePage.open()
        await HomePage.validateCards()
        await HomePage.clickOnCard(cards.elements)
    })

})