
const tabla = document.getElementById('tabla');
const tbody = document.getElementById('tbody');
const pError = document.getElementById('pEror');
const cbBebidas = document.getElementById('cbBebidas');
const btnAplicar = document.getElementById('btnAplicar');
const total = document.getElementById('total')



function mostrarError(mensaje , tiempo) {
    pError.textContent = mensaje;
    setTimeout(() => {
        pError.textContent = '';
    }, tiempo);
}

function limoiarTabla() {
    tbody.innerHTML = " "
    

    
}

async function opcBebidas() {
    let opc = cbBebidas.selectedIndex;
    switch (opc) {
        case 0:
            limoiarTabla()
            await peticion('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic')
            break;
        case 1:
            limoiarTabla()
            await peticion('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic')
            break;
        case 2:
            limoiarTabla()
            await peticion('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic')
            await peticion('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic')

            break;
        default:
            break;
    }
    
}

async function peticion(url){

    try{
        const response = await fetch(url,{method:'get'});
        const data = await response.json();
        const drinks = data.drinks;
        mostrarData(drinks);



    }catch(error){mostrarError(error)};

}

function mostrarData(data){
    data.forEach( d => {
        const fila = document.createElement('tr');
        
        const tid = document.createElement('td');
        tid.textContent = d.idDrink;
        fila.appendChild(tid);
        
        const tnombre = document.createElement('td');
        tnombre.textContent = d.strDrink;
        fila.appendChild(tnombre);
        
        const timgen = document.createElement('td');
        const img = document.createElement('img')
            img.src = d.strDrinkThumb;
            img.alt = d.strDrink
            img.width = 100;
            timgen.appendChild(img)
            fila.appendChild(timgen)

            tbody.appendChild(fila);
            
        });
        tabla.appendChild(tbody);

        total.textContent = "total: " + tbody.rows.length;
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

    await opcBebidas();    
}


document.addEventListener('DOMContentLoaded', main);
btnAplicar.addEventListener('click',main)




