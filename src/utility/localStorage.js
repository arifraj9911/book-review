const getStoredReadBook = () => {
  const storedReadBook = localStorage.getItem("read-list");
  if (storedReadBook) {
    return JSON.parse(storedReadBook);
  }
  return [];
};
const getStoredWishlistBook = () => {
  const storedWishlistBook = localStorage.getItem("wish-list");
  if (storedWishlistBook) {
    return JSON.parse(storedWishlistBook);
  }
  return [];
};

const savedReadBook = (id) => {
  const storedReadBook = getStoredReadBook();
  const existsReadBook = storedReadBook.find((bookId) => bookId === id);
  if (!existsReadBook) {
    storedReadBook.push(id);
    localStorage.setItem("read-list", JSON.stringify(storedReadBook));
  }
};

const savedWishlistBook = (id) => {
  const storedWishlistBook = getStoredWishlistBook();
  const existsWishBook = storedWishlistBook.find((bookId) => bookId === id);
  if (!existsWishBook) {
    storedWishlistBook.push(id);
    localStorage.setItem("wish-list", JSON.stringify(storedWishlistBook));
  }
};

export {
  getStoredReadBook,
  getStoredWishlistBook,
  savedReadBook,
  savedWishlistBook,
};
