// Entrada de valores
let custoProduto = 100;
let valorVenda = 140;
// ^^ Coloque valores somente acima ^^
let imposto = (custoProduto / 100) * 20;
let valorCustoTotal = custoProduto + imposto;
let lucro = valorVenda - valorCustoTotal;
let lucroMilProdutos = lucro * 1000;

if (custoProduto < 0 || valorVenda < 0) {
  console.log('Por favor digite um valor válido');
}

console.log(lucroMilProdutos);




