let salario = 3000;

// Desconto INSS

if (salario <= 1556.94) {
  salario = salario - (salario / 100) * 8;
} else if (salario >= 1556.95 && salario <= 2594.92) {
  salario = salario - (salario / 100) * 9;
} else if (salario >= 2593.93 && salario <= 5189.82) {
  salario = salario - (salario / 100) * 11;
} else {
  salario - 570.88;
}

// Desconto Imposto de Renda IR

if (salario <= 1903.98) {
  salario;
} else if (salario >= 1903.99 && salario <= 2826.65) {
  salario = salario - ((salario / 100) * 7.5 - 142.8);
} else if (salario >= 2826.66 && salario <= 3751.05) {
  salario = salario - ((salario / 100) * 15 - 354.8);
} else if (salario >= 3751.06 && salario <= 4664.68) {
  salario = salario - ((salario / 100) * 22.5 - 636.13);
} else {
  salario = salario - ((salario / 100) * 27.5 - 869.36);
}

// CONSOLE LOG

if (salario > 0) {
  console.log(`Seu salario bruto é de ${salario}`);
} else {
  console.log(`Digite um salário válido`);
}
