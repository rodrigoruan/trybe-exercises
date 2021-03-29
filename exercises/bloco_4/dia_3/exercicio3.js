let valor = 5;
let asteriscos = [];  // array para guardar os astericos
let spaces = [];  //array para guardar os espaços
// ------------------------------------------------------------------------------------------------------------------------------
for (let index = 1; index < valor + 1; index += 1) {  //loop para guardar os astericos no array, começa com 1 pois se começar com 0 vai guardar um valor vazio no array, portanto aumentando o valor em + 1, a cada loop ele irá adicionar um * no array 1° loop = '*', 2° loop = '**'...
  asteriscos.push('*'.repeat(index));
}
// ------------------------------------------------------------------------------------------------------------------------------
for (let i = valor; i > 0; i -= 1) { //loop para guardar os espaços no array, i = valor que vai começar no valor maximo assim imprimindo primeiro o maximo de espaços e decrementando sempre 1, ex com o valor 5: 1°loop '     ', 2° loop '    ', 3°loop '   ' irá sempre diminuir 1 espaço para a piramide ficar uniforme
  spaces.push(' '.repeat(i));
}
// ------------------------------------------------------------------------------------------------------------------------------
for (let i = 0; i < asteriscos.length; i += 1) { //loop para imprimir o conteúdo na tela, i = 0, enquanto i for menor que o total de asteriscos contados como indice, ele continuara imprimindo e incrementando 1, ex: 1°loop ele irá mostra no console '     ' + '*'
//ou seja o 1° loop '*' asterisco que guardamos e o 1° '     ', espaços que guardamos, no 2°loop imprimira '**' o indice 2 do array asteriscos e o '    ' indice 2 do array spaces... e assim por diante.
  console.log(spaces[i] + asteriscos[i]);
}
