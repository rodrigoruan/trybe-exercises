const readline = require("readline-sync");

const generateRandomNum = () => Math.round(Math.random() * 10);

const response = readline.questionInt("Digite um número de 0 a 10: ");
