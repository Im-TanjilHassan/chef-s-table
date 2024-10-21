import NavBar from "./nav bar/NavBar";
import "./banner.css";

const Header = () => {
  return (
    <div className="mt-5">
      <NavBar></NavBar>
      <div className="banner bg-no-repeat bg-center bg-cover rounded-xl lg:p-10">
        <div className="h-full flex justify-center items-center">
          <div className="space-y-5">
            <h2 className="text-center text-2xl lg:text-4xl font-bold text-white lg:px-60">
              Discover an exceptional cooking class tailored for you!
            </h2>
            <p className="text-white text-center lg:px-60">
              Learn and Master Basic Programming, Data Structures, Algorithm,
              OOP, Database and solve 500+ coding problems to become an
              exceptionally well world-class Programmer.
            </p>
            <div className="lg:flex lg:justify-center lg:space-x-5 space-y-5 lg:space-y-0 mx-24  lg:mx-0">
              <button className="text-white bg-[#8872ff] hover:bg-[#7951ff] w-56 rounded-lg p-2 font-bold">
                Explore Now
              </button>
              <button className="text-white border border-[#8872ff] hover:border-[#7951ff] w-56 rounded-lg p-2 font-bold">
                Our Feedback
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
