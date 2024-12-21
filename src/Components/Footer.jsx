import React from "react";
import Dragon from "../assets/dragonball-z.svg";

const Footer = ({ namePage = "Cesar Martinez" }) => {
  return (
    <footer className="footer bg-transparent px-6 py-6 mt-12 z-50">
      <div className="flex w-full flex-wrap items-center justify-between">
        <div className="flex items-center gap-2 text-xl font-bold">
          <img src={Dragon} alt="Dragon Ball Logo" />
        </div>
        <aside className="grid-flow-col items-center">
          <p>
            ©2024{" "}
            <a className="link link-hover font-medium" href="#">
              {namePage}
            </a>
          </p>
        </aside>
        <div className="flex h-5 gap-4">
          <a href="https://github.com/CesarMartinez7" className="link" aria-label="Github Link">
            <span className="icon-[tabler--brand-github] size-5"></span>
          </a>
          <a href="#" className="link" aria-label="X Link">
            <span className="icon-[tabler--brand-x] size-5"></span>
          </a>
          <a href="#" className="link" aria-label="Google Link">
            <span className="icon-[tabler--brand-google] size-5"></span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
