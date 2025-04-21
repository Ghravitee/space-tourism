import logo from "../assets/shared/logo.svg";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const location = useLocation();
  const [active, setActive] = useState("/");

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
    <nav className="absolute top-10 left-0 right-0 z-50 flex items-center justify-between py-4 px-20">
      <div className="flex items-center">
        <img src={logo} alt="logo" className="w-10 h-10" />
      </div>
      <div className="w-[34%] h-[1px] bg-white/40 absolute top-1/2 left-40 z-10" />
      <div className="relative flex space-x-6 items-center py-8 px-40 bg-white/2 backdrop-blur-md rounded-xl">
        {navItems.map(({ label, path, id }) => (
          <Link
            key={path}
            to={path}
            className={`relative text-white ml-4 transition-all font-light tracking-widest uppercase ${
              active === path
                ? "after:absolute after:-bottom-9 after:left-0 after:right-0 after:h-1 after:bg-white after:mx-auto after:w-full"
                : ""
            }`}
          >
            <span className="font-semibold mr-2">{id}</span>
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
