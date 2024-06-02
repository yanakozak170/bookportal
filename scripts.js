const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

// Отримати базовий шлях поточного місцезнаходження сторінки
const currentPath = window.location.pathname;

// Видалити останній сегмент шляху (назву файлу)
const basePath = currentPath.substring(0, currentPath.lastIndexOf('/bookportal/') + 12);

const books = [
  { title: 'Я бачу, вас цікавить пітьма', author: 'Джон Марс', category: 'Детективи', cover: 'photo/Я%20бачу,%20вас%20цікавить%20пітьма.jpg', price: 500, link: 'categoriess/detective/isee.html' },
  { title: 'Таємна історія', author: 'Донна Тартт', category: 'Детективи', cover: 'photo/Таємна%20історія.jpg', price: 450, link: 'categoriess/detective/secret.html' },
  { title: 'Зелена миля', author: 'Стівен Кінг', category: 'Детективи', cover: 'photo/Зелена%20миля.jpg', price: 400, link: 'categoriess/detective/green.html' },
  { title: 'Двір крил і руїн', author: 'Сара Дж. Маас', category: 'Фентезі', cover: 'photo/Двір%20крил%20і%20руїн.jpg', price: 460, link: 'categoriess/fantasy/courtyardofwingsandruins.html' },
  { title: 'Танець недоумка', author: 'Ілларіон Павлюк', category: 'Фентезі', cover: 'photo/Танець%20недоумка.jpg', price: 405, link: 'categoriess/fantasy/thedanceisstupid.html' },
  { title: 'Месія Дюни', author: 'Френк Герберт', category: 'Фентезі', cover: 'photo/Месія%20Дюни.jpg', price: 450, link: 'categoriess/fantasy/messiahDune.html' },
  { title: 'Задивляюсь у твої зіниці', author: 'Василь Симоненко', category: 'Поезія', cover: 'photo/Задивляюсь%20у%20твої%20зіниці.jpg', price: 320, link: 'categoriess/poetry/lookintoyourpupils.html' },
  { title: 'Молоко і мед', author: 'Рупі Каур', category: 'Поезія', cover: 'photo/Молоко%20і%20мед.jpg', price: 290, link: 'categoriess/poetry/milkandhoney.html' },
  { title: 'Гора і квітка', author: 'Микола Воробйов', category: 'Поезія', cover: 'photo/Гора%20і%20квітка.jpg', price: 290, link: 'categoriess/poetry/mountainandflower.html' },
  { title: 'Атомні звички', author: 'Джеймс Клір', category: 'Психологія', cover: 'photo/Атомні%20звички.jpg', price: 375, link: 'categoriess/psychology/atomni.html' },
  { title: 'Стіни в моїй голові', author: 'Світлана Алексієвич', category: 'Психологія', cover: 'photo/Стіни%20в%20моїй%20голові.png', price: 275, link: 'categoriess/psychology/wallsinmyhead.html' },
  { title: 'Мистецтво говорити', author: 'Дейл Карнегі', category: 'Психологія', cover: 'photo/Мистецтво%20говорити.jpg', price: 350, link: 'categoriess/psychology/artofspeaking.html' },
  { title: 'Залишся, якщо кохаєш', author: 'Пенелопа Ворд', category: 'Романтика', cover: 'photo/Залишся,%20якщо%20кохаєш.jpg', price: 330, link: 'categoriess/romance/iflove.html' },
  { title: 'Панк 57', author: 'Пенелопа Дуглас', category: 'Романтика', cover: 'photo/Панк%2057.jpg', price: 350, link: 'categoriess/romance/pank.html' },
  { title: 'Гіпотеза кохання', author: 'Алі Гейзелвуд', category: 'Романтика', cover: 'photo/Гіпотеза%20кохання.jpg', price: 320, link: 'categoriess/romance/hypothesis.html' },
  { title: 'Кафе на краю світу', author: 'Джон Стрелецький', category: 'Саморозвиток, мотивація', cover: 'photo/Кафе%20на%20краю%20світу.jpg', price: 180, link: 'categoriess/self-development/cafe.html' },
  { title: 'Думай і багатій', author: 'Наполеон Гілл', category: 'Саморозвиток, мотивація', cover: 'photo/Думай%20і%20багатій.jpg', price: 320, link: 'categoriess/self-development/think.html' },
  { title: 'Приборкати страх', author: 'Сьюзен Джефферс', category: 'Саморозвиток, мотивація', cover: 'photo/Приборкати%20страх.jpg', price: 280, link: 'categoriess/self-development/tamefear.html' },
  { title: 'Не озирайся і мовчи', author: 'Макс Кідрук', category: 'Трилери, жахи', cover: 'photo/Не%20озирайся%20і%20мовчи.jpg', price: 280, link: 'categoriess/thriller-horror/dontlookback.html' },
  { title: 'Білий попіл', author: 'Ілларіон Павлюк', category: 'Трилери, жахи', cover: 'photo/Білий%20попіл.jpg', price: 245, link: 'categoriess/thriller-horror/whiteash.html' },
  { title: 'Служниця', author: 'Фіона Бартон', category: 'Трилери, жахи', cover: 'photo/Служниця.png', price: 320, link: 'categoriess/thriller-horror/maid.html' }
];

