import { useEffect, useState } from "react";

const useDarkmode = () => {
  const [theme, setTheme] = useState("light"); // default theme

  useEffect(() => {
    // Get the initial theme from local storage if available
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    // Set the theme attribute on the body element for CSS styling
    document.body.setAttribute("data-theme", theme);

    // Save the current theme to local storage
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return { theme, toggleTheme };
};


