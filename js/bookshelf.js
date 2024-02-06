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
  const url = "http://localhost:5000/booklist";

  fetch(url)
    .then(function (response) {
      if (response.ok) {
        return response;
      } else if (response.status == 401) {
        window.location.href = "./";
      } else {
        console.log(response);
      }
    })
    .then(response => response.json())
    .then(data => {
      showBooklist(data);
    })
    .catch(function (error) {
      console.log(error);
    });

}

/**
 * deletes a book
 * @param event  the click-event
 */
function deleteBook(event) {
  const button = event.target;
  const bookUUID = button.getAttribute("data-bookuuid");

  const url = "http://localhost:5000/book/" + bookUUID;

  fetch(url,
    {
      method: "DELETE"
    })
    .then(function (response) {
      if (response.ok) {
        window.location.href = "./bookshelf.html";
      } else {
        console.log(response);
      }
    })
    .catch(function (error) {
      console.log(error);
    });



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
    button.setAttribute("data-bookuuid", book.book_uuid);
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
    button.setAttribute("data-bookuuid", book.book_uuid);
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


