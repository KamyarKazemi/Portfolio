import { createContext } from "react";

export const ThemeContext = createContext<boolean>(true);

export const ToggleThemeContext = createContext<() => void>(() => {});
