import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Root from "./Root";
import { useState, useEffect } from "react";
import { ThemeContext, ToggleThemeContext } from "./contexts/ThemeContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
    ],
  },
]);

function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  // Apply theme to body element
  useEffect(() => {
    const body = document.body;

    if (isDarkMode) {
      body.style.backgroundColor = "#0d1117";
      body.style.color = "#f0f6fc";
    } else {
      body.style.backgroundColor = "#ffffff";
      body.style.color = "#24292f";
    }
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={isDarkMode}>
      <ToggleThemeContext.Provider value={toggleTheme}>
        <RouterProvider router={router} />
      </ToggleThemeContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
