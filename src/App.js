import { useState, useEffect } from 'react';
import { useMediaQuery } from "react-responsive";
import Toggle from "react-toggle";
import "react-toggle/style.css"
import Languages from './Languages/Languages'
import MenuArea from './MenuArea/MenuArea'
import PersonalInfo from './PersonalInfo/PersonalInfo'
import Timeline from './Timeline/Timeline'
import BottomSection from './BottomSection/BottomSection'
import cvData from './data/francisco.js';

export default function Main() {
    const personal = cvData[0];
    const experience = personal.experience;
    const education = personal.education;
    const languages = personal.languages;

    return (
        <div id="main">
            <DarkModeToggle/>
            <Languages languages={languages}/>
            <MenuArea />
            <PersonalInfo name={personal.name} birthday={personal.birthday} phone={personal.phone} email={personal.email} description={personal.description} />
            <hr className="solid"/>
            <Timeline experience={experience} education={education} />
            <hr className="solid"/>
            <BottomSection />

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