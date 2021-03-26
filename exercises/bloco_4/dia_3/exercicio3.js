let valor = 5;
let asteriscos = [];
let spaces = [];

for (let index = 1; index < valor + 1; index += 1) {
  asteriscos.push('*'.repeat(index));
}
for (let i = valor; i > valor - valor; i -= 1) {
  spaces.push(' '.repeat(i));
}
for (let i = 0; i < asteriscos.length; i += 1) {
  console.log(spaces[i] + asteriscos[i]);
}
