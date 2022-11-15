const listaSpesa = ["uova", "farina", "insalata", "birra", "ciliegini", "pop-corn", "burro"];
let lista_spesa_lenght= listaSpesa.length;
let i= 0;
let lista= document.getElementById("lista");
let spesa= document.getElementById("spesa");
let new_element = `<input type="text" id="nuovo_elemento"><button id="button_lista" onclick="MyFunction">Inserisci nuovo ingrediente alla lista</button>`;


console.log(lista);
console.log(listaSpesa);
console.log(lista_spesa_lenght);



while(i < lista_spesa_lenght){
    let element= `<label for="${listaSpesa[i]}">${listaSpesa[i]}</label><input type="checkbox" id="${listaSpesa[i]}"></br>`
    lista.innerHTML += element;
    i++;
    
}


if(i == lista_spesa_lenght - 1){
    document.getElementById("spesa").append= new_element;
}


function MyFunction(){
    var ingredienteN= document.getElementById("nuovo_elemento");
    var nuovo_ingrediente= ingredienteN.value;
    listaSpesa.push(nuovo_ingrediente);
}

