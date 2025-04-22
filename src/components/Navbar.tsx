import logo from "../assets/shared/logo.svg";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import iconClose from "../assets/shared/icon-close.svg";
import iconHamburger from "../assets/shared/icon-hamburger.svg";

const Navbar = () => {
  const location = useLocation();
  const [active, setActive] = useState("/");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);

  const navItems = [
    { id: "00", label: "Home", path: "/" },
    { id: "01", label: "Destination", path: "/destination" },
    { id: "02", label: "Crew", path: "/crew" },
    { id: "03", label: "Technology", path: "/technology" },
  ];

  return (
    <header className="absolute top-0 lg:top-10 left-0 right-0 z-50">
      <nav className="hidden absolute top-0 lg:top-10 left-0 right-0 z-50 sm:flex items-center justify-between lg:py-4 lg:pl-20">
        <Link to={"/"} className="flex items-center pl-4 lg:pl-0">
          <img src={logo} alt="logo" className="w-10 h-10 mt-4 lg:mt-0" />
        </Link>
        <div className="hidden xl:block xl:w-[37%] h-[1px] bg-white/40 absolute top-1/2 left-[12rem] z-10" />
        <div className="relative flex sm:space-x-4 lg:space-x-6 items-center sm:px-6 sm:py-8 lg:py-8 lg:px-40 bg-white/2 backdrop-blur-md lg:rounded-xl">
          {navItems.map(({ label, path, id }) => {
            const isActive = active === path;

            return (
              <Link
                key={path}
                to={path}
                className={`flex items-center text-[14px] lg:text-base relative text-white ml-4 transition-all font-light tracking-widest uppercase
          after:absolute after:left-0 after:right-0 after:mx-auto after:w-full after:h-1
          
          ${
            isActive
              ? "after:bg-white after:-bottom-9"
              : "after:bg-transparent hover:after:bg-white/50 hover:after:-bottom-9"
          }`}
              >
                <span className="font-semibold mr-2 hidden lg:block">{id}</span>
                {label}
              </Link>
            );
          })}
        </div>
      </nav>
      <div className="flex justify-between items-center px-4 sm:hidden">
        <Link to={"/"} className="flex items-center">
          <img src={logo} alt="logo" className="w-10 h-10 mt-4" />
        </Link>
        <img
          src={iconHamburger}
          alt="hamburger"
          className="w-6 h-6 ml-4 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <nav
          className="fixed h-full w-screen lg:hidden bg-black/50 top-0 left-"
          onClick={() => setIsOpen(false)}
        >
          <div className="bg-white/2 backdrop-blur-2xl text-black right-0 top-0 h-screen w-[70%] px-6 py-8 gap-8 z-50 flex flex-col items-start slide-in-right absolute">
            <div className="flex items-center justify-between absolute right-6 top-6">
              <img
                src={iconClose}
                alt="close"
                className="w-6 h-6 cursor-pointer "
                onClick={() => setIsOpen(false)}
              />
            </div>
            <div className="mt-20 flex flex-col gap-y-6 px-4">
              {navItems.map(({ label, path, id }) => (
                <Link
                  key={path}
                  to={path}
                  className={`text-lg relative text-white ml-4 transition-all font-light tracking-widest uppercase ${
                    active === path ? "" : ""
                  }`}
                >
                  <span className="font-semibold mr-2 ">{id}</span>
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
