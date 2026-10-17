const tabla = document.getElementById('tabla');
const tbody = document.getElementById('tbody');
const pError = document.getElementById('pEror');



function mostrarError(mensaje , tiempo) {
    pError.textContent = mensaje;
    setTimeout(() => {
        pError.textContent = '';
    }, tiempo);
}

function peticion(){
    let url = 'https://jsonplaceholder.typicode.com/todos';
    fetch(url, {
    method: 'GET' // Es un objeto con clave: valor
    })
    .then( response => response.json() )
    .then( data => {
        mostrarData(data);
    }).catch( error => {mostrarError('Error fetching data', 5000);} );
}

function mostrarData(data){
    data.forEach( alumno => {
        const fila = document.createElement('tr');
        
        const celdaUserId = document.createElement('td');
        celdaUserId.textContent = alumno.userId;
        fila.appendChild(celdaUserId);

        const celdaId = document.createElement('td');
        celdaId.textContent = alumno.id;
        fila.appendChild(celdaId);

        const celdaTitle = document.createElement('td');
        celdaTitle.textContent = alumno.title;
        fila.appendChild(celdaTitle);

        const celdaCompleted = document.createElement('td');
        celdaCompleted.textContent = alumno.completed;
        fila.appendChild(celdaCompleted);

        tbody.appendChild(fila);
           
    });
     tabla.appendChild(tbody);

}

document.addEventListener('DOMContentLoaded', peticion);