import Page from "../page.js";

class FormPage extends Page {

    open() {
        return super.open('forms')
    }

}

export default new FormPage()