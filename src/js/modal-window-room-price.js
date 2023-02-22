// Отримуємо всі кнопки, які відкривають модальне вікно
const buttons = document.querySelectorAll('.modal-button-for-price');

// Отримуємо модальне вікно за допомогою його id
const modal = document.getElementById('modal-for-price');

// Отримуємо елемент close (хрестик) модального вікна
const close = document.getElementsByClassName('close-for-price')[0];

// Додаємо обробник подій до кожної кнопки, який відкриває модальне вікно
buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    modal.style.display = 'block';
  });
});

// Додаємо обробник подій до елементу close, який закриває модальне вікно
close.addEventListener('click', function() {
  modal.style.display = 'none';
});
window.addEventListener('click', function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
});