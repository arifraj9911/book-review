import PropTypes from "prop-types";

const Book = ({ book }) => {
  const { bookName, author, image, rating, category, tags } = book;
  return (
    <div className=" border-2 p-6 rounded-xl">
      <div className="bg-[#F3F3F3] p-20 rounded-xl">
        <img src={image} alt="" />
      </div>
      <div className="my-6">
        {tags.map((tag, idx) => (
          <span
            key={idx}
            className="mr-4 bg-[#23BE0A0D] px-4 py-2 text-[#23BE0A] rounded-[30px]"
          >
            {tag}
          </span>
        ))}
      </div>
      <h2 className="text-2xl font-bold mb-4">{bookName}</h2>
      <p className="text-[#131313CC] text-[16px] font-medium">By: {author}</p>
      <hr className="my-5" />
      <div className="flex justify-between text-[#131313CC] text-[16px] font-medium">
        <div>
          <span>{category}</span>
        </div>
        <div>
          <span>{rating}</span>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.object,
};

export default Book;
