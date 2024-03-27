import { toast } from "react-toastify";
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
    toast.success("books added to the read list");
    storedReadBook.push(id);
    localStorage.setItem("read-list", JSON.stringify(storedReadBook));
  } else {
    toast.error("books already added to the read list");
  }
};

const savedWishlistBook = (id) => {
  const storedWishlistBook = getStoredWishlistBook();
  const existsWishBook = storedWishlistBook.find((bookId) => bookId === id);
  const storedReadBook = getStoredReadBook();
  const existsReadBook = storedReadBook.find((bookId) => bookId === id);
  if (!existsReadBook) {
    if (!existsWishBook) {
      toast.success("books added to the wishlist");
      storedWishlistBook.push(id);
      localStorage.setItem("wish-list", JSON.stringify(storedWishlistBook));
    } else {
      toast.error("books already added to the wishlist");
    }
  } else {
    toast.error("books already added to the read list");
  }
};

export {
  getStoredReadBook,
  getStoredWishlistBook,
  savedReadBook,
  savedWishlistBook,
};
