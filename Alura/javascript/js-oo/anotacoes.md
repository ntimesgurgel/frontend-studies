# Anotações

A programação possui dois paradigmas básicos e estes possuem suas divisões:

- imperativo:
  - procedural;
  - orientado a objeto;
  - processamento paralelo;
- declarativo:
  - lógico;
  - funcional;
  - base de dados.

Na orientação a objetos, os programas são objetos que possuem propriedades. Os pilares da Orientação à Objeto são:

- Herança;
- Polimorfismo;
- Encapsulamento;
- Abstração.

## Pilares

### Abstração

A abstração remove a complexidade de certas informações, simplificando a comunicação, avaliação e classificação.

### Herança

Os objetos filhos herdam propriedades dos objetos pais, onde os filhos tem características próprias.

### Encapsulamento

Cada classe tem propriedades que quando são modificadas, afetam somente a classe.

### Polimorfismo

Os objetos filhos podem se comportar de maneira diferente da classe pai.

## JS Orientado a Objeto

### Protótipos

Todos os objetos Javascript herdam as propriedades e métodos do objeto `prototype`.

Em uma cadeia de protótipos, as funções saem do objeto mais baixo até alcançar o protótipo mais básico que é o `Object.prototype = null;`

### Classes

As classes do JS não existem de fato, é utilizado um syntax sugar em seu lugar. TOdas as classes são objetos e a herança se dá por protótipos.

o modelo padrão é:

```javascript
class Class {
    constructor (type){
        this._type = type;
    } //construtor inicia 

    get type(){
        return this._type;
    } //getter obtém o resultado;

    set type(val){
        this._type = val;
    } //setter muda um parâmetro 
}

class Son extends Class {
    constructor(){
        super('son');
    } //super aplica o valor à classe pai

    makeSomething(){
        super.makeSomething();
        console.log('Something'); //método
    }
}
```
