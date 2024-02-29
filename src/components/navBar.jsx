import { useState } from "react";

export default function NavBar({
  activeFont,
  changeFont,
  darkMode,
  toggleDarkMode,
}) {
  const [isActive, setIsActive] = useState(false);

  const toggleDropdown = () => {
    setIsActive(!isActive);
  };

  return (
    <nav>
      <img src='./src/assets/images/logo.svg' />
      <div className='nav__right flex g-1'>
        <div className='dropdown'>
          <button
            onClick={toggleDropdown}
            className='dropdown__button flex items-center gap-1'>
            {activeFont === "sans-serif"
              ? "Sans Serif"
              : activeFont === "serif"
                ? "Serif"
                : "Mono"}
            <img src='./src/assets/images/icon-arrow-down.svg' />
          </button>
          <div className={`dropdown__list ${isActive ? "" : "hide"}`}>
            <p className='sans-serif' onClick={() => changeFont("sans-serif")}>
              Sans Serif
            </p>
            <p className='serif' onClick={() => changeFont("serif")}>
              Serif
            </p>
            <p className='mono' onClick={() => changeFont("mono")}>
              Mono
            </p>
          </div>
        </div>
        <div
          onClick={toggleDarkMode}
          className={`dark-mode-toggle ${darkMode ? "active" : ""}`}>
          <span className='toggle-circle'></span>
        </div>
        <svg
          className='moon-icon'
          xmlns='http://www.w3.org/2000/svg'
          width='22'
          height='22'
          viewBox='0 0 22 22'>
          <path
            fill='none'
            stroke='#838383'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='1.5'
            d='M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z'
          />
        </svg>
      </div>
    </nav>
  );
}
