import Page from '../page.js'

class AdvancedPage extends Page {

    open () {
        return super.open('alertsWindows');
    }

}