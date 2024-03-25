import { Link, useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
  const books = useLoaderData();
  const { bookId } = useParams();
  const bookInt = parseInt(bookId);
  const book = books.find((b) => b.bookId === bookInt);
  //   console.log(book);
  const {
    bookName,
    author,
    image,
    rating,
    category,
    tags,
    review,
    publisher,
    totalPages,
    yearOfPublishing,
  } = book;
  return (
    <div className="flex my-16 gap-12">
      <div className="bg-[#1313130D] p-16 flex justify-center items-center">
        <img src={image} alt="" />
      </div>
      <div className="w-3/5">
        <h1 className="text-[40px] font-bold mb-5">{bookName}</h1>
        <span className="text-xl font-medium text-[#131313CC]">
          By: {author}
        </span>
        <hr className="mt-5 mb-4" />
        <span className="text-xl font-medium">{category}</span>
        <hr className="mt-4 mb-6" />
        <span className="text-[16px]">
          {" "}
          <span className="font-bold">Review:</span> {review}
        </span>
        <div className="mt-12 mb-6">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="mr-4 bg-[#23BE0A0D] px-4 py-2 text-[#23BE0A] rounded-[30px]"
            >
              #{tag}
            </span>
          ))}
        </div>
        <hr className="my-6" />
        <div className="flex flex-col text-justify gap-3">
          <span className="flex justify-between w-1/3">
            Number of Pages:{" "}
            <span className="font-bold ml-6">{totalPages}</span>
          </span>
          <span className="flex justify-between w-1/3">
            Publisher: <span className="font-bold ml-6">{publisher}</span>
          </span>
          <span className="flex justify-between w-1/3">
            Year of Publishing:{" "}
            <span className="font-bold ml-6">{yearOfPublishing}</span>
          </span>
          <span className="flex justify-between w-1/3">
            Ratings: <span className="font-bold ml-6">{rating}</span>
          </span>
        </div>
        <div className="mt-8 flex gap-4">
          <Link to="/">
            <button className="btn btn-accent">Read</button>
          </Link>
          <Link to="/">
            <button className="btn btn-primary">Wishlist</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
