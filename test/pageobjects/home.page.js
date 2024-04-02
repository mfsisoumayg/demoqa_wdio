import { $ } from '@wdio/globals'
import Page from './page.js';
import { cards } from '../resources/cards.js';

class HomePage extends Page {
    #cards = 'div.top-card'
    #card = "//h5[text()='Elements']/ancestor::div[@class='card mt-4 top-card']" // replace XYZ

    open () {
        return super.open('');
    }

    async validateCards() {
        const cardElements = await $$(this.#cards)
        const cardValues = Object.values(cards)
        for (let i = 0; i < cardElements.length; i++) {
            await expect(cardElements.at(i)).toHaveText(cardValues.at(i))
        }
    }

    /**
     * @param {string} element 
     */
    async clickOnCard(element) {
        await $(this.#card).scrollIntoView()
        await $(this.#card).click()
    }
}

export default new HomePage();
