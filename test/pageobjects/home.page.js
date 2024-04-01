import { $ } from '@wdio/globals'
import Page from './page.js';
import { cards } from '../resources/cards.js';

class HomePage extends Page {
    #cards = 'div.top-card'
    #cars1 = 'element-group'

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
}

export default new HomePage();