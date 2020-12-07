console.log(" *** Get Api ***");

const url = "https://rickandmortyapi.com/api/character/";


// obtener los datos de la api

const getData = (api) => {

    return fetch(api)
        .then((response) => response.json())
        .then((json) => {
             imprimirDatos(json)
        })
        .catch ((error) => {
            console.log("Error... caray ...", error)
        })

};

let todaData;

// imprimir los resulados 
const  imprimirDatos = (data) => {
    todaData=data;
    validarPaginacion(todaData)

    let = html = "";
  

    data.results.forEach(matachito => {
        

         // pintar los matachivos 
    html += `<div class="cards">`;
    html += `<div>`;
    html += `<img class="formatoPic" src="${matachito.image}">`;
    html += `</div>`;
    html += `<div class="contenedorTextos">`;
    html += `<small class="txtLabel"> Nombre </Small>`;
    html += `<p class="txtTexto">${matachito.name}</p>`;
    html += `<small class="txtLabel"> Especie </Small>`;
    html += `<p class="txtTexto">${matachito.species}</p>`;
    html += `</div>`;
    html += `</div>`; 

        //console.log ( "Nombre [ " + matachito.name + " ] Especie [ " + matachito.species + " ] pic [ " +  matachito.image +" ]")
        
    });

    document.getElementById("contendedorTodo").innerHTML = html
}

// validar la paginacion 

   
const validarPaginacion = (data) => {

    if (data.info.prev == null ) {
        console.log("no se puede echar pa'tras ")
   
    } else {
        console.log("si existen paginas previas ")
    }

    if (data.info.next == null) {
        console.log ("no se puede echar pa' lante ")  

    } else {
        console.log ("exiten paginas siguientes")

    }
}
const btnPrev = document.getElementById("btnPrev");
const btnnext = document.getElementById("btnnext");



btnPrev.addEventListener('click', () => {
    // navegar haciar atras  ...............enviar la url con info.prev
     
    if (todaData.info.prev == null ) {
      swal({
            title: "Espera!",
            text: "No hay registros atras!",
            icon: "error",
            button: "Volver",
          });
        return false;
   
    } else {
     getData(todaData.info.prev)
}
})

btnnext.addEventListener('click', () => {
    // navegar haciar adelante  ..................enviar la url con info.next

      if (todaData.info.next == null ) {
         swal({
            title: "Espera!",
            text: "No hay registros adelante!",
            icon: "error",
            button: "Volver",
          });
        return false;
    
   
    } else {
          getData(todaData.info.next)
   
}

})


// consumimos o invocamos la api

getData(url);

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