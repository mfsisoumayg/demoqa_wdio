import { expect } from '@wdio/globals'
import HomePage from '../../pageobjects/home.page.js'

describe('home page', () => {
    it ('headers', async() => {
        
    })

    it('cards', async() => {
        await HomePage.open()
        await HomePage.validateCards()
    })

    it ('footers', async() => {

    })
})