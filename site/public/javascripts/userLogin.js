window.addEventListener('load', () => {
    console.log('esta conectado')


    let InputEmail = document.querySelector('#inputEmail')
    let InputPassword = document.querySelector('#inputPassword')
    let errors = {}

    //expresiones regulares:
    //validacion de mail
    let regExEmail =  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,24}$/;


    InputEmail.addEventListener('keyup', () => {

        switch (true) {
            case InputEmail.value.length === 0:
                InputEmail.classList.add('is-invalid')
                emailError.innerHTML = "El correo electrónico es obligatorio";
                break;
            case !regExEmail.test(InputEmail.value) :
                InputEmail.classList.add('is-invalid')
                emailError.innerHTML = "Debes escribir un correo válido"
                break;
            default:
                InputEmail.classList.remove('is-invalid')
                InputEmail.classList.add('is-valid')
                emailError.innerHTML = ""
                break;
        }
    })
    InputPassword.addEventListener('keyup',function(){

        switch (true) {
            case this.value.length === 0:
                this.classList.add('is-invalid')
                passwordError.innerHTML = "La contraseña es obligatoria";
                break;
            default:
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                passwordError.innerHTML = ""
                break;
        }

    })

})