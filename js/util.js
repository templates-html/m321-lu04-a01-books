/**
 * utility functions for multiple pages
 *
 * @author  Marcel Suter
 * @since   2022-05-30
 * @version 1.0
 */

/**
 * get the value of an url parameter identified by key
 * source: https://www.sitepoint.com/get-url-parameters-with-javascript/
 * @param key  the key to be searched
 * @returns values as a String or null
 */
function getQueryParam(key) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  return urlParams.get(key);
}

/**
 * shows an information or error message
 * @param text  the message text
 * @param type  the message type (info, warning, error)
 */
function showMessage(text, type) {
  const field = document.getElementById("message");
  field.className = type;
  field.innerText = text;
}

/**
 * shows the navigation
 * @param userRole
 */
function showNav(userRole) {
  const navbar = document.getElementById("nav");
  let text = "<ul>";
  if (!userRole || userRole === "guest") {
    text += "<li><a href='./index.html'>Anmelden</a></li>";
  } else {
    text += "<li><a href='./bookshelf.html'>Bücher</a></li>" +
      "<li><a href='./publisherlist.html'>Verlage</a></li>" +
      "<li><a href='./authorlist.html'>Autoren</a></li>" +
      "<li><a href='./index.html'>Abmelden</a></li>";

  }
  text += "<li id='message' style='color: red;'></li>" +
    "</ul>";
  navbar.innerHTML = text;
}