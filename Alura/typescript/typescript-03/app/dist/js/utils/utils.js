export function imprimir(...args) {
    for (let arg of args) {
        console.log(arg.paraTexto());
    }
}
