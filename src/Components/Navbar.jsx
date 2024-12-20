import React from "react";
import Dragon from "../assets/drago.png";
const Navbar = () => {
  return (
    <nav class="navbar rounded-box shadow bg-slate-800 text-neutral-content border-md border-slate-800 border-[1px]">
      <div class="w-full md:flex md:items-center md:gap-2">
        <div class="flex items-center justify-between">
          <div class="navbar-start items-center justify-between max-md:w-full">
            <a href="#" aria-label="Homepage Link">
              <img src={Dragon} alt="" width={40} height={40}/>
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
          <ul class="menu md:menu-horizontal gap-2 bg-slate-800 p-0 text-base max-md:mt-2">
            <li>
              <a href="#" className="bg-slate-800">Home</a>
            </li>
            <li>
              <a href="#" className="bg-slate-800">About</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
