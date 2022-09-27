import addBookToDom from './addBookToDom.js';

export default function displaySavedBooks () {
  const allBooks = JSON.parse (localStorage.getItem ('allBooks'));
  Array.from (allBooks).forEach (book => {
    addBookToDom (book);
  });
}
