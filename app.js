const light = document.querySelector('.again');
const btn = document.querySelector('.check');

btn.addEventListener('click', function () {
  console.log('click');
});
console.log(light.innerHTML);
console.log(btn.innerHTML);

document.querySelector('.again').addEventListener('click', function () {
  console.log('click again');
});
