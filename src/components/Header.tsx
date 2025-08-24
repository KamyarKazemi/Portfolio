import { useContext } from "react";
import { ThemeContext, ToggleThemeContext } from "../contexts/ThemeContext";
import { BsArrowRightCircle, BsMoon, BsSun } from "react-icons/bs";

function Header() {
  const isDarkMode = useContext(ThemeContext);
  const toggleTheme = useContext(ToggleThemeContext);

  return (
    <header
      className={`relative flex items-center justify-between 
        backdrop-blur-md transition-colors duration-500 p-5 sm:p-4
        ${
          isDarkMode
            ? "bg-[#0d1117] text-gray-100"
            : "bg-white/80 text-gray-900 shadow-sm"
        }
      `}
    >
      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        aria-label="Toggle theme"
        className="hover:scale-110 transition-transform"
      >
        {isDarkMode ? (
          <BsSun className="text-xl sm:text-2xl" />
        ) : (
          <BsMoon className="text-xl sm:text-2xl" />
        )}
      </button>

      {/* Title */}
      <h2 className="font-bold text-center text-base sm:text-lg absolute left-1/2 transform -translate-x-1/2">
        Portfolio
      </h2>

      {/* Skip Intro */}
      <button className="flex items-center border border-transparent hover:border-current transition-all duration-300 font-medium gap-1 sm:gap-2">
        <span className="hidden sm:inline text-sm sm:text-base">
          Skip Intro
        </span>
        <BsArrowRightCircle className="text-lg sm:text-2xl" />
      </button>
    </header>
  );
}

export default Header;
