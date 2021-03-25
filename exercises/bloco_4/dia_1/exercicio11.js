let salarioBruto = 3000;

// Desconto INSS

if (salarioBruto >= 0 && salarioBruto <= 1556.94) {
  salarioBruto = salarioBruto - (salarioBruto / 100) * 8;
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
  salarioBruto = salarioBruto - (salarioBruto / 100) * 9;
} else if (salarioBruto >= 2593.93 && salarioBruto <= 5189.82) {
  salarioBruto = salarioBruto - (salarioBruto / 100) * 11;
} else {
  salarioBruto - 570.88;
}

// Desconto Imposto de Renda IR

if (salarioBruto <= 1903.98) {
  console.log(`Seu salario bruto é de ${salarioBruto}`);
} else if (salarioBruto >= 1903.99 && salarioBruto <= 2826.65) {
  salarioBruto = salarioBruto - ((salarioBruto / 100) * 7.5 - 142.8);
  console.log(`Seu salario bruto é de ${salarioBruto}`);
} else if (salarioBruto >= 2826.66 && salarioBruto <= 3751.05) {
  salarioBruto = salarioBruto - ((salarioBruto / 100) * 15 - 354.8);
  console.log(`Seu salario bruto é de ${salarioBruto}`);
} else if (salarioBruto >= 3751.06 && salarioBruto <= 4664.68) {
  salarioBruto = salarioBruto - ((salarioBruto / 100) * 22.5 - 636.13);
  console.log(`Seu salario bruto é de ${salarioBruto}`);
} else {
  salarioBruto = salarioBruto - ((salarioBruto / 100) * 27.5 - 869.36);
  console.log(`Seu salario bruto é de ${salarioBruto}`);
}
