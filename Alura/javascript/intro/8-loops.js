console.log(`Trabalhando com listas`);

// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 16;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = 'Salvador';

console.log("\nDestinos Possíveis: ");
console.log(listaDeDestinos);

let podeComprar = idadeComprador >= 18 || estaAcompanhada;
let destinoExiste = false;
let contador = 0;

while(contador < 3 || destinoExiste == true){
    if(listaDeDestinos[contador]== destino){
        console.log("\n Destino existe");
        destinoExiste = true;
        break;
    }else{
        console.log("\n Destino não existe");
    }
    contador += 1;
}

if(idadeComprador >= 18 || estaAcompanhada){
    console.log("Comprador maior de idade");
    listaDeDestinos.splice(1,1);
    temPassagemComprada = true;
} else {
    console.log("Não está acompanhado e não pode comprar");
    temPassagemComprada = false;
}

console.log("\n Embarque: ")

if(idadeComprador >= 18 && temPassagemComprada){
    console.log("Boa Viagem");
} else {
    console.log("Você não pode embarcar");
}

for(contador = 0; contador <listaDeDestinos.length;contador++){
    if(listaDeDestinos[contador]== destino){
        console.log("\n Destino existe");
        destinoExiste = true;
        break;
    }else{
        console.log("\n Destino não existe");
    }
    contador += 1;
}