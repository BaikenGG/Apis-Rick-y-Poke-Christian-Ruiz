console.log(" *** Get Api ***");

const url = "https://pokeapi.co/api/v2/pokemon/?offset=00&limit=10";


// obtener los datos de la api

const getData = (api, opc) => {

    return fetch(api)
        .then((response) => response.json())
        .then((json) => {
            if(opc == 0)
            imprimaMunuConrUrl(json);
            else
             imprimirMatacho(json);
        })
        .catch ((error) => {
            console.log("Error... caray ...", error)
        })

};

let todaData;
let html;
let html2;

const imprimaMunuConrUrl = (data) => {

    todaData=data;
    validarPaginacion(todaData);
  
    html2 = "";
    data.results.forEach(pokemon => {
        html2 += `<div>`;
        html2 += `<a href="#" onclick="sendUrl('${pokemon.url}')">${pokemon.name}</a>`;
        html2 += `</div>`;
    });
    document.getElementById("contendedorListado").innerHTML = html2


}


const sendUrl = (url) => {
 
    getData(url, 1);

}

// imprimir los resulados 
const  imprimirMatacho = (data) => {
    html="";
// pintar los pokemon 
    html += `<div class="cards">`;
    html += `<div>`;
    html += `<img class="formatoImg" src="${data.sprites.other.dream_world.front_default}">`;
    html += `</div>`;
    html += `<div class="contenedorTextos">`;
    html += `<small class="txtLabel"> Nombre </Small>`;
    html += `<p class="txtTexto">${data.name}</p>`;
    html += `<small class="txtLabel"> Habilidades </Small>`;
    
    data.abilities.forEach(habilidad => {
        html += `<p class="txtTexto">${habilidad.ability.name}</p>`; 
    });
    
    
    html += `</div>`;
    html += `</div>`; 

  
    document.getElementById("contendedorTodo").innerHTML = html
    
}

// validar la paginacion 

const validarPaginacion = (data) => {

    if (data.previous == null ) {
        console.log("no se puede echar pa'tras ")
    } else {
        console.log("si existen paginas previas ")
    }

    if (data.next == null) {
        console.log ("no se puede echar pa' lante ")
    } else {
        console.log ("exiten paginas siguientes")
    }
}

// paginacion o navegacion

const btnPrev = document.getElementById("btnPrev");
const btnnext = document.getElementById("btnnext");


btnPrev.addEventListener('click', () => {
    // navegar haciar atras  ...............enviar la url con info.prev
     
    if (todaData.previous == null ) {
      swal({
            title: "Espera!",
            text: "No hay registros atras!",
            icon: "error",
            button: "Volver",
          });
        return false;
   
    } else {
      getData(todaData.previous,0)
}
})

btnnext.addEventListener('click', () => {
    // navegar haciar adelante  ..................enviar la url con info.next

      if (todaData.next == null ) {
         swal({
            title: "Espera!",
            text: "No hay registros adelante!",
            icon: "error",
            button: "Volver",
          });
        return false;
    
   
    } else {
           getData(todaData.next,0)
   
}

})


// consumimos o invocamos la api

getData(url, 0);

/*

// vamos a pintar n cantidad de cards 

let = html = "";
for (let i = 1; i <=21; i++) {
    // pintar la o las cajas
    html += `<div class="cards">`;
    html += `<div>`;
    html += `<img class="formatoPic" src="./ironMan.jpg">`;
    html += `</div>`;
    html += `<div class="contenedorTextos">`;
    html += `<small class="txtLabel"> Nombre </Small>`;
    html += `<p class="txtTexto">Tony Stark </p>`;
    html += `<small class="txtLabel"> Heroe </Small>`;
    html += `<p class="txtTexto">Iron Man </p>`;
    html += `</div>`;
    html += `</div>`;  
}
document.getElementById("contendedorTodo").innerHTML = html

*/