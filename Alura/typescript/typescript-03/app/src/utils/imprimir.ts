import { Imprimivel } from "./imprimivel.js";

export function imprimir(...args: Imprimivel[]){
    for(let arg of args){
        console.log(arg.paraTexto());
    }
}