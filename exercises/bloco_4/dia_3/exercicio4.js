let num = 5;
let piramyd = []; //variavel para guardar os valores dos asteriscos
let spaces = []; //variavel para guardar os espaços ' '

for (let i = 1; i <= num; i += 2) {
  //loop para repetir o * a cada i, aumentando de 2 em 2 * para a piramide formar um triangulo obs:começou em 1 por que se começasse em zero iria armazenar uma string vazia na variavel
  piramyd.push('*'.repeat(i));
}
for (let i = num; i > piramyd.length - 1; i -= 1) {
  //loop para guardar os ' ', i = num porque é o numero maximo de astericos para assim começar com o maximo de espaços, enquanto i = num for maior que o tamanho da piramide, ele reduzira de 1 em 1 para ir sempre reduzindo o espaço lateral da piramide e ela ficar uniforme, o piramyd.length -1 é porque o espaços tem que ter uma casa a menos que os astericos, caso contrario dará undefined pois o ultimo valor nao existira
  spaces.push(' '.repeat(i));
}
for (let i = 0; i < piramyd.length; i += 1) {
  //loop para imprimir no console, enquanto i for < que piramyd.length que é o tamanho dos astericos irá aumenta de 1 em 1 assim imprimindo todos os astericos e consequentemente os espaços na margem dele equivalentes
  console.log(`${spaces[i]}${piramyd[i]}`);
}
