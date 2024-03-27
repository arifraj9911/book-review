import { Link } from "react-router-dom";
import bannerImg from "../../assets/Images/banner.png";

const Banner = () => {
  return (
    <div className="bg-[#1313130D] flex items-center justify-center p-20 gap-20">
      <div className="w-1/2">
        <h1 className="text-[56px] mb-12 playfair-display">
          Books to freshen up your bookshelf
        </h1>
        <Link to="/listed-books">
          <button className="btn btn-accent">View The List</button>
        </Link>
      </div>
      <div>
        <img src={bannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
