import React from "react";
import { Link } from "react-scroll";
const Header = () => {
  return (
    <header className="text-gray-700 border-b border-gray-200">
      <div className="container flex mx-auto  p-5 flex-col md:flex-row  items-center">
        <a href="#" className="font-medium text-gray-900 mb-4 md:mb-0">
          <span className="ml-3 text-xl">Geundori</span>
        </a>
        <nav className="md:ml-auto text-base">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer mr-5 hover:text-blue-400 duration-300"
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="cursor-pointer mr-5 hover:text-blue-400 duration-300"
          >
            About
          </Link>
          <Link
            to="skill"
            smooth={true}
            duration={500}
            className="cursor-pointer mr-5 hover:text-blue-400 duration-300"
          >
            Skills
          </Link>
          <Link
            to="blog"
            smooth={true}
            duration={500}
            className="cursor-pointer mr-5 hover:text-blue-400 duration-300"
          >
            Todo
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-blue-400 duration-300"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
