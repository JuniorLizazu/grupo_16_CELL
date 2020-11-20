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
    let regExPass = /^(?=.\d)(?=.[a-z])(?=.*[A-Z]).{8,16}$/;
    let regExEmail =  /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]:+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;
    let regExExtensions = /(.jpg|.jpeg|.png|.gif)$/i;

    inputNombre.addEventListener('blur',function(){

        switch (true) {
            case this.value.length === 0:
                errorNombre.innerHTML = "El nombre es obligatorio";
                this.classList.add('is-invalid')
                break;
            case this.value.trim().length <=3:
                errorNombre.innerHTML = "Tenés que poner al menos tres letras"
                this.classList.add('is-invalid')
                break
            default:
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                errorNombre.innerHTML = ""
                break;
        }

    })
    
    inputApellido.addEventListener('blur',function(){

        switch (true) {
            case this.value.length === 0:
                errorApellido.innerHTML = "El apellido es obligatorio";
                this.classList.add('is-invalid')
                break;
            case this.value.trim().length <=3:
                errorApellido.innerHTML = "Tenés que poner al menos tres letras"
                this.classList.add('is-invalid')
                break
            default:
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                errorApellido.innerHTML = ""
                break;
        }

    })

    inputPass.addEventListener('blur',function(){

        switch (true) {
            case this.value.length === 0:
                errorPass.innerHTML = "La contraseña es obligatorio";
                this.classList.add('is-invalid')
                break;
            case !regExPass.test(this.value) :
                errorPass.innerHTML = "La contraseña debe tener entre 8 y 16 caracteres, una mayúscula una minúscula y un número"
                this.classList.add('is-invalid')
                break
            default:
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                errorPass.innerHTML = ""
                break;
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

    inputEmail.addEventListener('blur',function(){

        switch (true) {
            case this.value.length === 0:
                errorEmail.innerHTML = "El campo email es obligatorio";
                this.classList.add('is-invalid')
                break;
            case !regExEmail.test(this.value) :
                errorEmail.innerHTML = "Debes escribir un email válido"
                this.classList.add('is-invalid')
                break
            default:
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                errorEmail.innerHTML = ""
                break;
        }

    })

    inputImagen.addEventListener('change',function(e){

        switch (true) {
            case !regExExtensions.exec(this.value) :
                errorFoto.innerHTML = "Solo imagenes con extension jpg, jpeg, png, o gif";
                addIsInvalid(inputImagen)
                this.value = '';
                preview.src = '';
            break
        
            default:
                this.classList.remove('is-invalid');
                addIsValid(inputImagen)
                errorImagen.innerHTML = "";
                
                let reader = new FileReader();
               
                reader.readAsDataURL(e.target.files[0]);
                
                reader.onload = function(){
                preview.src = reader.result;
                }
        }
    })


    formulario.addEventListener('submit',function(e){
        e.preventDefault();
        let elementos = formulario.elements
        if(checkBases.checked == false){
            checkBases.classList.add('is-invalid');
            errorBases.innerHTML = "Debes aceptar las bases y condiciones"
        }
        let error = false
        for (let index = 0; index < elementos.length-1; index++) {
            if(elementos[index].value == 0){
                elementos[index].classList.add('is-invalid');
               error = true;
            }
        }
        if(!error){
            formulario.submit()
        }else{
            msgError.innerHTML = "Los campos señadados son obligatorios"
        }
    })



})