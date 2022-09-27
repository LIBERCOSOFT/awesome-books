import addBookToDom from './addBookToDom.js';

const displaySavedBooks = () => {
  const allBooks = JSON.parse (localStorage.getItem ('allBooks'));
  Array.from (allBooks).forEach (book => {
    addBookToDom (book);
  });
};

export default displaySavedBooks;
