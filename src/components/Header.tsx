import { useContext } from "react";
import { ThemeContext } from "../Contexts";
import logo from "../assets/images/logo.svg";
import moonIcon from "../assets/images/icon-moon.svg";

export default function Header({ setTheme }) {
  const theme = useContext(ThemeContext);

  function switchTheme(e) {
    const newTheme = e.target.checked ? "dark" : "light";
    setTheme(newTheme);
    window.document.documentElement.className = newTheme;
  }

  return (
    <header className="flex items-center justify-between">
      <div>
        <img src={logo} alt="Logo" />
      </div>
      <div className="flex items-center">
        <select
          name="font"
          id="font"
          className="w-30 border-none text-lg font-bold leading-8"
        >
          <option value="">Sans Serif</option>
          <option value="">Serif</option>
          <option value="">Mono</option>
        </select>

        <hr className="h-0.25 w-8 rotate-90 text-gray-light" />

        <label className="relative inline-flex cursor-pointer items-center">
          <input
            type="checkbox"
            value={theme}
            className="peer sr-only"
            checked={theme === "dark"}
            onChange={switchTheme}
          />
          <div className="bg-gray-200 after:border-gray-300 after:bg-white peer-checked:bg-blue-600 peer-checked:after:border-white peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800 peer h-6 w-11 rounded-full after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-focus:outline-none peer-focus:ring-4"></div>
          <span className="text-gray-900 dark:text-gray-300 ml-3 text-sm font-medium">
            <img src={moonIcon} alt="Color mode" />
          </span>
        </label>
      </div>
    </header>
  );
}
