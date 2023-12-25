// Получаем ссылки на элементы
var buttonLogin = document.getElementsByClassName('button-login')[0];
var modal = document.getElementById('modal');
var close = document.getElementsByClassName('close')[0];

// Открываем модальное окно при клике на кнопку
function openModal() {
  modal.style.display = "block";
}

// Закрываем модальное окно при клике на крестик
function closeModal() {
  modal.style.display = "none";
}

// Закрываем модальное окно при клике вне его области
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}