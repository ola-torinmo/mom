// import "./Style.css";
// // import { useTheme } from "../feature/ThemeContext";
// import { ThemeProvider } from "./ThemeContext";
// import { useContext } from "react";

// const DarkModeSwitch = () => {
//   const [{ theme, isDark }, toggleTheme] = useContext(ThemeProvider);
//   return (
//     <label className="switch" style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
//       <input
//         type="checkbox"
//         checked={theme === "light"}
//         onChange={toggleTheme}
//       />
//       <span className="slider round" />
//     </label>
//   );
// };

// export default DarkModeSwitch;

import "./Style.css";
import { ThemeProvider } from "./ThemeContext";
import { useContext } from "react";

// const DarkModeSwitch = () => {
//   const { theme, isDark, toggleTheme } = useContext(ThemeProvider);
//   return (
//     <label
//       className="switch"
//       style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
//     >
//       <input type="checkbox" checked={theme === "light"} onChange={toggleTheme} />
//       <span className="slider round" />
//     </label>
//   );
// };

// export default DarkModeSwitch;
const DarkModeSwitch = () => {
  const { theme, isDark, toggleTheme } = useContext(ThemeProvider);
  return (
    <label
      className={`switch ${isDark ? 'dark' : 'light'}`}
      style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
    >
      <input type="checkbox" checked={theme === "light"} onChange={toggleTheme} />
      <span className="slider round" />
    </label>
  );
};
export default DarkModeSwitch;

