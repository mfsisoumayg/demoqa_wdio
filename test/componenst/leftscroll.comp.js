import { cards } from "../resources/cards";

class LeftScrollComp {
    #menu = "//div[@class='header-text']"
    #menuItems = "//div[@class='header-text' and text()='XYZ']//ancestor::div[@class='element-group']//li" // replace XYZ

    async validateMenu() {
        const menuElements = await $$(this.#menu)
        const menuValues = Object.values(cards)
        for (let i = 0; i < menuElements.length; i++) {
            await expect(menuElements.at(i)).toHaveText(menuValues.at(i))
        }
    }

    async validateSubMenu() {
        const menuElements = await $$(this.#menuItems)
        const menuValues = Object.values(cards)
        for (let i = 0; i < menuElements.length; i++) {
            await expect(menuElements.at(i)).toHaveText(menuValues.at(i))
        }
    }
}

export default new LeftScrollComp();