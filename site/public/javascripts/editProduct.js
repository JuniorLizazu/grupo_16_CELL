function addIsInvalid(element){
    element.classList.add('is-invalid')
}

function addIsValid(element){
    element.classList.add('is-valid')
}



window.addEventListener('load', function(){
    console.log('esta conectado')


    let formulario = document.querySelector('form#edit');
    console.log(formulario.elements)

    let inputPrice = formulario.elements[3];
    let inputColors = formulario.elements[4];
    let inputCompany = formulario.elements[5];
    let inputDiscount = formulario.elements[6];
    let inputCapacidad = formulario.elements[7];
    let inputDescription = formulario.elements[8];

    let editProduct = document.querySelectorAll('#guardar')

    for(let i = 0; i < editProduct.length; i++) {
        editProduct[i].addEventListener('click',function(e){
            let conf = confirm('¿Estás seguro que quiere aplicar los cambios?')
            if(!conf){
                e.preventDefault()
                Swal.fire({
                    icon:'info',
                    title: '',
                    text: 'Su producto no ha sido modificado',
                    timer:2000
                })
            } else{
              Swal.fire({
                  icon : "success",
                  title : 'Bien!',
                  text: 'Su producto ha sido actualizado',
                  timer : 3000
              })
            }
        })
    }
    

    let errors = {};


    inputPrice.addEventListener('keyup', function(){

        switch(true) {
            case this.value.length === 0:
                errorPrice.innerHTML = "Debe ingresar el valor.";
                addIsInvalid(inputPrice)
                break;
            case this.value <=0:
                errorPrice.innerHTML = "Debe ingresar un numero positivo.";
                addIsInvalid(inputPrice)
                break;
            default:
                this.classList.remove('is-invalid');
                errorPrice.innerHTML ="";
                addIsValid(inputPrice)
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

    inputCompany.addEventListener('keyup', function(){
        
        switch(true) {
            case this.value.length === 0:
                errorCompany.innerHTML = "Debe elegir una de las dos opciones";
                addIsInvalid(inputCompany)
                break;
            default:
                this.classList.remove('is-invalid');
                errorCompany.innerHTML = "";
                addIsValid(inputCompany)
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
                addIsValid(inputDiscount)
                break;
        }
    }),

    inputCapacidad.addEventListener('keyup', function(){

        switch(true) {
            case this.value.length === 0:
                errorCapacidad.innerHTML = "Debe indicar la capacidad del dispositivo";
                addIsInvalid(inputCapacidad)
                break;
            default:
                this.classList.remove('is-invalid');
                errorCapacidad.innerHTML = "";
                addIsValid(inputCapacidad)
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
                addIsValid(inputDescription)
                break;
        }
    }),

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