// Функція для динамічного створення посилання на книгу з урахуванням базового шляху
function createDynamicBookLink(relativePath) {
  // Переконайтеся, що шлях є відносним до базової директорії
  if (relativePath.startsWith('categoriess/')) {
    return `${basePath}${relativePath}`;
  } else {
    return relativePath;
  }
}

// Функція для динамічного створення шляху до фотографії з урахуванням базового шляху
function createDynamicPhotoPath(relativePath) {
  // Переконайтеся, що шлях є відносним до базової директорії
  if (relativePath.startsWith('photo/')) {
    return `${basePath}${relativePath}`;
  } else {
    return relativePath;
  }
}

function displaySearchResults(results) {
  searchResults.innerHTML = '';
  if (results.length === 0) {
    searchResults.innerHTML = '<p>Нічого не знайдено</p>';
  } else {
    results.forEach(book => {
      const bookElement = document.createElement('div');
      bookElement.classList.add('book-item');
      bookElement.innerHTML = `
        <div>
          <img src="${createDynamicPhotoPath(book.cover)}" alt="${book.title}">
          <div class="book-details">
            <h3>${book.title}</h3>
            <p>Автор: ${book.author}</p>
            <p>Ціна: ${book.price} грн</p>
          </div>
        </div>
      `;
      bookElement.addEventListener('click', () => {
        window.location.href = createDynamicBookLink(book.link);
      });
      searchResults.appendChild(bookElement);
    });
  }
}

function performSearch() {
  const searchTerm = searchInput.value.toLowerCase();
  const results = books.filter(book => {
    const title = book.title.toLowerCase();
    const author = book.author.toLowerCase();
    const category = book.category.toLowerCase();
    return title.includes(searchTerm) || author.includes(searchTerm) || category.includes(searchTerm);
  });
  displaySearchResults(results);
}

searchInput.addEventListener('input', () => {
  if (searchInput.value.trim() !== '') {
    searchResults.classList.add('show');
    performSearch();
  } else {
    searchResults.classList.remove('show');
  }
});

document.addEventListener('click', (event) => {
  if (!searchResults.contains(event.target) && event.target !== searchInput) {
    searchResults.classList.remove('show');
  }
});

function addToCart(book) {
  let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  cartItems.push(book);
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
  alert('Книга додана до корзини');
}

// Отримання книг з кошика
function getCartItems() {
  return JSON.parse(localStorage.getItem('cartItems')) || [];
}

// Видалення книги з кошика
function removeFromCart(bookTitle) {
  let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  cartItems = cartItems.filter(item => item.title !== bookTitle);
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
  alert('Книгу видалено з корзини! Оновіть сторінку');
}

// Відображення книг у кошику
function calculateTotalPrice() {
  const cartItems = getCartItems();
  let totalPrice = 0;

  cartItems.forEach(item => {
    totalPrice += item.price;
  });

  return totalPrice;
}

// Функція, що відображає книгу в корзині
function displayCartItems() {
  const cartItems = getCartItems();
  const cartContent = document.querySelector('.cart-content');

  if (cartItems.length === 0) {
    cartContent.innerHTML = `
      <p style="font-size: 24px;">ВАШ КОШИК ПОРОЖНІЙ</p>
      <p>Не вагайтеся і перегляньте наш каталог, щоб знайти щось гарне для Вас!</p>
    `;
  } else {
    const totalPrice = calculateTotalPrice();
    cartContent.innerHTML = `
      ${cartItems.map(item => `
        <div class="cart-item">
          <a href="${item.link}"><img src="${item.cover}" alt="${item.title}"></a>
          <div class="cart-item-info">
            <a href="${item.link}"><h3>${item.title}</h3></a>
            <p>Автор: ${item.author}</p>
            <p>Ціна: ${item.price} грн</p>
            <button onclick="removeFromCart('${item.title}')">Видалити</button>
          </div>
        </div>
      `).join('')}
      <div class="cart-total">Загальна сума: ${totalPrice} грн</div>
      <button id="clearCartButton">Очистити корзину</button>
    `;

    const clearCartButton = document.getElementById('clearCartButton');
    clearCartButton.addEventListener('click', clearCart);
  }
}


// Додаємо слухача для завантаження сторінки корзини
window.addEventListener('DOMContentLoaded', (event) => {
  if (document.querySelector('.cart-content')) {
    displayCartItems();
  }
});

const orderButton = document.getElementById('oneClickOrderButton');
    const modal = document.getElementById('orderModal');
    const phonePrompt = document.getElementById('phonePrompt');
    const phoneNumberInput = document.getElementById('phoneNumber');
    const submitOrderButton = document.getElementById('submitOrderButton');
    const confirmationMessage = document.getElementById('confirmationMessage');

    orderButton.onclick = function() {
      modal.style.display = 'block';
    }

    function closeModal() {
      modal.style.display = 'none';
    }

    function submitOrder() {
      const phoneNumber = phoneNumberInput.value;
      if (phoneNumber) {
        phonePrompt.style.display = 'none';
        phoneNumberInput.style.display = 'none';
        submitOrderButton.style.display = 'none';
        confirmationMessage.style.display = 'block';
      } else {
        alert('Будь ласка, введіть номер телефону.');
      }
    }

    window.onclick = function(event) {
      if (event.target == modal) {
        closeModal();
      }
    }

function clearCart() {
  localStorage.removeItem('cartItems');
  displayCartItems();
}
document.getElementById('clearCartButton').addEventListener('click', clearCart);
