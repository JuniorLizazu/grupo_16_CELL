window.addEventListener('load',()=>{
    console.log('conectadisimoo')
    let deleteUser = document.getElementById('eliminar')
    let updateUser = document.getElementById('actualizar')

    deleteUser.addEventListener('click',function(e){
      let conf = confirm('¿Estás seguro que deseas dar de baja la cuenta?')
      if(!conf){
          e.preventDefault()
          Swal.fire({
              icon:'info',
              title: 'Gracias por quedarte',
              text: 'Sigue navegando para encontrar tu celular indicado',
              timer:2000
          })
      } else{
        Swal.fire({
            icon : "success",
            title : 'Adios!',
            text: 'Su cuenta ha sido eliminada correctamente, hasta la proxima',
            timer : 3000
        })
      }
    })

    updateUser.addEventListener('click',function(e){
        let conf = confirm('¿Estás seguro que deseas aplicar los cambios?')
        if(!conf){
            e.preventDefault()
            Swal.fire({
                icon:'info',
                title: 'Los cambios no fueron aplicados',
                timer:2000
            })
        } else{
          Swal.fire({
              icon : "success",
              title : 'Excelente!',
              text: 'Su cuenta ha sido actualizada',
              timer : 3000
          })
        }
      })


    
    let provinciaSelect = document.getElementById('provincia');
    let localidadSelect = document.getElementById('ciudad');

    (function provinciasApi(){
        fetch('https://apis.datos.gob.ar/georef/api/provincias')
        .then(function(response){
            return response.json();
        })
        .then(function(result){
          
            result.provincias.sort(function(prev,next){
                return prev.nombre > next.nombre
            })

            let options = '';

            result.provincias.forEach(provincia => {
                options += `<option value = "${provincia.nombre}">${provincia.nombre}</option>`
            })

            provinciaSelect.innerHTML += options;
        })
    })()


    function municipiosApi() {
        let provincia = provinciaSelect.value;


        /* if(provincia == 'Ciudad Autónoma de Buenos Aires'){ */
            fetch(`https://apis.datos.gob.ar/georef/api/localidades?max=1000&provincia=${provincia}`)
            .then(function(response){
                return response.json();
            })
            .then(function(result){
                result.localidades.sort(function(prev,next){
                    return prev.nombre > next.nombre
                })

                if(localidadSelect.value != 0) {
                    localidadSelect.innerHTML = `<option selected hidden value="${localidadSelect.value}" >${localidadSelect.value}</option>`
                } else {
                    localidadSelect.innerHTML = `<option selected hidden value="0">Seleccione su localidad</option>`
                }

                let options = ''

                result.localidades.forEach(localidad => {
                    options += `<option value = "${localidad.nombre}">${localidad.nombre}</option>`
                })

                localidadSelect.innerHTML += options;
                
               
            })
            .catch(err => {
                console.log(err)
            })
       
    }

    if(provinciaSelect.value != 0){
        municipiosApi();
    }

    provinciaSelect.addEventListener('change', () => {
        municipiosApi();
    })
})