// Переменная для хранения предыдущего активного элемента
let previousActiveElement = null;

// Обработчик для всех <li> внутри <ul>, кроме .donate-btn
document.querySelectorAll('ul li:not(.donate-btn)').forEach(li => {
  li.addEventListener('click', function(event) {
    // Удаляем активный класс с предыдущего активного элемента
    if (previousActiveElement) {
      previousActiveElement.classList.remove('active');
      previousActiveElement.querySelector('ion-icon').style.color = '';
      previousActiveElement.querySelector('.span').style.backgroundColor = '';
      previousActiveElement.querySelector('.span').style.width = '';
      previousActiveElement.querySelector('.span').style.height = '';
    }

    // Добавляем активный класс к текущему элементу
    li.classList.add('active');
    li.querySelector('ion-icon').style.color = '#d87700';
    li.querySelector('.span').style.backgroundColor = '#d87700';
    li.querySelector('.span').style.width = '19px';
    li.querySelector('.span').style.height = '3.4px';

    // Обновляем предыдущий активный элемент
    previousActiveElement = li;
  });
});

// Обработчик для всех <li> внутри <mm>
document.querySelectorAll('mm li').forEach(li => {
  li.addEventListener('click', function(event) {
    // Удаляем активный класс с предыдущего активного элемента
    if (previousActiveElement) {
      previousActiveElement.classList.remove('activetis');
      previousActiveElement.querySelector('ion-icon').style.color = '';
      previousActiveElement.querySelector('.span').style.backgroundColor = '';
      previousActiveElement.querySelector('.span').style.width = '';
      previousActiveElement.querySelector('.span').style.height = '';
    }

    // Добавляем активный класс к текущему элементу
    li.classList.add('activetis');
    li.querySelector('ion-icon').style.color = '#d87700';
    li.querySelector('.span').style.backgroundColor = '#d87700';
    li.querySelector('.span').style.width = '19px';
    li.querySelector('.span').style.height = '3.4px';

    // Обновляем предыдущий активный элемент
    previousActiveElement = li;
  });
});

// Обработчик для кнопки доната с отладкой
document.addEventListener('DOMContentLoaded', function() {
  const donateBtn = document.getElementById('donate-btn');
  if (donateBtn) {
    console.log('Donate button found in DOM');
    donateBtn.addEventListener('click', function(event) {
      console.log('Donate button clicked');
      event.stopPropagation(); // Останавливаем распространение события
      event.preventDefault(); // Предотвращаем дефолтное поведение
      window.location.href = 'https://pay.cloudtips.ru/p/5a2c8063'; // Переход по ссылке
      // Альтернатива: window.open('https://pay.cloudtips.ru/p/5a2c8063', '_blank');
    });
  } else {
    console.error('Donate button with id "donate-btn" not found');
  }
});

// Функция для смены карточек
function changeCard(cardId) {
  var cards = document.getElementsByClassName('maincard');
  var buttons = document.getElementsByClassName('filtr-btn');
  var activeCardId = localStorage.getItem('activeCardId');

  for (var i = 0; i < cards.length; i++) {
    if (cards[i].id === cardId) {
      cards[i].style.display = 'block';
      buttons[i].classList.add('active');
    } else {
      cards[i].style.display = 'none';
      buttons[i].classList.remove('active');
    }
  }

  localStorage.setItem('activeCardId', cardId);
}

// Запуск функции changeCard с идентификатором активной карточки
changeCard(localStorage.getItem('activeCardId'));

// Обработчик поиска
const searchContainer = document.querySelector('.search-container');
const inputField = searchContainer.querySelector('input[type="search"]');

inputField.addEventListener('input', function() {
  const searchTerm = this.value.trim().toLowerCase();
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    const name = card.querySelector('[data-name]').dataset.name.toLowerCase();
    if (name.includes(searchTerm)) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  });
});

// Обработчик клика по карточкам
const cards = document.querySelectorAll('.card');
const mainpage = document.querySelector('.mainpage');

cards.forEach((card) => {
  card.addEventListener('click', () => {
    const targetCard = card;
    const targetOpenedCard = document.querySelector(
      `.card-opened[data-opened="${targetCard.dataset.open}"]`
    );

    targetOpenedCard.classList.toggle('hidden');
    if (mainpage.style.display === 'block') {
      mainpage.style.display = 'none';
    }
  });
});

// Обработчик кнопки возврата
const backarrows = document.querySelectorAll('.backarrow');

