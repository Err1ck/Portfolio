import { Moon, Sun } from "lucide-react";
import { useState } from "react";

export const ThemeToggle = () => {
  const [isDarkMode, setDarckMode] = useState(false);
  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      setDarckMode(false);
    } else {
      document.documentElement.classList.add("dark");
      setDarckMode(true);
    }
  };
  return (
    <button onClick={toggleTheme}>
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-blue-900" />
      )}
    </button>
  );
};
