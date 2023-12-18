import { useState, useEffect } from 'react';
import { useMediaQuery } from "react-responsive";
import Toggle from "react-toggle";
import "react-toggle/style.css"
import "./OptionsMenu.css"
import Languages from '../Languages/Languages'

export default function OptionsMenu ({languages}){
    return (
        <div id="options-menu">
            <DarkModeToggle/>
            <Languages languages={languages}/>
        </div>
    );
}

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.getElementById("main").classList.add('dark');
    } else {
      document.getElementById("main").classList.remove('dark');
    }
  }, [isDark]);

  const systemPrefersDark = useMediaQuery(
    {
      query: "(prefers-color-scheme: dark)",
    },
    undefined,
    (isSystemDark) => setIsDark(isSystemDark)
  );

  return (
    <Toggle
      checked={isDark}
      onChange={({ target }) => setIsDark(target.checked)}
      icons={{ checked: "🌙", unchecked: "🔆" }}
      aria-label="Dark mode toggle"
    />
  );
};

