

function addIsInvalid(element){
    element.classList.add('is-invalid')
}

function addIsValid(element){
    element.classList.add('is-valid')
}


window.addEventListener('load', function(){
    console.log('esta conectado')

    let formulario = document.querySelector('form#register');
    console.log(formulario.elements)

    let inputNombre = formulario.elements[0];
    let inputApellido = formulario.elements[1];
    let inputPass = formulario.elements[2];
    let inputPass2 = formulario.elements[3];
    let inputEmail = formulario.elements[4];
    let inputImagen = formulario.elements[5];
    let checkBases = formulario.elements[6];

    let errores = {};
    let regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;
    let regExEmail =  /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]:+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;
    let regExExtensions = /(.jpg|.jpeg|.png|.gif)$/i;

    inputNombre.addEventListener('keyup',function(){
        switch(true){
            case this.value.length == 0:
            errorNombre.innerHTML = 'El nombre es obligatorio'
            addIsInvalid(inputNombre)
            break
            case this.value.trim().length <3:
            errorNombre.innerHTML = 'El nombre debe ser mayor a 3 letras'
            addIsInvalid(inputNombre)
            break
            default:
                inputNombre.classList.remove('is-invalid')
                addIsValid(inputNombre)
                errorNombre.innerHTML = ""
                break;
        }
    })
    
    inputApellido.addEventListener('keyup',function(){
        switch(true){
            case this.value.length == 0:
                errorApellido.innerHTML = 'Debe ingresar su apellido'
                addIsInvalid(inputApellido)
            break
            case this.value.length < 2:
                errorApellido.innerHTML = 'El apellido debe tener al menos 2 carácteres'
                addIsInvalid(inputApellido)
            break
            default:
            this.classList.remove('is-invalid')
            addIsValid(inputApellido)
            errorApellido.innerHTML = ''
            break
        }
    })

    inputPass.addEventListener('keyup',function(){
        switch(true){
            case this.value.length == 0:
                errorPass.innerHTML = 'La contraseña es obligatoria'
                addIsInvalid(inputPass)
            break
            case !regExPass.test(this.value):
                errorPass.innerHTML = 'La contraseña debe tener entre 6 y 12 carácteres, una mayúscula, una minúscula y un número'
                addIsInvalid(inputPass)
            break
            default:
                this.classList.remove('is-invalid')
                addIsValid(inputPass)
                errorPass.innerHTML = ""
            break
        }
    })

    inputPass2.addEventListener('blur',function(){

        switch (true) {
            case this.value.length === 0:
                errorPass2.innerHTML = "Reigrese su contraseña";
                this.classList.add('is-invalid')
                break;
            case this.value !== inputPass.value :
                errorPass2.innerHTML = "Las contraseñas no coinciden"
                this.classList.add('is-invalid')
                break
            default:
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                errorPass2.innerHTML = ""
                break;
        }

    })

    inputEmail.addEventListener('keyup',function(){
        switch(true){
            case this.value.length == 0:
                errorEmail.innerHTML = 'Este campo es obligatorio'
                addIsInvalid(inputEmail)
                break
            case !regExEmail.test(this.value):
                this.innerHTML = 'Debes ingresar un Email válido'
                addIsInvalid(inputEmail)
                break
            default:
                this.classList.remove('is-invalid')
                addIsValid(inputEmail)
                errorEmail.innerHTML = ''
                break
        }
    }),

    inputEmail.addEventListener('keyup', function(){
        fetch(`${window.location.origin}/api/email`,{method: 'POST'})
        .then(response => response.json())
        .then(users => {
            users.forEach(user => {
                if(user.email == inputEmail.value){
                    errorEmail.innerHTML = 'Este email ya se encuentra registrado'
                    inputEmail.classList.toggle('is-invalid')
                }
            })
        })
    })


    inputImagen.addEventListener('change', function(e){
        switch(true){
        case !regExExtensions.exec(this.value):
            errorImagen.innerHTML = 'La extensión de la imagen sólo puedo ser jpg/jpeg/png/gif'
            addIsInvalid(inputImagen)
            this.value = ''
            preview.src=''
        break

        default:
            this.classList.remove('is-invalid')
            addIsValid(inputImagen)
            errorImagen.innerHTML=''
            let reader = new FileReader()
            reader.readAsDataURL(e.target.files[0])
            reader.onload = function(){
                preview.src = reader.result
            }
        }
    })


    formulario.addEventListener('submit',function(e){
        e.preventDefault()
        let elements = formulario.elements

        if(checkBases.checked == false){
            addIsInvalid(checkBases)
            errorBases.innerHTML = 'Debes aceptar nuestras bases y condiciones'
        }else if(checkBases.checked == true){
            this.classList.remove('is-invalid')
            addIsValid(checkBases)
            errorBases.innerHTML = ''
        }
        
        let error = false
        for (let i = 0; i<elements.length-1; i++){
            if(elements[i].value == 0){
                addIsInvalid(elements[i])
                error = true
            }
        }
        if(!error){
            formulario.submit()
        }else{
            msgError.innerHTML = 'Los campos señalados son obligatorios'
        }
    })

})

