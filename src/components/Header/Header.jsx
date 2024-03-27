import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const menuLink = (
    <>
      <li className="text-sm lg:text-lg font-normal text-[#131313CC]">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="text-sm lg:text-lg font-normal text-[#131313CC]">
        <NavLink to="/listed-books">Listed Books</NavLink>
      </li>
      <li className="text-sm lg:text-lg font-normal text-[#131313CC]">
        <NavLink to="/pages-read">Pages To Read</NavLink>
      </li>
    </>
  );
  return (
    <nav className="mb-14 mt-8">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden pr-2 pl-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuLink}
            </ul>
          </div>
          <a className="btn btn-ghost pl-0 text-xl lg:text-[28px] font-bold">
            Books House
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menuLink}</ul>
        </div>
        <div className="navbar-end gap-2 lg:gap-3 w-3/5">
          <a className="btn bg-[#23BE0A] text-xs lg:text-lg text-white w-[80px] lg:w-28">
            Sign In
          </a>
          <a className="btn bg-[#59C6D2] text-xs lg:text-lg text-white w-[85px]  lg:w-28">
            Sign Out
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
