function addIsInvalid(element){
    element.classList.add('is-invalid')
}

function addIsValid(element){
    element.classList.add('is-valid')
}


window.addEventListener('load', function(){
    console.log('esta conectado')

    let formulario = document.querySelector('form#carga');
    console.log(formulario.elements)

    let inputName = formulario.elements[0];
    let inputTrademark = formulario.elements[1];
    let inputPrice = formulario.elements[2];
    let inputModel = formulario.elements[3];
    let inputCompany = formulario.elements[4];
    let inputDiscount = formulario.elements[5];
    let inputCapacidad = formulario.elements[6];
    let inputDualsim = formulario.elements[7];
    let inputColors = formulario.elements[8];
    let inputDescription = formulario.elements[9];
    let inputImage = formulario.elements[10];

    let cargProduct = document.querySelector('#agregar')

    cargProduct.addEventListener('click',function(e){
        let conf = confirm('¿Estás seguro que deseas dar de baja la cuenta?')
        if(!conf){
            e.preventDefault()
            Swal.fire({
                icon:'info',
                title: 'No ha agregado ningun producto',
                timer:2000
            })
        }
      })

    let errors = {};
    let regExExtensions = /(.jpg|.jpeg|.png|.gif)$/i;

    inputName.addEventListener('keyup',function(){

        switch (true) {
            case this.value.length === 0:
                errorNombre.innerHTML = "El nombre del producto es obligatorio";
                addIsInvalid(inputName)
                break;
            case this.value.trim().length < 4:
                errorNombre.innerHTML = "El nombre debe tener al menos 4 letras";
                addIsInvalid(inputName)
                break;
            default:
                inputName.classList.remove('is-invalid')
                errorNombre.innerHTML = ''
                addIsValid(inputName)
                break;
        }
    }),

    inputName.addEventListener('keyup', function(){
        fetch(`${window.location.origin}/api/products`,{method: 'POST'})
        .then(response => response.json())
        .then(products => {
            products.forEach(product => {
                if(product.name == inputName.value){
                    errorNombre.innerHTML = 'Este producto ya se encuentra registrado'
                    inputName.classList.toggle('is-invalid')
                }
            })
        })
    })

    inputTrademark.addEventListener('blur', function(){

        switch(true) {
            case this.value.length === 0:
                    errorTrademark.innerHTML = "Debe seleccionar una Marca";
                    this.classList.add('is-invalid');
                    break;
                default:
                    this.classList.remove('is-invalid');
                    this.classList.add('is-valid');
                    errorTrademark.innerHTML = "";
                    break;
        }
    }),

    inputPrice.addEventListener('keyup', function(){
        switch(true){
            case this.value < 1: 
                errorPrice.innerHTML = 'Debe indicar el precio del producto'
                addIsInvalid(inputPrice)
            break
            
            default:
                inputPrice.classList.remove('is-invalid')
                errorPrice.innerHTML = ''
                addIsValid(inputPrice)
            break
        }

    })

    inputModel.addEventListener('blur', function(){

        switch(true) {
            case this.value.length === 0:
                errorModel.innerHTML = "Debe indicar el modelo del celular (Ej: Samsung J2, el modelo seria J2)";
                this.classList.add('is-invalid');
                break;
            default:
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
                errorModel.innerHTML = "";
            break;
            
        }
    }),

    inputCompany.addEventListener('blur', function(){
        
        switch(true) {
            case this.value.length === 0:
                errorCompany.innerHTML = "Debe elegir una de las dos opciones";
                this.classList.add('is-invalid');
                break;
            default:
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
                errorCompany.innerHTML = "";
            break;
            
        }
    }),

    inputDiscount.addEventListener('keyup', function(){

        switch(true){
            case this.value.length === 0:
                errorDiscount.innerHTML = "Debe rellentar este campo o ingrese 0.";
                addIsInvalid(inputDiscount)
                break;
            case this.value <0:
                errorDiscount.innerHTML = "Debe ingresar un numero positivo.";
                addIsInvalid(inputDiscount)
                break;
            default:
                this.classList.remove('is-invalid');
                errorDiscount.innerHTML ="";
                addIsValid(inputDiscount);
                break;
        }
    }),

    inputCapacidad.addEventListener('blur', function(){

        switch(true) {
            case this.value.length === 0:
                errorCapacidad.innerHTML = "Debe indicar la capacidad del dispositivo";
                this.classList.add('is-invalid');
                break;
            default:
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
                errorCapacidad.innerHTML = "";
            break;
            
        }
    }),

    inputDualsim.addEventListener('blur', function(){

        switch(true) {
            case this.value.length === 0:
                errorDualsim.innerHTML = "Debe indicar si el dispositivo es dual-sim o no";
                this.classList.add('is-invalid');
                break;
            default:
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
                errorDualsim.innerHTML = "";
            break;
            
        }
    }),

    inputColors.addEventListener('keyup', function(){

        switch (true) {
            case this.value.length === 0:
                errorColors.innerHTML = "Debe indicar el/los colores del dispositivo";
                addIsInvalid(inputColors)
                break;
            case this.value.trim().length < 4:
                errorColors.innerHTML = "Debe indicar al menos un color";
                addIsInvalid(inputColors)
                break;
            default:
                this.classList.remove('is-invalid')
                errorColors.innerHTML = ""
                addIsValid(inputColors)
                break;
        }
    }),

    inputDescription.addEventListener('keyup', function(){

        switch(true){                
            case this.value.length >= 0 && this.value.length <= 20:
                errorDescription.innerHTML = "La descripcion debe tener al menos 20 caracteres";
                addIsInvalid(inputDescription)
                break;
            default:
                this.classList.remove('is-invalid');
                errorDescription.innerHTML ="";
                addIsValid(inputDescription);
                break;
        }
    }),

    inputImage.addEventListener('change', function(e){
        switch(true){
        case !regExExtensions.exec(this.value):
            errorImagen.innerHTML = 'La extensión de la imagen sólo puedo ser jpg/jpeg/png/gif'
            addIsInvalid(inputImage)
            this.value = ''
            preview.src=''
        break

        default:
            this.classList.remove('is-invalid')
            addIsValid(inputImage)
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

        let elementos = this.elements
        let error = false

        for(let i = 0; i<formulario.length - 1; i++){
            if(elementos[i].value == 0){
                addIsInvalid(elementos[i])
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