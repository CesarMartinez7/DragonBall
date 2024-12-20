import React from "react";
import Dragon from "../assets/dragonball-z.svg";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav class="navbar rounded-box shadow card-glass border-none text-neutral-content border-md ">
      <div class="w-full md:flex md:items-center md:gap-2">
        <div class="flex items-center justify-between">
          <div class="navbar-start items-center justify-between max-md:w-full">
            <a href="#" aria-label="Homepage Link">
              <img src={Dragon} className="scale-[4]"/>
            </a>
            <div class="md:hidden">
              <button
                type="button"
                class="collapse-toggle btn btn-outline btn-secondary btn-sm btn-square"
                data-collapse="#logo-navbar-collapse"
                aria-controls="logo-navbar-collapse"
                aria-label="Toggle navigation"
              >
                <span class="icon-[tabler--menu-2] collapse-open:hidden size-4"></span>
                <span class="icon-[tabler--x] collapse-open:block hidden size-4"></span>
              </button>
            </div>
          </div>
        </div>
        <div
          id="logo-navbar-collapse"
          class="md:navbar-end collapse hidden grow basis-full overflow-hidden transition-[height] duration-300 max-md:w-full"
        >
          <ul class="menu md:menu-horizontal gap-2 card-glass p-0 max-md:mt-2">
            <li>
              <a href="#" className="card-glass">Home</a>
            </li>
            <li>
              <Link to={"esferas"} >About</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
