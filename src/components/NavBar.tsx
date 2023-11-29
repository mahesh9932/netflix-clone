import NavBarMenu from "./NavBarMenu";
import { FaChevronDown } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";
import { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";
import AccountMenu from "./AccountMenu";

const TOP_OFFSET = 66;

const NavBar = () => {
  const [showBrowseMenu, setShowBrowseMenu] = useState(false);
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="fixed w-full z-50 ">
      <div
        className={`flex flex-row gap-5 md:gap-10 items-center px-2 md:px-4 lg:px-7 py-2 md:py-6 ${
          showBackground ? "bg-gray-900 bg-opacity-90" : ""
        }`}
      >
        <img src="/images/logo.png" className="h-4 md:h-10" alt="logo" />
        <NavBarMenu />
        <div
          onClick={() => setShowBrowseMenu((prevVal) => !prevVal)}
          className="lg:hidden text-sm md:text-lg text-white hover:text-gray-400 flex items-center gap-2 relative cursor-pointer"
        >
          <p>Browse</p>
          <div
            className={`transition duration-500 ${
              showBrowseMenu ? "rotate-180" : "rotate-0"
            }`}
          >
            <FaChevronDown />
          </div>

          <MobileMenu visible={showBrowseMenu} />
        </div>
        <div className="flex flex-row gap-4 ml-auto items-center px-4">
          <FaSearch className="text-gray-200 hover:text-gray-400 w-6 cursor-pointer transition" />
          <FaRegBell className="text-gray-200 hover:text-gray-400 w-6 cursor-pointer transition" />
          <div
            className="flex flex-row gap-2 text-gray-400 items-center relative cursor-pointer"
            onClick={() => {
              setShowAccountMenu((prevVal) => !prevVal);
            }}
          >
            <div className="w-6 h-6 md:h-9 md:w-9">
              <img
                src="/images/default-blue.png"
                className="rounded-md"
                alt="profile-icon"
              />
            </div>
            <FaChevronDown
              className={`text-white transition duration-300 ${
                showAccountMenu ? "rotate-180" : "rotate-0"
              }`}
            />
            <AccountMenu visible={showAccountMenu} />
          </div>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
