import { Tooltip } from 'react-tooltip'
import ReactDOMServer from 'react-dom/server';

export default function Timeline({experience, education}){
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
            jobs.push({experience: experience[expIndex], colSpan: expPadding});
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
            jobs.push({experience: {}, colSpan: 1});
        } else {
            expPadding++;
        }

        if(eduEndYears[eduIndex] == i){
            schools.push({education: education[eduIndex], colSpan: eduPadding});
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
            schools.push({education: {}, colSpan: 1});
        } else {
            eduPadding++;
        }
    }
    if(expCurrent != ""){
        jobs.push({experience: experience[expIndex], colSpan: expPadding});
    }
    if(eduCurrent != ""){
        schools.push({education: education[eduIndex], colSpan: eduPadding});
    }

    const nYears = years.map( year => {
        return(
            <td>{year}</td>
        );
    });

    const nJobs = jobs.map( job => {

        if(job.name != ""){
            const projectsArray =  {...job.experience.projects};
            const technologiesArray = {...job.experience.technologies};
            const tooltip = (<ExperienceTooltip projects={projectsArray} technologies={technologiesArray}/>);
            return(<td className={job.experience.color} colSpan={job.colSpan} style={{cursor: 'pointer'}}><Tooltip id="my-tooltip" clickable="true"/><a data-tooltip-id="my-tooltip" data-tooltip-html={ReactDOMServer.renderToStaticMarkup(tooltip)}>{job.experience.company}</a></td>);
        } else {
            return(<td></td>);
        }
    });

    const nSchools = schools.map( school => {
        if(school.name != ""){
            return(<td className={school.education.color} colSpan={school.colSpan}><div onClick={() => alert(school.education.name)}>{school.education.abbreviation}</div></td>);
        } else {
        return(<td></td>);
        }
    });

    return(
        <div id="Timeline">
            <h2>Timeline</h2>
            <div className="timeline">
                <table>
                    <tbody>
                        <tr>
                            {nJobs}
                        </tr>
                        <tr>
                            {nYears}
                        </tr>
                        <tr>
                            {nSchools}
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

function ExperienceTooltip(properties){
        return (
            <div>
                <h3>Projects</h3>
                <ul>
                    { Object.values(properties.projects).map((description, key) => {
                        return (<li key={key}>{description}</li>);
                    })
                    }
                </ul>
                <h3>Technologies</h3>
                <ul>
                     { Object.values(properties.technologies).map((description, key) => {
                         return (<li key={key}>{description}</li>);
                     })
                     }
                 </ul>
            </div>
        );
    }