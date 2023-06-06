const divBotones = document.querySelector("#botones");
const inputCantBtnes = document.querySelector("input"); 
const h1Contador = document.querySelector("h1");

let contador = 0;

/**
 * Genera la cantidad de botones requeridos por el usuario
 */
function generarBtnes(){
    reiniciarContenedorBotones();
    generarBotonesHtml();
    agregarFuncionalidadTodosBtn();
}

/**
 * Vacia el contenedor de botones en la pagina
 */
function reiniciarContenedorBotones() {
    divBotones.innerHTML = "";
}

/**
 * Genera el html de todos los botones requeridos por el usuario
 */
function generarBotonesHtml() {
    for (let i = 0; i < inputCantBtnes.value; i++) {
        divBotones.innerHTML += `
            <button id="btn-${i}">+1 contador</button>
        `;
    }
}


/**
 * Agrega funcionalidades a todos los botones generados en la pagina
 */
function agregarFuncionalidadTodosBtn() {
    for (let i = 0; i < inputCantBtnes.value; i++) {
        document.querySelector(`#btn-${i}`).onclick = click;
    }
}


/**
 * Incrementa en 1 el valor del contador en la pagina
 */
function click(){
    console.log("activado");
    contador++;
    h1Contador.innerHTML = `Contador: ${contador}`;
}




