let previousActiveElement = null;

document.querySelectorAll('ul li').forEach(li => {
  li.addEventListener('click', () => {
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
    // Изменяем цвет иконки
    li.querySelector('ion-icon').style.color = '#d87700';
    // Изменяем стиль span
    li.querySelector('.span').style.backgroundColor = '#d87700';
    li.querySelector('.span').style.width = '19px';
    li.querySelector('.span').style.height = '3.4px';

    // Обновляем предыдущий активный элемент
    previousActiveElement = li;
  });
});


document.querySelectorAll('mm li').forEach(li => {
  li.addEventListener('click', () => {
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
    // Изменяем цвет иконки
    li.querySelector('ion-icon').style.color = '#d87700';
    // Изменяем стиль span
    li.querySelector('.span').style.backgroundColor = '#d87700';
    li.querySelector('.span').style.width = '19px';
    li.querySelector('.span').style.height = '3.4px';

    // Обновляем предыдущий активный элемент
    previousActiveElement = li;
  });
});






function changeCard(cardId) {
  // Получение всех блоков с классом "maincard"
  var cards = document.getElementsByClassName('maincard');

  // Получение всех кнопок с классом "filtr-btn"
  var buttons = document.getElementsByClassName('filtr-btn');

  // Загрузка состояния активных кнопок и отображаемых блоков из локального хранилища
  var activeCardId = localStorage.getItem('activeCardId');

  // Цикл по всем блокам
  for (var i = 0; i < cards.length; i++) {
      // Если идентификатор текущего блока равен идентификатору активной карточки
      if (cards[i].id === cardId) {
          // Изменяем стиль на display:block
          cards[i].style.display = 'block';

          // Активируем кнопку
          buttons[i].classList.add('active');
      } else {
          // Иначе изменяем стиль на display:none
          cards[i].style.display = 'none';

          // Деактивируем кнопку
          buttons[i].classList.remove('active');
      }
  }

  // Сохранение состояния активных кнопок и отображаемых блоков в локальное хранилище
  localStorage.setItem('activeCardId', cardId);
}

// Запуск функции changeCard с идентификатором активной карточки из локального хранилища
changeCard(localStorage.getItem('activeCardId'));




const searchContainer = document.querySelector('.search-container');
const inputField = searchContainer.querySelector('input[type="search"]');

inputField.addEventListener('input', function() {
  const searchTerm = this.value.trim().toLowerCase();

  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    // Получаем значение атрибута data-name
    const name = card.querySelector('[data-name]').dataset.name.toLowerCase();

    // Проверяем, содержит ли значение data-name поисковый запрос
    if (name.includes(searchTerm)) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  });
});







const cards = document.querySelectorAll('.card');
const mainpage = document.querySelector('.mainpage');

cards.forEach((card) => {
  card.addEventListener('click', () => {
    // Ваш текущий код для открытия и закрытия карточек
    const targetCard = card;
    const targetOpenedCard = document.querySelector(
      `.card-opened[data-opened="${targetCard.dataset.open}"]`
    );

    targetOpenedCard.classList.toggle('hidden');

    // Добавление функциональности для скрытия mainpage
    if (mainpage.style.display === 'block') {
      mainpage.style.display = 'none';
    }
  });
});

const backarrows = document.querySelectorAll('.backarrow');

backarrows.forEach((backarrow) => {
  backarrow.addEventListener('click', () => {
    const targetCardOpened = backarrow.closest('.card-opened');

    if (targetCardOpened.classList.contains('hidden')) {
      targetCardOpened.classList.remove('hidden');
    }

    // Добавление функциональности для скрытия mainpage
    if (mainpage.style.display === 'none') {
      mainpage.style.display = 'block';
    }
  });
});




// Для кнопки авторизации и регистрации



function showAuthForm() {
  document.getElementById("auth-form").style.display = "flex";
  document.querySelector('.register').style.display = "none";
}

function hideAuthForm() {
  document.getElementById("auth-form").style.display = "none";
  document.querySelector('.register').style.display = "flex";
}

document.getElementById('register-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting normally

  // Get form data
  var formData = new FormData(event.target);

  // Send a request to register.php using AJAX
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'register.php');
  xhr.onload = function() {
    if (xhr.status === 200) {
      // Registration successful, hide the register form and show the auth form
      document.querySelector('.register').style.display = 'none';
      document.querySelector('.auth').style.display = 'flex';
    } else {
      // Registration failed, show an error message
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



// Для кнопки открытия фильтров


function toggleFilterSort() {
  const filterBtn = document.getElementById('filter-btn');
  if (filterBtn.classList.contains('active')) {
    filterBtn.classList.remove('active');
  } else {
    filterBtn.classList.add('active');
  }
}

function toggleFilterSort() {
  var filterSort = document.getElementById("filter-sort");
  if (filterSort.style.display === "block") {
    filterSort.style.display = "none";
  } else {
    filterSort.style.display = "block";
  }
}


// Для выбора серий и сезонов


function toggleListSort() {
  const listBtn = document.getElementById('list-btn');
  if (listBtn.classList.contains('active')) {
    listBtn.classList.remove('active');
  } else {
    listBtn.classList.add('active');
  }
}

function toggleListSort() {
  var listSort = document.getElementById("list-sort");
  if (listSort.style.display === "block") {
    listSort.style.display = "none";
  } else {
    listSort.style.display = "block";
  }
}


// Для выбора сезонов и серий

function toggleSeasonSort() {
  const seasonBtn = document.getElementById('season-btn');
  if (seasonBtn.classList.contains('active')) {
    seasonBtn.classList.remove('active');
  } else {
    seasonBtn.classList.add('active');
  }
}

function toggleSeasonSort() {
  var seasonSort = document.getElementById("season-sort");
  if (seasonSort.style.display === "block") {
    seasonSort.style.display = "none";
  } else {
    seasonSort.style.display = "block";
  }
}


// Для Рейтинга 

function filterCards(janr) {
  var activeGenres = [];

  // Проверяем, есть ли уже активный жанр
  var activeJanr = $('.fbtna.active').data('janr');
  if (activeJanr) {
    activeGenres.push(activeJanr);
  }

  // Если нажатый жанр уже активен, удаляем его из фильтра
  if (activeGenres.includes(janr)) {
    $('.fbtna[data-janr="' + janr + '"]').removeClass('active');
    activeGenres = activeGenres.filter(function(genre) {
      return genre !== janr;
    });
  } else {
    // Иначе добавляем жанр в фильтр
    $('.fbtna[data-janr="' + janr + '"]').addClass('active');
    activeGenres.push(janr);
  }

  // Фильтруем блоки
  $('.card').each(function() {
    var card = $(this);
    var cardGenres = $(this).find('[data-janr]').map(function() {
      return $(this).data('janr');
    }).get();

    // Проверяем, есть ли хотя бы один активный жанр у блока
    var isVisible = activeGenres.length === 0 || cardGenres.some(function(genre) {
      return activeGenres.includes(genre);
    });

    card.toggleClass('visible', isVisible);
  });
}

// Применяем фильтр при загрузке страницы
filterCards();


const ratingElements = document.querySelectorAll('.ml-rating');

ratingElements.forEach((element) => {
  const rating = element.getAttribute('data-rating');
  element.textContent = rating;
});


// Изменение стиля для окна доавления в
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



