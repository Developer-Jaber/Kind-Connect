
import React, { useState, useEffect } from 'react';
import { BiArrowToTop } from 'react-icons/bi';
import { FaArrowUp } from 'react-icons/fa';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="right-10 bottom-24 fixed">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="text-3xl transition duration-300"
        >
          <FaArrowUp></FaArrowUp>
        </button>
      )}
    </div>
  );
};

export default BackToTopButton;
