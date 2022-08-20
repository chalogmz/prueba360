let formList = [];

let fecha = new Date().toISOString().slice(0, 10);

function addForm(email, nombre, apellido, telefono) {

    let newForm = {
        email: email,
        datos: [
            {
                nombre: nombre,
                apellido: apellido,
                telefono: telefono,
                fecha: fecha
            }
        ]
    }

    formList.push(newForm);
    console.log(newForm);
}