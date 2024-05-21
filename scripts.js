// Масив з даними про книги
const books = [
  { title: "Я бачу, вас цікавить пітьма", author: "Ілларіон Павлюк", link: "categoriess/detective/isee.html" },
  { title: "Таємна історія", author: "Донна Тарт", link: "categoriess/detective/secret.html" },
  { title: "Зелена миля", author: "Стівен Кінг", link: "categoriess/detective/green.html" },
  { title: "Двір крил і руїн", author: "Сара Маас", link: "categoriess/fantasy/courtyardofwingsandruins.html" }
];

function performSearch() {
  const searchTerm = document.getElementById('searchInput').value.toLowerCase();
  const resultsContainer = document.getElementById('searchResults');
  resultsContainer.innerHTML = '';

  if (searchTerm.trim() === '') {
    return;
  }

  let resultsFound = false;

  for (const book of books) {
    const title = book.title.toLowerCase();
    const author = book.author.toLowerCase();

    if (title.includes(searchTerm) || author.includes(searchTerm)) {
      resultsFound = true;

      const bookElement = document.createElement('div');
      bookElement.innerHTML = `
        <a href="${book.link}">
          <h3>${book.title}</h3>
          <p>Автор: ${book.author}</p>
        </a>
      `;

      resultsContainer.appendChild(bookElement);
    }
  }

  if (!resultsFound) {
    const notFoundElement = document.createElement('p');
    notFoundElement.textContent = 'Нічого не знайдено.';
    resultsContainer.appendChild(notFoundElement);
  }
}