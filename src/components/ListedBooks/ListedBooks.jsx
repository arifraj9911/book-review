import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useLoaderData } from "react-router-dom";
import {
  getStoredReadBook,
  getStoredWishlistBook,
} from "../../utility/localStorage";
import ReadBooks from "../ReadBooks/ReadBooks";
import WishListBooks from "../WishListBooks/WishListBooks";
const ListedBooks = () => {
  const books = useLoaderData();
  const [sortName, setSortName] = useState("Sort By");

  const [readBooks, setReadBooks] = useState([]);
  const [wishlistBooks, setWishlistBooks] = useState([]);
  // console.log(books)
  useEffect(() => {
    const storedBookId = getStoredReadBook();
    const storedWishlistId = getStoredWishlistBook();
    if (books.length > 0) {
      const readBookApplied = books.filter((book) =>
        storedBookId.includes(book.bookId)
      );
      const wishBookApplied = books.filter((book) =>
        storedWishlistId.includes(book.bookId)
      );
      setReadBooks(readBookApplied);
      setWishlistBooks(wishBookApplied);
    }
  }, []);

  const handleSortItem = (target) => {
    console.log(target);
    if (target === 1) {
      setSortName("Rating");
      const result = [...readBooks].sort((a, b) => b.rating - a.rating);
      setReadBooks(result);
    } else if (target === 2) {
      setSortName("Number of Pages");
      const result = [...readBooks].sort((a, b) => b.totalPages - a.totalPages);
      setReadBooks(result);
    } else if (target === 3) {
      setSortName("Published Year");
      const result = [...readBooks].sort(
        (a, b) => b.yearOfPublishing - a.yearOfPublishing
      );
      setReadBooks(result);
    }
  };
  return (
    <div>
      <h2 className="text-[28px] bg-[#1313130D] p-8 text-center">Books</h2>
      <div className="dropdown dropdown-bottom flex justify-center mt-8 ">
        <div
          tabIndex={0}
          role="button"
          className="btn m-1 bg-[#23BE0A] text-white"
        >
          <span>{sortName && sortName}</span>
          <span>
            <IoIosArrowDown />
          </span>
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li onClick={() => handleSortItem(1)}>
            <a>Rating</a>
          </li>
          <li onClick={() => handleSortItem(2)}>
            <a>Number of Pages</a>
          </li>
          <li onClick={() => handleSortItem(3)}>
            <a>Published Year</a>
          </li>
        </ul>
      </div>
      <div role="tablist" className="tabs tabs-lifted mt-24">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Read Books"
          checked
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          <div className="flex flex-col gap-6">
            {readBooks.map((book) => (
              <ReadBooks key={book.bookId} book={book}></ReadBooks>
            ))}
          </div>
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Wishlist Books"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          <div className="flex flex-col gap-5">
            {wishlistBooks.map((book) => (
              <WishListBooks key={book.bookId} book={book}></WishListBooks>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
