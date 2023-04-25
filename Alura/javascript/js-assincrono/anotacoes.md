# Anotações

## Definição

Assíncrono é algo que não ocorre ao mesmo tempo.

Em um modelo síncrono, ao ser realizado a requisição/comunicação, só é possível continuar o processo após conclusão da requisição/comunicação.

Em um modelo assíncrono, é possível continuar realizando outras tarefas/processos, enquanto não é concluído uma tarefa/processo em andamento.

## Promises

Objeto de processsamento assíncrono. O valor futuro de uma promise é desconhecido e durante o evento a promessa pode ser resolvida ou rejeitada.

O modelo de uma promise é:

```javascript
const myPromise = new Promise((resolve, reject) => {
    window.setTimeout(()=>{
        resolve(console.log('Resolvida!'));
    }, 2000);
})
```

Pode ser adicionado o `await` para operações em casos de promessa resolvida (por meio do `then`) ou rejeitada (`catch`):

```javascript
await myPromise.then((result) => result + ' passando pelo then').then((result) => result + ' e agora acabou!').catch((err)=> console.log(err.messsage));
```

## Async/Await

Para tornar uma função assíncrona, é necessário usar as funções `async/await`, como exemplo:

```javascript
async function resolvePromise(){
    const myPromise = new Promise((resolve, reject) => {
        window.setTimeout(()=>{
            resolve(console.log('Resolvida!'));
        }, 2000);

    const resolved = await myPromise
        .then((result) => result + ' passando pelo then')
        .then((result) => result + ' e agora acabou!')
        .catch((err)=> console.log(err.messsage));

    return resolved;
}    
```

o `then...catch` pode ser trocado por `try...catch`.

## APIs

As APIs são intermediários entre o back-end (requisições e resultados) e o front-end (apresentações ao usuário). O acesso é feito por meio de URLs.

As APIs retornam JSONs.

## fetch

O método fetch é o utilizado para requisições de APIs, é feito por meio da seguinte expressão:

```javascript
fetch(url, options)
    .then(response => response.json())
    .then(json => console.log(json))
```

O fetch retorna uma promise, então deve ser utilizado o método `await`.

Algumas operações do método `fetch` são:

- POST: inserir no banco de dados;
- GET: obter resultados;
- PUT: 
- DELETE: deletar do banco de dados.

