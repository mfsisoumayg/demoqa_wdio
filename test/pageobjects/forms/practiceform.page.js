import Page from "../page.js";

class PracFormPage extends Page {

    #firstName = 'input#firstName'
    #lastName = 'input#lastName'
    #email = 'input#userEmail'
    #gender = "//label[text()='XYZ']/parent::div" // replace XYZ
    #number = 'input#userNumber'

    #dob = 'input#dateOfBirthInput'
    #dobMonth = 'select.react-datepicker__month-select'
    #dobYear = 'select.react-datepicker__year-select'
    #dobDate = "//div[@class='react-datepicker__week']/div[text()='XYZ']" // replace XYZ

    #subjects = 'div#subjectsContainer'
    #hobbies = "//label[text()='XYZ']/parent::div" // replace XYZ
    #pic = 'input#uploadPicture'
    #cAdrr = 'textarea#currentAddress'

    #state = 'div.state'
    #city = 'div.city'

    open() {
        return super.open('automation-practice-form')
    }

    /**
     * @param {string} firstName 
     * @param {string} lastName 
     */
    async fillName(firstName, lastName) {
        await $(this.#firstName).scrollIntoView()
        await $(this.#firstName).setValue(firstName)
        await $(this.#lastName).scrollIntoView()
        await $(this.#lastName).setValue(lastName)
    }

    /**
     * @param {string} email 
     */
    async fillEmail(email) {
        await $(this.#email).scrollIntoView()
        await $(this.#email).setValue(email)
    }

    /**
     * @param {string} gender 
     */
    async selectGender(gender) {
        const gndr = this.#gender.replace('XYZ',gender)
        await $(gndr).scrollIntoView()
        await $(gndr).click()
    }

    /**
     * @param {string} contactNo 
     */
    async fillContactNo(contactNo) {
        await $(this.#number).scrollIntoView()
        await $(this.#number).setValue(contactNo)
    }

    /**
     * @param {string} date 
     * @param {string} month 
     * @param {string} year 
     */
    async fillDob(date, month, year) {
        await $(this.#dob).scrollIntoView()
        await $(this.#dob).click()
        await $(this.#dobYear).selectByVisibleText(year)
        await $(this.#dobMonth).selectByVisibleText(month)
        date = this.#dobDate.replace('XYZ', date)
        await $(date).click()
    }

    /**
     * @param {[]} hbs 
     */
    async fillHobbies(hbs) {
        for (let hb of hbs) {
            hb = this.#hobbies.replace('XYZ', hb)
            await $(hb).click()
        }
    }

}

export default new PracFormPage();