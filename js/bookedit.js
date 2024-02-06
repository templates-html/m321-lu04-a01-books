/**
 * view-controller for bookedit.html
 * @author Marcel Suter
 */

document.addEventListener("DOMContentLoaded", () => {
  showNav();
  const bookUUID = getQueryParam("uuid");
  if (bookUUID !== null) {
    readBook(bookUUID);
  } else {
    initBook();
  }

  document.getElementById("bookeditForm").addEventListener("submit", saveBook);
  document.getElementById("cancel").addEventListener("click", cancelEdit);
});

/**
 * saves the data of a book
 * @param event  the event that triggered the listener
 */
function saveBook(event) {
  event.preventDefault();  // prevent default submit
  showMessage("", "info");   // clear the old message
  const book = getFormData("bookeditForm");

  // TODO call the webservice
  showMessage("Buch gespeichert", "info");

}

/**
 * reads a book
 * @param bookUUID  the unique key of a book
 */
function readBook(bookUUID) {
  // TODO call the webservice
  const book = {
    title: "Das Buch",
    author: "Beate Schreiber",
    price: 9.95,
    isbn: "978-3-12-732320-7"
  };
  showBook(book);
}

/**
 * initialize an empty book
 */
function initBook() {
  const book = {
    title: "",
    author: "",
    price: 0,
    isbn: ""
  };
  showBook(book);
}

/**
 * show the data of a book
 * @param data  the book-data
 */
function showBook(data) {
  document.getElementById("bookUUID").value = data.book_uuid;
  document.getElementById("title").value = data.title;
  document.getElementById("author").value = data.author;
  document.getElementById("price").value = data.price;
  document.getElementById("isbn").value = data.isbn;

}

/**
 * redirects to the bookshelf
 * @param event  the click-event
 */
function cancelEdit(event) {
  window.location.href = "./bookshelf.html";
}