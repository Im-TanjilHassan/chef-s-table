import { FaRegUserCircle } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { MdFastfood } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";

const NavBar = () => {
  return (
    <div className="mb-10">
      <div className="flex justify-around items-center">
        <div className="flex justify-between items-center w-full px-5 lg:w-auto lg:px-0">
          <div className="flex items-center">
            <MdFastfood className="text-[#7951ff] text-2xl lg:text-3xl" />
            <h2 className="text-2xl lg:text-3xl text-[#7951ff] font-bold">
              Recipe Calories
            </h2>
          </div>
          <div className="lg:hidden">
            <IoMdMenu  className="text-2xl"/>
          </div>
        </div>
        <ul className="hidden lg:flex justify-between items-center space-x-10">
          <li className="font-bold transition ease-in-out delay-70 hover:-translate-y-1 hover:scale-110 hover:text-[#7951ff] duration-290">
            <a href="">Home</a>
          </li>
          <li className="font-bold transition ease-in-out delay-70 hover:-translate-y-1 hover:scale-110 hover:text-[#7951ff] duration-290">
            <a href="">Recipes</a>
          </li>
          <li className="font-bold transition ease-in-out delay-70 hover:-translate-y-1 hover:scale-110 hover:text-[#7951ff] duration-290">
            <a href="">About</a>
          </li>
          <li className="font-bold transition ease-in-out delay-70 hover:-translate-y-1 hover:scale-110 hover:text-[#7951ff] duration-290">
            <a href="">Services</a>
          </li>
        </ul>
        <div className="hidden lg:flex items-center space-x-8">
          <input
            type="text"
            className="font-bold border border-black rounded-2xl px-3 py-1 relative"
            placeholder="Search"
          />
          <a href="#" className="bg-[#8872ff] p-2 rounded-full">
            <a href="">
              <IoIosSearch className="absolute right-52 top-8 text-gray-500" />
            </a>
            <FaRegUserCircle title="Profile" className="text-2xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
