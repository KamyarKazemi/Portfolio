import { useContext } from "react";
import { ThemeContext, ToggleThemeContext } from "../contexts/ThemeContext";

function MainPage() {
  const isDarkMode = useContext(ThemeContext);
  const toggleTheme = useContext(ToggleThemeContext);

  return (
    <>
      <div className={isDarkMode ? "main-dark" : "main-light"}>
        <div>hello</div>
      </div>
    </>
  );
}

export default MainPage;
