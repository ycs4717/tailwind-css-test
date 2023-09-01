import React from "react";

const App = () => {
  return (
    <header className="text-gray-700 border-b border-gray-200">
      {/* md ... md以上の時にcssを適用 */}
      <div className="container flex mx-auto  p-5 flex-col md:flex-row  items-center">
        <a href="#" className="font-medium text-gray-900 mb-4 md:mb-0">
          <span className="ml-3 text-xl">ShinCode</span>
        </a>
        <nav className="md:ml-auto text-base">
          <a href="#home" className="mr-5 hover:text-blue-400 duration-300">
            Home
          </a>
          <a href="#about" className="mr-5 hover:text-blue-400 duration-300">
            About
          </a>
          <a href="#skill" className="mr-5 hover:text-blue-400 duration-300">
            Skills
          </a>
          <a href="#blog" className="mr-5 hover:text-blue-400 duration-300">
            Blog
          </a>
          <a href="#contact" className="hover:text-blue-400 duration-300">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default App;
