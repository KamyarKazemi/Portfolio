import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Root from "./Root";
import { useState } from "react";
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

  return (
    <ThemeContext.Provider value={isDarkMode}>
      <ToggleThemeContext.Provider value={toggleTheme}>
        <RouterProvider router={router} />
      </ToggleThemeContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
