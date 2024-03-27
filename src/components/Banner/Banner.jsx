import { Link } from "react-router-dom";
import bannerImg from "../../assets/Images/banner.png";

const Banner = () => {
  return (
    <div className="bg-[#1313130D] rounded-3xl flex flex-col-reverse lg:flex-row items-center justify-center px-4 py-8 lg:p-20 gap-8 lg:gap-20">
      <div className="lg:w-1/2">
        <h1 className="text-3xl lg:text-[56px] font-bold lg:leading-[84px] mb-6 lg:mb-12 playfair-display">
          Books to freshen up your bookshelf
        </h1>
        <Link to="/listed-books">
          <button className=" bg-[#23BE0A] text-sm lg:text-xl font-bold rounded-lg text-white px-7 py-5">View The List</button>
        </Link>
      </div>
      <div>
        <img className="w-3/4 lg:w-full mx-auto" src={bannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
