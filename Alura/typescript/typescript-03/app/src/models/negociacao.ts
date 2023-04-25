import { Modelo } from "../interfaces/meu-modelo.js";

export class Negociacao implements Modelo<Negociacao> {

    constructor(
        private _data: Date, 
        readonly quantidade: number, 
        readonly valor: number
    ){}

    get data(): Date {
        const data = new Date(this._data.getTime());
        return data;
    }

    get volume(): number{
        return this.quantidade * this.valor;
    }

    public paraTexto(): string{
        return `
        Data: ${this.data},
        Quantidade: ${this.quantidade},
        Valor: ${this.valor}`;
    }

    public static criaDe(dataString: string, quantidadeString: string, valorString: string): Negociacao{
        const exp: RegExp = /-/g;
        const date: Date = new Date(dataString.replace(exp, ','));
        const quantidade: number = parseInt(quantidadeString);
        const valor: number = parseFloat(valorString);
        return new Negociacao(date, quantidade, valor);
    }

    public ehIgual(negociacao: Negociacao): boolean{
        return this.data.getDate() === negociacao.data.getDate()
            && this.data.getMonth() === negociacao.data.getMonth()
            && this.data.getFullYear() === negociacao.data.getFullYear()
    }
}