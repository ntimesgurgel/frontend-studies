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
const temPassagemComprada = true;
console.log("Destinos Possíveis: ");
console.log(listaDeDestinos);

if(idadeComprador >= 18 || estaAcompanhada){
    console.log("Comprador maior de idade");
    listaDeDestinos.splice(1,1);
} else {
    console.log("Não está acompanhado e não pode comprar");
}

console.log("Embarque: ")

if(idadeComprador >= 18 && temPassagemComprada){
    console.log("Boa Viagem");
} else {
    console.log("Você não pode embarcar");
}


console.log(listaDeDestinos);