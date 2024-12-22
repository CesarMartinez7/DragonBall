import React, { useState } from "react";
import Dragon from "../assets/dragonball-z.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar rounded-box shadow card-glass border-none text-neutral-content border-md z-50">
      <div className="w-full md:flex md:items-center md:gap-2">
        <div className="flex items-center justify-between">
          <div className="navbar-start items-center justify-between max-md:w-full">
            <a href="#" aria-label="Homepage Link">
              <img src={Dragon} className="scale-[2] ml-3" />
            </a>
            <div className="md:hidden">
              <button
                type="button"
                className="collapse-toggle btn btn-outline btn-secondary btn-sm btn-square"
                onClick={toggleMenu}
                aria-controls="logo-navbar-collapse"
                aria-label="Toggle navigation"
              >
                <span className={`icon-[tabler--menu-2] ${isOpen ? 'hidden' : 'block'} size-4`}></span>
                <span className={`icon-[tabler--x] ${isOpen ? 'block' : 'hidden'} size-4`}></span>
              </button>
            </div>
          </div>
        </div>
        <div
          id="logo-navbar-collapse"
          className={`md:navbar-end collapse ${isOpen ? 'block' : 'hidden'} grow basis-full overflow-hidden transition-[height] duration-300 max-md:w-full`}
        >
          <ul className="menu md:menu-horizontal gap-2 card-glass p-0 max-md:mt-2">
            <li>
              <Link to="/" className="card-glass">Home</Link>
            </li>
            <li>
              <Link to="/esferas" className="card-glass">Esferas</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
