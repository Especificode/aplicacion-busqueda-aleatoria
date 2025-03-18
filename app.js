const inputAmigo = document.getElementById ("amigo"); 
const listaAmigos = [];
const ullistaAmigos = document.getElementById ("listaAmigos"); 
const ulResultado = document.getElementById ("resultado");
function agregarAmigo() { 
    if (!inputAmigo.value) { // Otras Opciones if (""== false) ; if (0 == false); if ([] == false)
    alert ("Ingresar Nombre!!") 
    }
    listaAmigos.push(inputAmigo.value);
    //?ullistaAmigos.innerHTML = ullistaAmigos.innerHTML + inputAmigo.value;
    ullistaAmigos.innerHTML += `<li>${inputAmigo.value} </li>`;
}

function sortearAmigo () {
    const random = Math.floor(Math.random() *listaAmigos.length);
    const amigoSecreto = listaAmigos[random];
    ulResultado.innerHTML = `<Li>"El Amigo Secreto" es...:-) ${amigoSecreto}</Li>`; 
}


// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
