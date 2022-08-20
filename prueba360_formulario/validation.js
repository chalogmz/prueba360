const formulario = document.getElementById('formulario1');
    const nombre = document.getElementById('nombre');
    const apellido  = document.getElementById('apellido');
    const telefono = document.getElementById('telefono');
    const email = document.getElementById('email');

    const formValid = {
        nombre: false,
        apellido: false,
        telefono: false,
        email: false,
    }

    formulario.addEventListener('submit', (e) => {
        e.preventDefault()
        validarForm()
    })

    nombre.addEventListener('change', (e)=>{
        if(e.target.value.trim().length > 0) formValid.nombre = true
    })

    apellido.addEventListener('change', (e)=>{
        if(e.target.value.trim().length > 0) formValid.apellido = true
    })

    telefono.addEventListener('change', (e)=>{
        if(e.target.value.trim().length > 0) formValid.telefono = true
    })

    email.addEventListener('change', (e)=>{
        if(e.target.value.trim().length > 0) formValid.email = true
    })

    const validarForm = () => {
        const formValues = Object.values(formValid)
        const valid = formValues.findIndex(value => value == false)
        if (valid == -1) {
            formValid.submit(alert('Formulario enviado'))
        } else {
            alert('No se puede enviar el formulario')
        }
    }
