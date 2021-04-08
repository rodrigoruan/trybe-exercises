function createDaysOfTheWeek() {
  const weekDays = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
  ];
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.
//  Primeiro Exercício
let listaDias = document.querySelector('#days');
const dezDaysList = [
  29,
  30,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
  31,
];

for (let i = 0; i < dezDaysList.length; i += 1) {
  let dia = document.createElement('li');
  dia.className = 'day';
  if (dezDaysList[i] === 25 || dezDaysList[i] === 24 || dezDaysList[i] === 31) {
    dia.className += ' holiday';
  }
  if (
    dezDaysList[i] === 4 ||
    dezDaysList[i] === 11 ||
    dezDaysList[i] === 18 ||
    dezDaysList[i] === 25
  ) {
    dia.className += ' friday';
  }
  dia.innerText = dezDaysList[i];
  listaDias.appendChild(dia);
}

// ----------------------------------------------
//  Segundo exercício
function holidayButton(str) {
  let holidayButton = document.createElement('button');
  holidayButton.innerText = str;
  holidayButton.id = 'btn-holiday';
  document.querySelector('.buttons-container').appendChild(holidayButton);
}
holidayButton('Feriados');

//  ------------------------------------------------
//  Terceriro Exercicio
function changeHolidayBackground() {
  let holidayBtn = document.querySelector('#btn-holiday');
  holidayBtn.addEventListener('click', function () {
    let holidays = document.querySelectorAll('.holiday');
    for (let i of holidays) {
      if (i.style.backgroundColor === 'brown') {
        i.style.backgroundColor = 'rgb(238,238,238)';
      } else {
        i.style.backgroundColor = 'brown';
      }
    }
  });
}
changeHolidayBackground();

//  -------------------------------------------------
//  Quarto
function friday(str) {
  let button = document.createElement('button');
  button.innerText = str;
  button.id = 'btn-friday';
  document.querySelector('.buttons-container').appendChild(button);
}
friday('Sexta-feira');
//  --------------------------------------------------
//  Quinto Exercício
function changeFridayText() {
  let fridayButton = document.querySelector('#btn-friday');
  fridayButton.addEventListener('click', function () {
    let fridays = document.querySelectorAll('.friday');
    for (let i of fridays) {
      if (i.innerText !== 'XABLAU') {
        i.innerText = 'XABLAU';
      } else {
        i.innerText = Number(i.previousElementSibling.innerText) + 1;
      }
    }
  });
}
changeFridayText();
//  --------------------------------------------------
//  Sexto Exercício
let Uldays = document.querySelector('#days');
Uldays.addEventListener('mouseover', function (event) {
  event.target.style.fontSize = '30px';
});

Uldays.addEventListener('mouseout', function (event) {
  event.target.style.fontSize = '20px';
});
//  --------------------------------------------------
//  Sétimo Exercício
function addTask(str) {
  let task = document.createElement('span');
  task.innerText = str;
  document.querySelector('.my-tasks').appendChild(task);
}
addTask('john johnes');
//  ---------------------------------------------------
//  Exercício 8
function createColor(str) {
  let div = document.createElement('div');
  div.className = 'task';
  div.style.backgroundColor = str;
  document.querySelector('.my-tasks').appendChild(div);
}
createColor('red');
//  ----------------------------------------------------
//  Exercício 9
let div = document.querySelector('.task');
div.addEventListener('click', function () {
  if (div.classList.contains('selected')) {
    div.className = 'task';
  } else {
    div.className = 'task selected';
  }
});
//  Exercício 10
Uldays.addEventListener('click', function (event) {
  let colorName = div.style.backgroundColor;
  if (event.target.style.color === 'rgb(119, 119, 119)') {
    event.target.style.color = colorName;
  } else {
    event.target.style.color = 'rgb(119, 119, 119)';
  }
});
//  Exercício Bônus
let btn = document.querySelector('#btn-add');
let h3s = document.querySelectorAll('h3');
let input = document.querySelector('#task-input');
h3s[1].className = 'compromises';

btn.addEventListener('click', function append() {
  let li = document.createElement('p');
  li.innerText = input.value;
  document.querySelector('.compromises').appendChild(li);
});

input.addEventListener('keyup', function (event) {
  if (event.keyCode === 13) {
    let li = document.createElement('p');
    li.innerText = input.value;
    if (li.innerText.length === 0) {
      alert('Erro, por favor digite algo');
    } else {
      document.querySelector('.compromises').appendChild(li);
    }
  }
});
