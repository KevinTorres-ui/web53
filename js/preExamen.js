const inputId = document.getElementById('inputId')
const btnMostrar = document.getElementById('btnMostrar')
const pEror = document.getElementById('pEror')

const resName = document.getElementById('resName')
const resUsername = document.getElementById('resUsername')
const resEmail = document.getElementById('resEmail')
const resStreet = document.getElementById('resStreet')
const resZip = document.getElementById('resZip')
const resCity = document.getElementById('resCity')

async function peticion() {
    if (inputId.value === "") {
        mostrarError('* no se ingreso id',5000)
        return
         
    }else{
        let url = `https://jsonplaceholder.typicode.com/users/${inputId.value}`
        try{
            const response = await fetch(url,{method:'get'});
            const data = await response.json();
            mostrarData(data);



        }catch(error){mostrarError('* No se encontró id',5000)};
    }
    
}

function mostrarData(data) {
    resName.value = data.name;
    resUsername.value = data.username;
    resEmail.value = data.email;
    resStreet.value = data.address.street;
    resZip.value = data.address.zipcode;
    resCity.value = data.address.city;
}
function mostrarError(mensaje , tiempo) {
    pEror.textContent = mensaje;
    resName.value = '';
    resUsername.value = '';
    resEmail.value = '';
    resStreet.value = '';
    resZip.value = '';
    resCity.value = '';
    setTimeout(() => {
        pEror.textContent = '';
    }, tiempo);


}

async function main() {
    await peticion()
}

btnMostrar.addEventListener('click',main);