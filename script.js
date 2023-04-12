const form = document.querySelector('form')
const message = document.querySelector('.thanks')
const inputName = document.querySelector('input[name="name"]')
const inputEmail = document.querySelector('input[name="email"]')

let isValidForm = false

const resetInput = (elem) => {
    elem.classList.remove('invalid')
    elem.nextElementSibling.classList.add('error-hidden')
}

const validateInput = () => {
    isValidForm = true
    if(!inputName.value) {
        inputName.classList.add('invalid')
        inputName.nextElementSibling.classList.remove('error-hidden')
        isValidForm = false
    }  

    if(!inputEmail.value) {
        inputEmail.classList.add('invalid')
        inputEmail.nextElementSibling.classList.remove('error-hidden')
        isValidForm = false
    }  
}

form.addEventListener("submit", (e) => {
    e.preventDefault()
    validateInput()

    if(isValidForm) {
        form.remove()
        message.classList.remove('error-hidden')
      console.log('validou enviou')
    }
})

inputName.addEventListener('input', () => {
    resetInput(inputName)  
})

inputEmail.addEventListener('input', () => {
    resetInput(inputEmail)  
})