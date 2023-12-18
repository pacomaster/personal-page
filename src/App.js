import { useState, useEffect } from 'react';
import OptionsMenu from './components/OptionsMenu/OptionsMenu'
import MenuArea from './components/MenuArea/MenuArea'
import PersonalInfo from './components/PersonalInfo/PersonalInfo'
import Summary from './components/Summary/Summary'
import Experience from './components/Experience/Experience'
import Education from './components/Education/Education'
import Skills from './components/Skills/Skills'
import Strengths from './components/Strengths/Strengths'
import Certifications from './components/Certifications/Certifications'
import BottomSection from './components/BottomSection/BottomSection'
import cvData from './data/francisco.js';

export default function Main() {
    const personal = cvData[0];
    const experience = personal.experience;
    const education = personal.education;
    const languages = personal.languages;
    const skills = personal.skills;
    const strengths = personal.strengths;
    const certifications = personal.certifications;

    const [optionsMenuOpen, setOptionsMenuOpen] = useState(false);

    useEffect(() => {
        if (optionsMenuOpen) {
          document.getElementById("optionsMenu").classList.remove('invisible');
        } else {
          document.getElementById("optionsMenu").classList.add('invisible');
        }
      }, [optionsMenuOpen]);

    return (
        <div id="main">
            <div id="optionsMenu">
                <OptionsMenu languages={languages}/>
            </div>
            <button id="menuButton" type="button" onClick={() => setOptionsMenuOpen(!optionsMenuOpen) }>Menu</button>
            <MenuArea />
            <PersonalInfo name={personal.name} birthday={personal.birthday} phone={personal.phone} email={personal.email} position={personal.position}/>
            <hr className="solid"/>
            <Summary summary={personal.description}/>
            <hr className="solid"/>
            <Experience experience={experience}/>
            <hr className="solid"/>
            <Education education={education}/>
            <hr className="solid"/>
            <Skills skills={skills}/>
            <hr className="solid"/>
            <Strengths strengths={strengths}/>
            <hr className="solid"/>
            <Certifications certifications={certifications}/>
            <hr className="solid"/>
            <BottomSection />

        </div>
        );
}