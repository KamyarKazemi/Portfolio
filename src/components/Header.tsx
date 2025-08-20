import { useContext } from "react";
import { ThemeContext, ToggleThemeContext } from "../contexts/ThemeContext";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { BsMoon } from "react-icons/bs";

function Header() {
  const isDarkMode = useContext(ThemeContext);
  const toggleTheme = useContext(ToggleThemeContext);

  return (
    <>
      <div className={isDarkMode ? "header-dark" : "header-light"}>
        <div className="flex items-center justify-around">
          <BsMoon />
          <BsArrowRightCircleFill />
        </div>
      </div>
    </>
  );
}

export default Header;
