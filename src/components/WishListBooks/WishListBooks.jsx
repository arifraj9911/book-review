import PropTypes from "prop-types";
import { ImLocation2 } from "react-icons/im";
import { IoPeople } from "react-icons/io5";
import { MdOutlineContactPage } from "react-icons/md";

const WishListBooks = ({ book }) => {
  const {
    bookName,
    author,
    image,
    rating,
    category,
    tags,
    publisher,
    totalPages,
    yearOfPublishing,
  } = book;
  return (
    <div className="flex flex-col lg:flex-row gap-6 items-center border-2 p-4 lg:p-6 rounded-xl">
      <div className="w-full lg:w-1/4 rounded-xl  bg-[#1313130D] py-7 px-10 flex justify-center items-center">
        <img className="lg:w-4/5 " src={image} alt="" />
      </div>
      <div className="lg:w-3/4">
        <h2 className="text-2xl font-bold mb-4">{bookName}</h2>
        <span className="text-[#131313CC] text-[16px] font-medium">
          By: {author}
        </span>
        <div className="mt-6 mb-5 flex flex-col lg:flex-row gap-4">
          <span>
            <span className="font-bold text-[16px] mr-4">Tag</span>
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="mr-4 bg-[#23BE0A0D] px-4 py-2 text-[#23BE0A] rounded-[30px]"
              >
                #{tag}
              </span>
            ))}
          </span>
          <span className="">
            <span className="font-normal text-[16px] text-[#131313CC] flex items-center gap-1">
              {" "}
              <span>
                <ImLocation2 />
              </span>{" "}
              Year of Publishing: {yearOfPublishing}
            </span>
          </span>
        </div>
        <div className="text-[#13131399] font-normal flex-col lg:flex-row text-[16px] flex gap-5">
          <span className="flex items-center gap-2">
            {" "}
            <span>
              <IoPeople />
            </span>{" "}
            Publisher: {publisher}
          </span>
          <span className="flex items-center gap-2">
            {" "}
            <span>
              <MdOutlineContactPage />
            </span>{" "}
            Pages {totalPages}
          </span>
        </div>
        <hr className="my-5" />
        <div className="flex flex-col text-center lg:flex-row gap-4 lg:gap-2">
          <span className="mr-4 bg-[#328EFF26] px-4 py-2 text-[#328EFF] rounded-[30px]">
            Category: {category}
          </span>
          <span className="mr-4 bg-[#FFAC3326] px-4 py-2 text-[#FFAC33] rounded-[30px]">
            Ratings: {rating}
          </span>
          <span className="mr-4 bg-[#23BE0A] px-4 py-2 text-[#FFFFFF] rounded-[30px]">
            View Details
          </span>
        </div>
      </div>
    </div>
  );
};

WishListBooks.propTypes = {
  book: PropTypes.object,
};

export default WishListBooks;
