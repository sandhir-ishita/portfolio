import { Moon, Sun } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
function ThemeToggle() {
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
    setTheme(initialTheme);
    document.documentElement.classList.toggle(
      "dark",
      initialTheme === "dark"
    );
  }, []);
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle(
      "dark",
      newTheme === "dark"
    );
  };
  return <motion.button
    onClick={toggleTheme}
    className="relative p-2 rounded-lg bg-secondary hover:bg-accent transition-colors"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    aria-label="Toggle theme"
  >

      {
    /* Moon Icon */
  }
      <motion.div
    initial={false}
    animate={{
      rotate: theme === "dark" ? 0 : 180,
      opacity: theme === "dark" ? 1 : 0
    }}
    transition={{ duration: 0.3 }}
    className="absolute inset-0 flex items-center justify-center"
  >
        <Moon className="w-5 h-5" />
      </motion.div>

      {
    /* Sun Icon */
  }
      <motion.div
    initial={false}
    animate={{
      rotate: theme === "light" ? 0 : -180,
      opacity: theme === "light" ? 1 : 0
    }}
    transition={{ duration: 0.3 }}
    className="absolute inset-0 flex items-center justify-center"
  >
        <Sun className="w-5 h-5" />
      </motion.div>

      <div className="w-5 h-5 opacity-0" />
    </motion.button>;
}
export {
  ThemeToggle
};
