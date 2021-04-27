const func1 = (str, str2) => str.replace(/x/, str2);
// console.log(func1('Tryber x aqui!', 'Rodrigo'));

const skills = ['Js', 'Html', 'Css', 'Xablau', 'Galinha'];

const func2 = (func, skills) => {
  const x = skills.sort();
  return `${func} Minhas cinco principais habilidades são:
${x[0]}
${x[1]}
${x[2]}
${x[3]}
${x[4]}`;
};

console.log(func2(func1('Tryber x aqui!', 'Rodrigo'), skills));
