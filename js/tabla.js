const txtId = document.getElementById('txtId');
const txtNombre = document.getElementById('txtNombre');
const txtEscuela = document.getElementById('txtEscuela');

const btnAgregar = document.getElementById('btnAgregar');
const tabla = document.getElementById('tabla');
const tbody = document.getElementById('tbody');

const pError = document.getElementById('pEror');

function limpiarCampos() {
    txtId.value = '';
    txtNombre.value = '';
    txtEscuela.value = '';
}

function agregarFila() {

    let tid = txtId.value
    let tnombre = txtNombre.value
    let tescuela = txtEscuela.value

    //validacion
    if (!tid|| !tnombre|| !tescuela) {
        mostrarError('the all components are required', 5000);
        return
    }

    const fila = document.createElement('tr');

    const celdaId = document.createElement('td');
    const celdaNombre = document.createElement('td');
    const celdaEscuela = document.createElement('td');

    celdaId.textContent = tid;
    celdaNombre.textContent = tnombre;
    celdaEscuela.textContent = tescuela;

    fila.appendChild(celdaId);
    fila.appendChild(celdaNombre);
    fila.appendChild(celdaEscuela);

    tbody.appendChild(fila);
    tabla.appendChild(tbody);
    limpiarCampos()
}


function mostrarError(mensaje , tiempo) {
    pError.textContent = mensaje;
    setTimeout(() => {
        pError.textContent = '';
    }, tiempo);
}

async function peticion(){
    let url = '../alumnos.json';
    try{
        const response = await fetch(url,{method:'get'});
        const data = await response.json();
        mostrarAlumnos(data);



    }catch(error){mostrarError(error)};
    
}

function mostrarAlumnos(data){
    data.forEach( alumno => {
        const fila = document.createElement('tr');
        
        const celdaId = document.createElement('td');
        celdaId.textContent = alumno.id;
        fila.appendChild(celdaId);

        const celdaNombre = document.createElement('td');
        celdaNombre.textContent = alumno.nombre;
        fila.appendChild(celdaNombre);

        const celdaEscuela = document.createElement('td');
        celdaEscuela.textContent = alumno.escuela;
        fila.appendChild(celdaEscuela);

        tbody.appendChild(fila);
           
    });
     tabla.appendChild(tbody);

    

}

function otraTarea(){
    mostrarError("start the other task");
    for(let con = 0; con<40; ++con){
        const fila = document.createElement('tr');
        const c1 = document.createElement('td');
            c1.textContent = con;
            fila.appendChild(c1);

            tbody.appendChild(fila)


    }
    tabla.appendChild(tbody)
}
async function main() {
    await peticion();
    otraTarea();    
}

document.addEventListener('DOMContentLoaded', main);
btnAgregar.addEventListener('click', agregarFila);