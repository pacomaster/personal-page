import OptionsMenu from './OptionsMenu/OptionsMenu'
import MenuArea from './MenuArea/MenuArea'
import PersonalInfo from './PersonalInfo/PersonalInfo'
import Summary from './Summary/Summary'
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
            <OptionsMenu languages={languages}/>
            <MenuArea />
            <PersonalInfo name={personal.name} birthday={personal.birthday} phone={personal.phone} email={personal.email} description={personal.description} />
            <hr className="solid"/>
            <Summary summary={personal.description}/>
            <hr className="solid"/>
            <Timeline experience={experience} education={education} />
            <hr className="solid"/>
            <BottomSection />

        </div>
        );
}