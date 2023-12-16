import OptionsMenu from './components/OptionsMenu/OptionsMenu'
import MenuArea from './components/MenuArea/MenuArea'
import PersonalInfo from './components/PersonalInfo/PersonalInfo'
import Summary from './components/Summary/Summary'
import Experience from './components/Experience/Experience'
import BottomSection from './components/BottomSection/BottomSection'
import cvData from './data/francisco.js';

export default function Main() {
    const personal = cvData[0];
    const experience = personal.experience;
    const education = personal.education;
    const languages = personal.languages;

    return (
        <div id="main">
            <OptionsMenu languages={languages}/>
            <MenuArea />
            <PersonalInfo name={personal.name} birthday={personal.birthday} phone={personal.phone} email={personal.email} description={personal.description} />
            <hr className="solid"/>
            <Summary summary={personal.description}/>
            <hr className="solid"/>
            <Experience experience={experience}/>
            <hr className="solid"/>
            <BottomSection />

        </div>
        );
}