const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

// Масив об'єктів з інформацією про книги
const books = [
  { title: 'Я бачу, вас цікавить пітьма', author: 'Джон Марс', category: 'Детективи', cover: 'photo/Я%20бачу,%20вас%20цікавить%20пітьма.jpg', price: 500 },
  { title: 'Двір крил і руїн', author: 'Сара Дж. Маас', category: 'Фентезі', cover: 'photo/Двір%20крил%20і%20руїн.jpg', price: 460 },
  { title: 'Атомні звички', author: 'Джеймс Клір', category: 'Психологія', cover: 'photo/Атомні%20звички.jpg', price: 375 },
  // Додайте інші книги зі своєї бази даних
];

// Функція для відображення результатів пошуку
function displaySearchResults(results) {
  searchResults.innerHTML = '';
  if (results.length === 0) {
    searchResults.innerHTML = '<p>Нічого не знайдено</p>';
  } else {
    results.forEach(book => {
      const bookElement = document.createElement('div');
      bookElement.classList.add('book-item');
      bookElement.innerHTML = `
        <img src="${book.cover}" alt="${book.title}">
        <div class="book-details">
          <h3>${book.title}</h3>
          <p>Автор: ${book.author}</p>
          <p>Ціна: ${book.price} грн</p>
        </div>
      `;
      searchResults.appendChild(bookElement);
    });
  }
}

// Функція для пошуку книг
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

// Показуємо/приховуємо вікно пошуку залежно від наявності введеного тексту
searchInput.addEventListener('input', () => {
  if (searchInput.value.trim() !== '') {
    searchResults.classList.add('show');
    performSearch();
  } else {
    searchResults.classList.remove('show');
    searchResults.innerHTML = '';
  }
});

// Приховуємо результати при кліку поза вікном пошуку
document.addEventListener('click', (event) => {
  if (!event.target.closest('.search-bar')) {
    searchResults.classList.remove('show');
  }
});
