let valor = 5; //Declarei uma variavel para guardar o valor recebido

for (let i = 1; i < valor + 1; i += 1) {
  // criado uma repetição para repetir enquanto o indíce for menor que o valor da variavel + 1, no caso começando em 1 pois se começar em 0 não vai imprimir a primeira vez o asterisco no console.log, e também fazendo valor + 1 pelo motivo que começara como 1 o index, continuara repetindo até chegar no valor da variável + 1
  console.log('*'.repeat(i)); //criado um console para imprimir os astericos vezes o valor de i ex: temos o valor 5;
  /* 1 impressão :  *
     2 impressão : **
     3 impressão : ***
     4 impressão : ****
     5 impressão : *****
     fim do codigo pois i repetiu 5 vezes, incrementando 1 ao seu valor toda vez que repetia virando assim o valor 6:: 6 < 6 ? false então fim do codigo 
  */
}
