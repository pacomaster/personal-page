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

    return (
        <div id="main">
            <span className="left"><MenuArea/></span>
            <span className="right"><OptionsMenu languages={languages}/></span>
            <span><PersonalInfo name={personal.name} birthday={personal.birthday} phone={personal.phone} email={personal.email} position={personal.position}/></span>

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