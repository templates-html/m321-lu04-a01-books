/**
 * view-controller for bookshelf.html
 * @author Marcel Suter
 */

document.addEventListener("DOMContentLoaded", () => {
  showNav();
  readBooks();
});

/**
 * reads all books
 */
function readBooks() {
  // TODO call webservice
  const books = [
    {
      title: "Das Buch",
      author: "Beate Schreiber",
      price: 9.99,
      isbn: "978-3-12-732320-7"
    },
    {
      title: "Papier mit Buchstaben",
      author: "Jean Jean",
      price: 2.34,
      isbn: "978-3-12-732322-6"
    }, {
      title: "Auch ein Buch",
      author: "Hans Tipper",
      price: 19.99,
      isbn: "978-3-12-732321-8"
    }
  ]
  showBooklist(books);

}

/**
 * deletes a book
 * @param event  the click-event
 */
function deleteBook(event) {
  const button = event.target;
  const bookUUID = button.getAttribute("data-bookuuid");

  // TODO call webservice

  window.location.href = "./bookshelf.html";

}

/**
 * shows the booklist as a table
 * @param data  the books
 */
function showBooklist(data) {
  let tBody = document.getElementById("booklist");
  tBody.innerHTML = "";
  data.forEach(book => {
    let row = tBody.insertRow(-1);

    let button = document.createElement("button");
    button.innerHTML = "&#9998;";

    button.type = "button";
    button.name = "editBook";
    button.setAttribute("data-bookuuid", book.bookUUID);
    button.addEventListener("click", editBook);
    row.insertCell(-1).appendChild(button);

    row.insertCell(-1).innerHTML = book.title;
    row.insertCell(-1).innerHTML = book.author;
    row.insertCell(-1).innerHTML =
      book.price.toLocaleString("de-CH", {
        style: "currency",
        currency: "CHF",
        maximumFractionDigits: 2,
        minimumFractionDigits: 2
      });
    row.insertCell(-1).innerHTML = book.isbn;

    button = document.createElement("button");
    button.innerHTML = "&#128465;";
    button.type = "button";
    button.name = "deleteBook";
    button.setAttribute("data-bookuuid", book.bookUUID);
    button.addEventListener("click", deleteBook);
    row.insertCell(-1).appendChild(button);

  });

  document.getElementById("addButton").innerHTML = "<a href='./bookedit.html'>Neues Buch</a>";
}

/**
 * redirects to the edit-form
 * @param event  the click-event
 */
function editBook(event) {
  const button = event.target;
  const bookUUID = button.getAttribute("data-bookuuid");
  window.location.href = "./bookedit.html?uuid=" + bookUUID;
}


