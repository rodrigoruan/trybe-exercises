let angulo1 = 100;
let angulo2 = 20;
let angulo3 = 50;
let somaDosAngulos = angulo1 + angulo2 + angulo3;

if (angulo1 < 0 || angulo2 < 0 || angulo3 < 0) {
  console.log('Por favor digite um valor positivo para todos os ângulos');
} else if (somaDosAngulos === 180) {
  console.log(true);
} else {
  console.log(false);
}
