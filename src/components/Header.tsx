import { useContext } from "react";
import { ThemeContext, ToggleThemeContext } from "../contexts/ThemeContext";
import { BsArrowRightCircle } from "react-icons/bs";
import { BsMoon } from "react-icons/bs";
import { BsSun } from "react-icons/bs";

function Header() {
  const isDarkMode = useContext(ThemeContext);
  const toggleTheme = useContext(ToggleThemeContext);

  return (
    <>
      <div
        className={`header-base ${isDarkMode ? "header-dark" : "header-light"}`}
      >
        <div className="flex items-center justify-between">
          {isDarkMode ? (
            <BsSun onClick={toggleTheme} className="cursor-pointer moon-icon" />
          ) : (
            <BsMoon
              onClick={toggleTheme}
              className="cursor-pointer moon-icon"
            />
          )}

          <div
            className="flex items-center gap-2 cursor-pointer border 
          border-transparent  px-4 py-2 rounded-full hover:border-current transition-all duration-300 p-3"
          >
            <span className="text-base">Skip Intro</span>
            <BsArrowRightCircle />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
