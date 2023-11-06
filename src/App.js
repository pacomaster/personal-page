import { useState } from 'react';
import { Tooltip } from 'react-tooltip'
import ReactDOMServer from 'react-dom/server';
import passportPhoto from './img/passport.jpg';
import cvData from './data/francisco.js';


export default function Main() {
    const personal = cvData[0];
    const experience = personal.experience;
    const education = personal.education;

    return (
        <div className="main">
            <PersonalInfo name={personal.name} birthday={personal.birthday} phone={personal.phone} email={personal.email} description={personal.description} />
            <hr class="solid"/>
            <Timeline experience={experience} education={education} />
        </div>
        );
}

function Menu(){
    return (
        <div className="menu">
            <div><a href="PersonalInfo">Personal Info</a></div>
            <div><a href="Timeline">Timeline</a></div>
        </div>
    );
}

function PersonalInfo({name, birthday, phone, email, description}) {
    return (
        <div className="personal-info">
            <h1>{name}</h1>
            <Menu />
            <div><img id='photo' src={passportPhoto} /></div>
            <div>
                <div>{birthday}</div>
                <div>{phone}</div>
                <div>{email}</div>
            </div>
            <div>{description}</div>
        </div>
        );
}

function Timeline({experience, education}){
    const [experiences, setExperiences] = useState([]);

    const expStartYears = experience.map(job => (new Date(job.startDate)).getFullYear());
    const expEndYears = experience.map(job => (new Date(job.endDate)).getFullYear());
    const expMinYear = Math.min(...expStartYears);

    const eduStartYears = education.map(school => (new Date(school.startDate)).getFullYear());
    const eduEndYears = education.map(school => (new Date(school.endDate)).getFullYear());
    const eduMinYear = Math.min(...eduStartYears);

    let minYear = expMinYear;
    if(eduMinYear < expMinYear){
        minYear = eduMinYear;
    }

    const maxYear = new Date().getFullYear();

    const expTotalYears = maxYear - minYear;
    let jobs = [];
    let years = [];
    let schools = [];

    let expCurrent = "";
    let expColor = "";
    let expIndex = 0;
    let expPadding = 1;

    let eduCurrent = "";
    let eduColor = "";
    let eduIndex = 0;
    let eduPadding = 1;

    for(let i = minYear; i <= maxYear; i++){
        years.push(i);

        if(expEndYears[expIndex] == i){
            jobs.push({experience: experience[expIndex], colspan: expPadding});
            expCurrent = "";
            expColor = "";
            expIndex++;
        }
        if(expStartYears[expIndex] == i){
            expCurrent = experience[expIndex].company;
            expColor = experience[expIndex].color;
            expPadding = 0;
        }
        if(expCurrent == ""){
            jobs.push({experience: {}, colspan: 1});
        } else {
            expPadding++;
        }

        if(eduEndYears[eduIndex] == i){
            schools.push({education: education[eduIndex], colspan: eduPadding});
            eduCurrent = "";
            eduColor = "";
            eduIndex++;
        }
        if(eduStartYears[eduIndex] == i){
            eduCurrent = education[eduIndex].abbreviation;
            eduColor = education[eduIndex].color;
            eduPadding = 0;
        }
        if(eduCurrent == ""){
            schools.push({education: {}, colspan: 1});
        } else {
            eduPadding++;
        }
    }
    if(expCurrent != ""){
        jobs.push({experience: experience[expIndex], colspan: expPadding});
    }
    if(eduCurrent != ""){
        schools.push({education: education[eduIndex], colspan: eduPadding});
    }

    function getTooltip(experience){
        return (
            <div>
                <div>{experience.roles}</div>
                <ul>
                    <li>{experience.projects}</li>
                </ul>
                <div>{experience.technologies}</div>
            </div>
        );
    }

    const nYears = years.map( year => {
        return(
            <td>{year}</td>
        );
    });

    const nJobs = jobs.map( job => {
        const tooltip = getTooltip(job.experience);
        if(job.name != ""){
            return(<td className={job.experience.color} colspan={job.colspan}><Tooltip id="my-tooltip" /><a data-tooltip-id="my-tooltip" data-tooltip-html={ReactDOMServer.renderToStaticMarkup(tooltip)}>{job.experience.company}</a></td>);
        } else {
            return(<td></td>);
        }
    });

    const nSchools = schools.map( school => {
        if(school.name != ""){
            return(<td className={school.education.color} colspan={school.colspan}><div onClick={() => alert(school.education.name)}>{school.education.abbreviation}</div></td>);
        } else {
        return(<td></td>);
        }
    });

    return(
        <div>
            <h2>Timeline</h2>
            <div className="timeline">
                <table>
                    <tr>
                        {nJobs}
                    </tr>
                    <tr>
                        {nYears}
                    </tr>
                    <tr>
                        {nSchools}
                    </tr>
                </table>
            </div>
        </div>
    );
}
