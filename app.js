// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let ListaNombresParticipantes =[];

function agregarAmigo(){
    //Solicitar el nombre de los participantes del juego
    let NombresAmigos = document.getElementById("amigo");
    let Nombre = NombresAmigos.value.trim();

    if(Nombre === ""){
        alert("Por favor, inserte un nombre.");
        return;
    }

    ListaNombresParticipantes.push(Nombre);
    
    console.log("Lista de nombre", ListaNombresParticipantes);
}


