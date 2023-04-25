# Anotações

O `Flexbox` serve como um modelo de layout unidimensional e oferece liberdade para manipular os espaços e alinhamento dos itens.

## Flex Container

É a tag que contém os itens e possui a propriedade no CSS `display: flex`. As propriedades associadas são:

- flex-direction;
- flex-wrap;
- flex-flow;
- justify-content;
- align-items;
- align-content.

## Flex Item

São filhos direto do Flex Container. Esses também podem ser Flex Container. Propriedades relacionadas:

- flex-grow;
- flex-basis;
- flex-shrink;
- flex;
- order;
- self-align.

# Parte 1 - Propriedades para Flex-container

Ao implementar o `display: flex`, os elementos filhos buscam ocupar ocupar somente o espaço destinado ao elemento pai. Em outras palavras, se temos um elemento com o atributo flex e tem 300px de largura, caso tenha três elementos filhos que ao todo ocupe menos de 300px, todos ficarão na mesma linha. Em um caso que eles ocupem mais espaço que o destinado ao elemento pai, ocorre o vazamento.

A direção do Flex é na horizontal por padrão. Para modificar a direção é necessário definir o `flex-direction`. Algumas opções são:

- row (padrão): ordena na linha, esquerda para direita.
- row-reverse: ordena na linha, direita para esquerda.
- column: ordena na coluna, cima para baixo.
- column-reverse: ordena na coluna, baixo para cima.

Para controlar o caso de vazamento, usamos o `flex-wrap`, a qual define se há quebra ou não da linha. Por padrão, não há quebra de linha. As opções são:

- nowrap: não permite quebra de linha e tenta adicionar elementos o máximo possível;
- wrap: permite a quebra de linha a partir do primeiro elemento que saia do container.

Além desse, há o `wrap-reverse` que adiciona elementos ACIMA da linha atual ao invés de posicionar o alemento abaixo.

O `flex-flow` consegue concatenar o direction e o wrap numa linha só.

O `justify-content` se encarrega do alinhamento dos itens e distribuição do espaço dentro do container. Os atributos dessa propriedade são:

- flex-start: alinha a partir do início do container;
- flex-end: alinha a partir do fim do container;
- center: alinha a partir do centro do container;
- space-between: coloca o primeiro elemento no começo e o último elemento no fim do container e distribui o restante igualmente espaço entre os dois citados;
- space-around: posiciona deixando espaço entre cada elemento, inclusive o primeiro e o último.

A propriedade `align-items` trata dos flex itens de acordo com o eixo do container, sendo diferente se a distribuição é em linha ou em coluna. Os atributos dessa propriedade são:

- center: alinhamento dos itens ao centro;
- stretch: padrão, os flex itens crescem igualmente;
- flex-start: alinhamento dos itens no início;
- flex-end: alinhamento dos itens no fim;
- baseline: alinhamento de acordo com a linha base da tipografia dos itens.

O `align-content` é responsável pelo tratamento das linhas em relação ao eixo vertical do container. Para o align-content funcionar é necessário que o container utilize quebra de linhas e a altura do container seja maior que a soma das linhas dos itens.

O atributos do align-content são:

- center: alinhamento ao centro;
- stretch: os itens crescem igualmente;
- flex-start: alinhamento dos itens no início;
- flex-end: alinhamento dos itens no final;
- space-between: alinha o primeiro elemento no começo e o último elemento no final e espaça igualmente os demais elementos entre os dois supracitados;
- space-around: separa igualmente todos os elementos, deixando metade do espaçamento antes do primeiro item e a outra metade depois do último item.

# Parte 2 - propriedades para flex items

O `flex-grow` define a proporcionalidade de crescimento dos itens, respeitando o tamanho de seus conteúdos internos. No flex-grow, você define qual a ordem de prioridade para que cada elemento ocupe o espaço, sempre respeitando o conteúdo do item.

O `flex-basis` estabelece o tamanho inicial do item antes da distribuição de espaço restante dentro dele, usando como base o conteúdo interno disposto.

Os atributos dessa propriedade são:

- auto: o item do tamanho do conteúdo;
- px, %, em... : são valores definidos;
- 0: terá relação com a definição do flex-grow;

O `flex-shrink` estabelece a capacidade de redução ou compressão de um item.

A propriedade `flex` é a união das propriedades grow, shrink e basis, onde aplicamos os valores nessa respectiva ordem.

Ao implementar o seguinte css:

```css
.flex{
    flex: 1;
}
```

Estamos setando `grow = 1, shrink = 1, basis = 0`.

```css
.flex{
    flex: 1;
}
```

O atributo `order` define a ordem dos elementos onde o `order: 0` é o maior.

O `align-self` permite que cada item tenha sua própria forma de se alinhar com os demais elementos.