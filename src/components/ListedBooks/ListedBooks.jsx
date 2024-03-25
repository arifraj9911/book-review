import { IoIosArrowDown } from "react-icons/io";
const ListedBooks = () => {
  return (
    <div>
      <h2 className="text-[28px] bg-[#1313130D] p-8 text-center">Books</h2>
      <div className="dropdown dropdown-bottom flex justify-center mt-8 ">
        <div
          tabIndex={0}
          role="button"
          className="btn m-1 bg-[#23BE0A] text-white"
        >
          Sort By
          <span>
            <IoIosArrowDown />
          </span>
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      </div>
      <div role="tablist" className="tabs tabs-lifted mt-24">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Tab 1"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
            
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Tab 2"
          checked
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >

        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
