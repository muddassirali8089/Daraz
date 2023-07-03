import React, { useState, useEffect } from 'react';

const Category = () => {
  const [showDropdown, setShowDropdown] = useState(true);
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(null);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
    setActiveCategoryIndex(null);
  };

  const toggleNestedDropdown = (index) => {
    setActiveCategoryIndex(index === activeCategoryIndex ? null : index);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (showDropdown) {
        setShowDropdown(false);
        setActiveCategoryIndex(null);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [showDropdown]);

  return (
    <div className="dropdown">
      <div className="dropdown-toggle" onClick={toggleDropdown}>
        Categories
      </div>
      <div className={`dropdown-menu ${showDropdown ? 'show' : ''}`}>
        <div>
          <a
            className={`dropdown-item ${activeCategoryIndex === 0 ? 'active' : ''}`}
            href="#"
            onClick={() => toggleNestedDropdown(0)}
          >
            Category 1
          </a>
          {activeCategoryIndex === 0 && (
            <div className="nested-dropdown show">
              <a className="dropdown-item" href="#">
                Nested Category 1
              </a>
              <a className="dropdown-item" href="#">
                Nested Category 2
              </a>
              <a className="dropdown-item" href="#">
                Nested Category 3
              </a>
              <a className="dropdown-item" href="#">
                Nested Category 4
              </a>
              <a className="dropdown-item" href="#">
                Nested Category 5
              </a>
            </div>
          )}

          <a
            className={`dropdown-item ${activeCategoryIndex === 1 ? 'active' : ''}`}
            href="#"
            onClick={() => toggleNestedDropdown(1)}
          >
            Category 2
          </a>
          {activeCategoryIndex === 1 && (
            <div className="nested-dropdown show">
              <a className="dropdown-item" href="#">
                Nested Category 1
              </a>
              <a className="dropdown-item" href="#">
                Nested Category 2
              </a>
              <a className="dropdown-item" href="#">
                Nested Category 3
              </a>
              <a className="dropdown-item" href="#">
                Nested Category 4
              </a>
              <a className="dropdown-item" href="#">
                Nested Category 5
              </a>
            </div>
          )}

          <a
            className={`dropdown-item ${activeCategoryIndex === 2 ? 'active' : ''}`}
            href="#"
            onClick={() => toggleNestedDropdown(2)}
          >
            Category 3
          </a>
          {activeCategoryIndex === 2 && (
            <div className="nested-dropdown show">
              <a className="dropdown-item" href="#">
                Nested Category 1
              </a>
              <a className="dropdown-item" href="#">
                Nested Category 2
              </a>
              <a className="dropdown-item" href="#">
                Nested Category 3
              </a>
              <a className="dropdown-item" href="#">
                Nested Category 4
              </a>
              <a className="dropdown-item" href="#">
                Nested Category 5
              </a>
            </div>
          )}

          <a
            className={`dropdown-item ${activeCategoryIndex === 3 ? 'active' : ''}`}
            href="#"
            onClick={() => toggleNestedDropdown(3)}
          >
            Category 4
          </a>
          {activeCategoryIndex === 3 && (
            <div className="nested-dropdown show">
              <a className="dropdown-item" href="#">
                Nested Category 1
              </a>
              <a className="dropdown-item" href="#">
                Nested Category 2
              </a>
              <a className="dropdown-item" href="#">
                Nested Category 3
              </a>
              <a className="dropdown-item" href="#">
                Nested Category 4
              </a>
              <a className="dropdown-item" href="#">
                Nested Category 5
              </a>
            </div>
          )}

          <a
            className={`dropdown-item ${activeCategoryIndex === 4 ? 'active' : ''}`}
            href="#"
            onClick={() => toggleNestedDropdown(4)}
          >
            Category 5
          </a>
          {activeCategoryIndex === 4 && (
            <div className="nested-dropdown show">
              <a className="dropdown-item" href="#">
                Nested Category 1
              </a>
              <a className="dropdown-item" href="#">
                Nested Category 2
              </a>
              <a className="dropdown-item" href="#">
                Nested Category 3
              </a>
              <a className="dropdown-item" href="#">
                Nested Category 4
              </a>
              <a className="dropdown-item" href="#">
                Nested Category 5
              </a>
            </div>
          )}

          <a
            className={`dropdown-item ${activeCategoryIndex === 5 ? 'active' : ''}`}
            href="#"
            onClick={() => toggleNestedDropdown(5)}
          >
            Category 6
          </a>
          {activeCategoryIndex === 5 && (
            <div className="nested-dropdown show">
              <a className="dropdown-item" href="#">
                Nested Category 1
              </a>
              <a className="dropdown-item" href="#">
                Nested Category 2
              </a>
              <a className="dropdown-item" href="#">
                Nested Category 3
              </a>
              <a className="dropdown-item" href="#">
                Nested Category 4
              </a>
              <a className="dropdown-item" href="#">
                Nested Category 5
              </a>
            </div>
          )}

          <a
            className={`dropdown-item ${activeCategoryIndex === 6 ? 'active' : ''}`}
            href="#"
            onClick={() => toggleNestedDropdown(6)}
          >
            Category 7
          </a>
          {activeCategoryIndex === 6 && (
            <div className="nested-dropdown show">
              <a className="dropdown-item" href="#">
                Nested Category 1
              </a>
              <a className="dropdown-item" href="#">
                Nested Category 2
              </a>
              <a className="dropdown-item" href="#">
                Nested Category 3
              </a>
              <a className="dropdown-item" href="#">
                Nested Category 4
              </a>
              <a className="dropdown-item" href="#">
                Nested Category 5
              </a>
            </div>
          )}

          <a
            className={`dropdown-item ${activeCategoryIndex === 7 ? 'active' : ''}`}
            href="#"
            onClick={() => toggleNestedDropdown(7)}
          >
            Category 8
          </a>
          {activeCategoryIndex === 7 && (
            <div className="nested-dropdown show">
              <a className="dropdown-item" href="#">
                Nested Category 1
              </a>
              <a className="dropdown-item" href="#">
                Nested Category 2
              </a>
              <a className="dropdown-item" href="#">
                Nested Category 3
              </a>
              <a className="dropdown-item" href="#">
                Nested Category 4
              </a>
              <a className="dropdown-item" href="#">
                Nested Category 5
              </a>
            </div>
          )}

          <a
            className={`dropdown-item ${activeCategoryIndex === 8 ? 'active' : ''}`}
            href="#"
            onClick={() => toggleNestedDropdown(8)}
          >
            Category 9
          </a>
          {activeCategoryIndex === 8 && (
            <div className="nested-dropdown show">
              <a className="dropdown-item" href="#">
                Nested Category 1
              </a>
              <a className="dropdown-item" href="#">
                Nested Category 2
              </a>
              <a className="dropdown-item" href="#">
                Nested Category 3
              </a>
              <a className="dropdown-item" href="#">
                Nested Category 4
              </a>
              <a className="dropdown-item" href="#">
                Nested Category 5
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Category;
