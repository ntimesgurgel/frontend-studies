# Anotacoes

## DOM

DOM: Document Object Model é um padrão de como acessar e modificar os elementos HTML de uma página.

O Document tem uma tag root `<html>` e este terá seus filhos `<body>` e `<html>` e essas tendo suas tags filhas também.

## BOM

BOM: Browser Object Model é a árvore de dependências do Browser, dentro dela está o Document.

## Métodos para manipulação do DOM

tags: representação de parte do código.

ids: identificador único para tags.

classes: identificador compartilhável entre tags HTML.

podemos buscar os elementos pelas tags, ids e classes. por exemplo

```javascript
document.getElementById('titulo'); //obtém o elemento da tag que possui o id titulo
document.getElementsByTagName('li'); //obtém um array com todas as tags li
document.getElementsByClassName('textos'); //obtém um array com tags textos
document.querySelectorAll('.primeira-classe .segunda-classe'); //obtém um array que tenham as duas classes
```

o `document.querySelectAll()` pode receber tags e classes simultaneamente.

### Adicionar e deletar

alguns métodos para adicionar e remover elementos

| Método | Descrição |
|:------:|:---------:|
|document.createElement(element)|Cria um novo elemento HTML|
|document.removeChild(element)|Remove um elemento|
|document.appendChild(element)|Adiciona um elemento|
|document.replaceChild(new, old)|Substitui um elemento|

## Manipulando estilos

para manipular os estilos, podemos fazer da seguinte maneira:

```javascript
const meuElemento = document.getElementById('meu-elemento');

meuElemento.classList.add('novo-estilo'); //adicionando a classe novo estilo à tag com id 'meu-elemento'

meuElemento.classList.remove('classe'); //remove a classe 'classe'

meuElemento.classList.toggle('dark-mode'); //remove a classe 'dark-mode' se existir, ativa a classe 'dark-mode' se não existir
```

## Eventos

Eventos de mouse: mouseover, mouseout.

Eventos de clique: click, dbclick.

Eventos de atualização: change, load.

### Adicionar eventos

```javascript
const botao = document.getElementById('meuBotao');

botao.addEventListener('click', outraFuncao);
```
