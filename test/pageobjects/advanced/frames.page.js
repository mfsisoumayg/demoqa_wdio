import Page from '../page.js'

class FramePage extends Page {

    #frame = "iframe#frameN" // replace N

    open () {
        return super.open('frames');
    }

}

export default new FramePage()
