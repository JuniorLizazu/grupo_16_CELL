window.addEventListener('load',()=>{
    console.log('conectadisimoo')
    let deleteUser = document.getElementById('eliminar')

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
      }
    })

    })