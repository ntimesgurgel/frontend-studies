# Anotações

## Map

O `map` é uma transformação de um conjunto.
O Map não altera o array original, cria um novo array com os valores novos.
O Map altera em ordem, do índice 0 a n.

a aplicação do método é:

```javascript
array.map(callback, thisArg) //callback é a função para ser executada em cada índice do elemento. O thisArg é opcional.
```

### Map vs forEach

quando se utiliza o forEach em um array ele retorna um undefined, enquanto o Map retorna os elementos que sofrem a modificação.

## Filter

O `filter` te retorna uma nova lista com os elementos de um array que passam pelas condições do filtro.

a aplicação do método é:

```javascript
array.filter(callback, thisArg)
```

## Reduce

O `reduce` executa uma função em todos os elementos do array e retorna um único elemento.

a aplicação do método é:

```javascript
array.reduce(callbackFn, initialValue);

const callbackFn = function(accumulator, currentValue, index, array){
    //doSomething
}
```



