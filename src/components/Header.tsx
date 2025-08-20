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
        <div className="flex items-center justify-between">
          <BsMoon className="ml-5 cursor-pointer" />
          <BsArrowRightCircleFill className="mr-5 cursor-pointer" />
        </div>
      </div>
    </>
  );
}

export default Header;
