const form = document.getElementById('form')
const inputName = document.getElementById('username')
const inputEmail = document.getElementById('email')
const password = document.getElementById('password')
const passwordConfirm = document.getElementById('password-confirm')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    
    checkInputs()
})

// Criar uma função para pegar os valores do Inputs.
// Os input receverão os dados e colocarar numa nova variável-const e depois chamar na função quando precisar.
function checkInputs() {
    const userNameValue = inputName.value
    const emailValue = inputEmail.value
    const passwordValue = password.value
    const passwordConfirmValue = passwordConfirm.value

    if(userNameValue === '') {
        setErrorFor(inputName, 'O nome de usuário é obrigatório.')
    } else {
        setSuccessFor(inputName)
    }

    if(emailValue === '') {
        setErrorFor(inputEmail, 'O E-mail é obrigatório.')
    } else if (!checkEmail(emailValue)) {
        setErrorFor(inputEmail, 'Favor Inserir um email válido!')
    } else {
        setSuccessFor(inputEmail)
    }

    if(passwordValue === '') {
        setErrorFor(password, 'Digite sua Senha.')
    } else if (passwordValue.length < 5) {
        setErrorFor(password, 'precisa no minimo de 7 caracteres')
    } else {
        setSuccessFor(password)
    }

    if(passwordConfirmValue === '') {
        setErrorFor(passwordConfirm, 'Reconfirme sua Senha.')
    } else if(passwordConfirmValue !== passwordValue) {
        setErrorFor(passwordConfirm, 'Senha não confere!!!')
    } else {
        setSuccessFor(passwordConfirm)
    }


    const formControls = form.querySelectorAll('.form-control')

    const formIsValid = [...formControls].every((formControl) => {
        return (formControl.className === 'form-control success')
    })

    if (formIsValid) {
        confirm('esta tudo validado Sinhor')
    }



}

// essa função receve dois parâmetros - o input de erro e a mensagem nela.
function setErrorFor(input, message) {
    const formControl = input.parentElement
    const small = formControl.querySelector('small')

    small.innerText = message
    formControl.className = 'form-control error'
    // adicionar as classes de Erros
}

function setSuccessFor(input) {
    const formControl = input.parentElement

    
    formControl.className = 'form-control sucess'
}



function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}











// form.onsubmit = function(evento) {
//   evento.preventDefault()}     --> form que já treiner antes Prof Thiago