backarrows.forEach((backarrow) => {
  backarrow.addEventListener('click', () => {
    const targetCardOpened = backarrow.closest('.card-opened');
    if (targetCardOpened.classList.contains('hidden')) {
      targetCardOpened.classList.remove('hidden');
    }
    if (mainpage.style.display === 'none') {
      mainpage.style.display = 'block';
    }
  });
});

// Обработчики для форм авторизации и регистрации
function showAuthForm() {
  document.getElementById("auth-form").style.display = "flex";
  document.querySelector('.register').style.display = "none";
}

function hideAuthForm() {
  document.getElementById("auth-form").style.display = "none";
  document.querySelector('.register').style.display = "flex";
}

document.getElementById('register-form').addEventListener('submit', function(event) {
  event.preventDefault();
  var formData = new FormData(event.target);
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'register.php');
  xhr.onload = function() {
    if (xhr.status === 200) {
      document.querySelector('.register').style.display = 'none';
      document.querySelector('.auth').style.display = 'flex';
    } else {
      alert('Регистрация не удалась: ' + xhr.responseText);
      document.querySelector('.register').style.display = 'flex';
    }
  };
  xhr.send(formData);
});

document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.auth').style.display = 'none';
  document.querySelector('.register').style.display = 'flex';
});

// Обработчики для фильтров и сортировки
function toggleFilterSort() {
  const filterBtn = document.getElementById('filter-btn');
  if (filterBtn.classList.contains('active')) {
    filterBtn.classList.remove('active');
  } else {
    filterBtn.classList.add('active');
  }
  var filterSort = document.getElementById("filter-sort");
  if (filterSort.style.display === "block") {
    filterSort.style.display = "none";
  } else {
    filterSort.style.display = "block";
  }
}

// Обработчики для списка серий
function toggleListSort() {
  const listBtn = document.getElementById('list-btn');
  if (listBtn.classList.contains('active')) {
    listBtn.classList.remove('active');
  } else {
    listBtn.classList.add('active');
  }
  var listSort = document.getElementById("list-sort");
  if (listSort.style.display === "block") {
    listSort.style.display = "none";
  } else {
    listSort.style.display = "block";
  }
}

// Обработчики для выбора сезонов
function toggleSeasonSort() {
  const seasonBtn = document.getElementById('season-btn');
  if (seasonBtn.classList.contains('active')) {
    seasonBtn.classList.remove('active');
  } else {
    seasonBtn.classList.add('active');
  }
  var seasonSort = document.getElementById("season-sort");
  if (seasonSort.style.display === "block") {
    seasonSort.style.display = "none";
  } else {
    seasonSort.style.display = "block";
  }
}

// Фильтрация по жанрам
function filterCards(janr) {
  var activeGenres = [];
  var activeJanr = $('.fbtna.active').data('janr');
  if (activeJanr) {
    activeGenres.push(activeJanr);
  }

  if (activeGenres.includes(janr)) {
    $('.fbtna[data-janr="' + janr + '"]').removeClass('active');
    activeGenres = activeGenres.filter(function(genre) {
      return genre !== janr;
    });
  } else {
    $('.fbtna[data-janr="' + janr + '"]').addClass('active');
    activeGenres.push(janr);
  }

  $('.card').each(function() {
    var card = $(this);
    var cardGenres = $(this).find('[data-janr]').map(function() {
      return $(this).data('janr');
    }).get();

    var isVisible = activeGenres.length === 0 || cardGenres.some(function(genre) {
      return activeGenres.includes(genre);
    });

    card.toggleClass('visible', isVisible);
  });
}

// Применяем фильтр при загрузке страницы
filterCards();

// Обновление рейтинга
const ratingElements = document.querySelectorAll('.ml-rating');

ratingElements.forEach((element) => {
  const rating = element.getAttribute('data-rating');
  element.textContent = rating;
});

// Показ/скрытие блока добавления
function showBlock(element) {
  var value = element.getAttribute('data-list-see');
  var block = document.querySelector('[data-list-add="' + value + '"]');
  if (block.style.display === 'none') {
    block.style.display = 'block';
  } else {
    block.style.display = 'none';
  }
}

function hideBlock(element) {
  var block = element.closest('.addtomain');
  block.style.display = 'none';
}

// Переключение страниц
function showChat() {
  document.getElementById('main').style.display = 'none';
  document.getElementById('histor').style.display = 'none';
  document.getElementById('chat').style.display = 'block';
}

function showHome() {
  document.getElementById('chat').style.display = 'none';
  document.getElementById('histor').style.display = 'none';
  document.getElementById('main').style.display = 'block';
}

function showBookmarks() {
  document.getElementById('main').style.display = 'none';
  document.getElementById('chat').style.display = 'none';
  document.getElementById('histor').style.display = 'block';
}