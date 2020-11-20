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

    let errors = {};

    inputPrice.addEventListener('blur', function(){

        switch(true) {
            case this.value.length === 0:
                errorPrice.innerHTML = "Debe ingresar el valor.";
                this.classList.add('is-invalid');
                break;
            case this.value <=0:
                errorPrice.innerHTML = "Debe ingresar un numero positivo.";
                this.classList.add('is-invalid');
                break;
            default:
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
                errorPrice.innerHTML ="";
                break;
        }
    }),

    inputColors.addEventListener('blur', function(){

        switch (true) {
            case this.value.length === 0:
                errorColors.innerHTML = "Debe indicar el/los colores del dispositivo";
                this.classList.add('is-invalid')
                break;
            case this.value.trim().length < 4:
                errorColors.innerHTML = "Debe indicar al menos un color";
                this.classList.add('is-invalid')
                break;
            default:
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                errorColors.innerHTML = ""
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



    inputDiscount.addEventListener('blur', function(){

        switch(true){
            case this.value.length === 0:
                errorDiscount.innerHTML = "Debe rellentar este campo o ingrese 0.";
                this.classList.add('is-invalid');
                break;
            case this.value <0:
                errorDiscount.innerHTML = "Debe ingresar un numero positivo.";
                this.classList.add('is-invalid');
                break;
            default:
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
                errorDiscount.innerHTML ="";
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

    inputDescription.addEventListener('blur', function(){

        switch(true){                
            case this.value.length >= 0 && this.value.length <= 20:
                errorDescription.innerHTML = "La descripcion debe tener al menos 20 caracteres";
                this.classList.add('is-invalid');
                break;
            default:
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
                errorDescription.innerHTML ="";
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