// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let ListaNombresParticipantes =[];

function agregarAmigo(){
    //Solicitar el nombre de los participantes del juego
    let NombresAmigos = document.getElementById("amigo");
    let Nombre = NombresAmigos.value;

    if(Nombre === ""){
        alert("Por favor, inserte un nombre.");
        return;
    }

    ListaNombresParticipantes.push(Nombre);
    
    console.log("Lista de nombre", ListaNombresParticipantes);

    limpiarCaja();
    actualizarLista();
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

function actualizarLista(){

    let lista= document.getElementById("listaAmigos");
    lista.innerHTML="";

    // Recorrer el array LstaNombresParticipantes y agregar cada nombre como <li>
    for (let i = 0; i < ListaNombresParticipantes.length; i++) {
        let li = document.createElement("li"); // Crear un nuevo elemento <li>
        li.textContent = ListaNombresParticipantes[i]; // Asignar el nombre del amigo
        lista.appendChild(li); // Agregar el <li> a la lista
    }

}

