import LeftScrollComp from "../../componenst/leftscroll.comp.js";
import Page from "./page.js";

class ElementsPage extends Page {

    open () {
        return super.open('elements')
    }

    async validateLeftScrollMenu() {
        await LeftScrollComp.validateMenu()
        await LeftScrollComp.validateMenu()
        const hello = await $('hello')
    }





    

}

export default new ElementsPage();