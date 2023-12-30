import { useState, useEffect } from 'react';
import { useMediaQuery } from "react-responsive";
import Toggle from "react-toggle";
import "react-toggle/style.css"
import "./OptionsMenu.css"
import Languages from '../Languages/Languages'
import optionsIcon from './icons/icons8-options-64.png';

export default function OptionsMenu ({languages}){
    function openOptions() {
        console.log("open");
        document.getElementById("mySideoptions").style.width = "250px";
        }

    function closeOptions() {
        console.log("close");
        document.getElementById("mySideoptions").style.width = "0";
        }

    return (
        <div id="options-menu">
            <div id="mySideoptions" class="sideoptions">
                <a href="javascript:void(0)" class="closebtn" onClick={() => closeOptions() }>&times;</a>
                <DarkModeToggle/>
                <Languages languages={languages}/>
            </div>



            <span style={{fontSize: '30px', cursor: 'pointer'}} onClick={() => openOptions() }><img src={optionsIcon}/></span>
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

