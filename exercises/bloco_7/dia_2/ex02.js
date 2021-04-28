const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

//  exercicio 1;
// const func1 = (obj, k, v) => {
//   obj[k] = v;
//   return obj;
// }
// console.log(func1(lesson2, 'turno', 'manhã'));

//  exercicio 2;
// const showKey = obj => Object.keys(obj);
// console.log(showKey(lesson1));

//  exercicio 3;
// const showLength = (obj) => Object.keys(obj).length;
// console.log(showLength(lesson3));

//  exercicio 4;
// const showValues = (obj) => Object.values(obj);
// console.log(showValues(lesson3));

//  exercicio 5;
let allLessons = {};
Object.assign(allLessons, { lesson1, lesson2, lesson3 });
// console.log(allLessons);

//  exercicio 6;
// const students = obj => allLessons.lesson1.numeroEstudantes +  allLessons.lesson2.numeroEstudantes + allLessons.lesson3.numeroEstudantes;
// console.log(students(allLessons));

//  exercicio 7;
// const getKey = (obj, n) => Object.values(obj)[n];
// console.log(getKey(lesson3, 0));

//  exercicio 8;
// const verifyKey = (obj, k, v) => obj[k] === v;
// console.log(verifyKey(lesson3, 'turno', 'noite'));

//  bônus 1
// const countStudents = (v) => Object.values(allLessons).map(c=>c.materia===v?c.numeroEstudantes:'').filter(c=>c!=='').reduce((a,b)=>a+b);
// console.log(countStudents('Matemática'));

//  bônus 2
const teach = (obj, t) => {let a = Object.values(obj).map(c=>c.professor === t?c:''), aulas = a.map(c=>c.materia).filter(c=>c!==undefined), estudantes = a.map(c=>c.numeroEstudantes).filter(c=>c!==undefined).reduce((a,b)=>a+b); return {'professor': t,'aulas': aulas,'estudantes': estudantes,};};

console.log(teach(allLessons,'Maria Clara'));