export class Negociacao {

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

    public static criaDe(dataString: string, quantidadeString: string, valorString: string): Negociacao{
        const exp: RegExp = /-/g;
        const date: Date = new Date(dataString.replace(exp, ','));
        const quantidade: number = parseInt(quantidadeString);
        const valor: number = parseFloat(valorString);
        return new Negociacao(date, quantidade, valor);
    }
}