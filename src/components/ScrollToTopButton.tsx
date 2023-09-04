import React from "react";

const ScrollToTopButton: React.FC = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={handleScrollToTop}
      className="fixed bottom-4 right-4 p-2 bg-gray-600 hover:bg-gray-500 text-white rounded-lg"
    >
      Top
    </button>
  );
};

export default ScrollToTopButton;
