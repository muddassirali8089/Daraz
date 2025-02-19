import "../style/Category.css";
import React, { useState, useEffect } from 'react';

const Category = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(null);
  const [showDropdown, setShowDropdown] = useState(true);

  const handleMouseEnter = (index) => {
    setActiveCategoryIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveCategoryIndex(null);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  // Close dropdown on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY || window.pageYOffset;
      const threshold = window.innerHeight * 0.1; // 10% of the viewport height (10vh)
  
      if (scrollPosition > threshold && showDropdown) {
        // Close dropdown if scrolled more than 10vh
        setShowDropdown(false);
      } else if (scrollPosition < threshold && !showDropdown) {
        // Open dropdown if scrolled back to less than 10vh
        setShowDropdown(true);
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [showDropdown]);
  

  return (
    <div className="dropdown" style={{ width: "21vw" , marginLeft:"5vw" }}>
      <div className="dropdown-toggle" onClick={toggleDropdown}>
        Categories
      </div>
      {showDropdown && (
        <div className="dropdown-menu show">
          {/* Category 1 */}
          <div
            className="dropdown-item-wrapper"
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={handleMouseLeave}
          >
            <a className={`dropdown-item ${activeCategoryIndex === 0 ? 'active' : ''}`} href="#">
              Category 1
            </a>
            {activeCategoryIndex === 0 && (
              <div className="nested-dropdown show">
                <a className="dropdown-item" href="#">Nested Category 1</a>
                <a className="dropdown-item" href="#">Nested Category 2</a>
                <a className="dropdown-item" href="#">Nested Category 3</a>
                <a className="dropdown-item" href="#">Nested Category 4</a>
                <a className="dropdown-item" href="#">Nested Category 5</a>
              </div>
            )}
          </div>

          {/* Category 2 */}
          <div
            className="dropdown-item-wrapper"
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}
          >
            <a className={`dropdown-item ${activeCategoryIndex === 1 ? 'active' : ''}`} href="#">
              Category 2
            </a>
            {activeCategoryIndex === 1 && (
              <div className="nested-dropdown show">
                <a className="dropdown-item" href="#">Nested Category 1</a>
                <a className="dropdown-item" href="#">Nested Category 2</a>
                <a className="dropdown-item" href="#">Nested Category 3</a>
                <a className="dropdown-item" href="#">Nested Category 4</a>
                <a className="dropdown-item" href="#">Nested Category 5</a>
              </div>
            )}
          </div>

          {/* Additional Categories */}
          <div
            className="dropdown-item-wrapper"
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
          >
            <a className={`dropdown-item ${activeCategoryIndex === 2 ? 'active' : ''}`} href="#">
              Category 3
            </a>
            {activeCategoryIndex === 2 && (
              <div className="nested-dropdown show">
                <a className="dropdown-item" href="#">Nested Category 1</a>
                <a className="dropdown-item" href="#">Nested Category 2</a>
                <a className="dropdown-item" href="#">Nested Category 3</a>
                <a className="dropdown-item" href="#">Nested Category 4</a>
                <a className="dropdown-item" href="#">Nested Category 5</a>
              </div>
            )}
          </div>

          {/* Add more categories as needed */}
        </div>
      )}
    </div>
  );
};

export default Category;
