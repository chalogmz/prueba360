document.querySelector('#btn').addEventListener('click', saveForm);

function saveForm() {
    let formEmail = document.getElementById('email').value,
        formNombre = document.getElementById('nombre').value,
        formApellido = document.getElementById('apellido').value,
        formTelefono = document.getElementById('telefono').value;

    addForm(formEmail, formNombre, formApellido, formTelefono)
}