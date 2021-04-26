let btn = document.querySelector('.btn');
let counter = document.querySelector('.counter');
let count = 0;

btn.addEventListener('click', () => {
  count += 1;
  counter.innerText = count;
});
