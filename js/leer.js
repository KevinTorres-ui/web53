const dogSelector = document.getElementById("dogSelector")
const dtnVer = document.getElementById('btnVer')
const img = document.getElementById('dogImage')
const btnLimpiar = document.getElementById('btnLimpiar')
const urlInicio  = "https://dog.ceo/api/breed/"
const urlFinal = "/images/random"


async function peticion() {
    const url = "https://dog.ceo/api/breeds/list/all"
    try{
        const reponse = await fetch(url);
        const data = await reponse.json()
        mostrar(data)


    }catch(error){
        console.log(error)
    }
    
}

async function mostrar(data) {
    for(let perro in data.message){
        raza =data.message[perro]
        if (raza.length > 0) {
            raza.forEach(raza => { 
                rellenar(perro + "/" + raza)  
            });
           
            
        }
        else{
            rellenar(perro)
        }

    }

    
} 

async function peticioImagen(url) {
    try{
        const reponse = await fetch(url);
        const data = await reponse.json()
        mostrarUrl(data.message)


    }catch(error){
        console.log(error)
    }
    
}

function mostrarUrl(urlImg) {
    img.src = urlImg
    img.alt = dogSelector.value   
}

function rellenar(name) {
    const contenido = document.createElement('option')
    contenido.value = name
    contenido.textContent = name
    dogSelector.appendChild(contenido)
}

async function main() {
    await peticion()
    
}
function verImg() {
    const contenido = dogSelector.value
    const urlImg = urlInicio + contenido + urlFinal
    peticioImagen(urlImg) 
}

function limpiar() {
    dogSelector.selectedIndex = 0 
    img.src = "https://dog.ceo/img/dog-api-logo.svg"
    img.alt = "Dog API Logo"

    
}


document.addEventListener('DOMContentLoaded',main)
dtnVer.addEventListener('click', verImg )
btnLimpiar.addEventListener('click', limpiar)




















