//  ADICIONANDO CORES AO BACKGROUND
let backgroundWhite = document.querySelector('#bg-white');
let backgroundGreen = document.querySelector('#bg-green');
let backgroundGrey = document.querySelector('#bg-grey');
let container = document.querySelector('.content');

container.style.backgroundColor = localStorage.background;

backgroundWhite.addEventListener('click', function () {
  container.style.backgroundColor = 'white';
  localStorage.setItem('background', 'white');
});

backgroundGreen.addEventListener('click', function () {
  container.style.backgroundColor = 'green';
  localStorage.setItem('background', 'green');
});

backgroundGrey.addEventListener('click', function () {
  container.style.backgroundColor = 'grey';
  localStorage.setItem('background', 'grey');
});

//  Adicionando cores ao texto
let text = document.querySelector('#text');
let textBlack = document.querySelector('#text-black');
let textBlue = document.querySelector('#text-blue');
let textRed = document.querySelector('#text-red');

text.style.color = localStorage.textColor;

textBlack.addEventListener('click', function () {
  text.style.color = 'black';
  localStorage.setItem('textColor', 'black');
});

textBlue.addEventListener('click', function () {
  text.style.color = 'blue';
  localStorage.setItem('textColor', 'blue');
});

textRed.addEventListener('click', function () {
  text.style.color = 'red';
  localStorage.setItem('textColor', 'red');
});

//  Adicionando tamanho de fontes
let px20 = document.querySelector('#px1');
let px30 = document.querySelector('#px2');
let px40 = document.querySelector('#px3');

text.style.fontSize = localStorage.fontSize;

px20.addEventListener('click', function () {
  text.style.fontSize = '18px';
  localStorage.setItem('fontSize', '18px');
});

px30.addEventListener('click', function () {
  text.style.fontSize = '19px';
  localStorage.setItem('fontSize', '19px');
});

px40.addEventListener('click', function () {
  text.style.fontSize = '20px';
  localStorage.setItem('fontSize', '20px');
});

//  Letter Spacing
let spacing1 = document.querySelector('#spacing1');
let spacing2 = document.querySelector('#spacing2');
let spacing3 = document.querySelector('#spacing3');

text.style.letterSpacing = localStorage.letterSpacing;

spacing1.addEventListener('click', function () {
  text.style.letterSpacing = '0px';
  localStorage.setItem('letterSpacing', '0px');
});

spacing2.addEventListener('click', function () {
  text.style.letterSpacing = '0.5px';
  localStorage.setItem('letterSpacing', '0.5px');
});

spacing3.addEventListener('click', function () {
  text.style.letterSpacing = '1px';
  localStorage.setItem('letterSpacing', '1px');
});

//  Font-family
let font1 = document.querySelector('#font1');
let font2 = document.querySelector('#font2');
let font3 = document.querySelector('#font3');

text.style.fontFamily = localStorage.fontFamily;

font1.addEventListener('click', function () {
  text.style.fontFamily = 'Courier';
  localStorage.setItem('fontFamily', 'Courier');
});

font2.addEventListener('click', function () {
  text.style.fontFamily = 'Franklin';
  localStorage.setItem('fontFamily', 'Franklin');
});

font3.addEventListener('click', function () {
  text.style.fontFamily = 'Arial';
  localStorage.setItem('fontFamily', 'Arial');
});
