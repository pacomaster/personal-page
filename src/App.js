import { useState } from 'react';
import passportPhoto from './img/passport.jpg';
import cvData from './data/francisco.js';


export default function Main() {
    const personal = cvData[0];
    const experience = personal.experience;
    const education = personal.education;

    return (
        <div className="main">
            <PersonalInfo name={personal.name} birthday={personal.birthday} phone={personal.phone} email={personal.email} description={personal.description} />
            <hr class="solid" />
            <Experience experience={experience}/>
            <hr class="solid" />
            <Education education={education}/>
            <hr class="solid"/>
            <Timeline experience={experience} education={education} />
        </div>
        );
}

function Menu(){
    return (
        <div className="menu">
            <div><a href="PersonalInfo">Personal Info</a></div>
            <div><a href="Experience">Experience</a></div>
            <div><a href="Education">Education</a></div>
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
    const expStartYears = experience.map(job => (new Date(job.startDate)).getFullYear());
    const expEndYears = experience.map(job => (new Date(job.endDate)).getFullYear());
    const expNames = experience.map(job => job.company);
    const expMinYear = Math.min(...expStartYears);

    const eduStartYears = education.map(school => (new Date(school.startDate)).getFullYear());
    const eduEndYears = education.map(school => (new Date(school.endDate)).getFullYear());
    const eduNames = education.map(school => school.abbreviation);
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
    let expIndex = 0;
    let expPadding = 1;

    let eduCurrent = "";
    let eduIndex = 0;
    let eduPadding = 1;

    for(let i = minYear; i <= maxYear; i++){
        years.push(i);

        if(expEndYears[expIndex] == i){
            jobs.push({name: expCurrent, colspan: expPadding});
            expCurrent = "";
            expIndex++;
        }
        if(expStartYears[expIndex] == i){
            expCurrent = expNames[expIndex];
            expPadding = 0;
        }
        if(expCurrent == ""){
            jobs.push({name: expCurrent, colspan: 1});
        } else {
            expPadding++;
        }

        if(eduEndYears[eduIndex] == i){
            schools.push({name: eduCurrent, colspan: eduPadding});
            eduCurrent = "";
            eduIndex++;
        }
        if(eduStartYears[eduIndex] == i){
            eduCurrent = eduNames[eduIndex];
            eduPadding = 0;
        }
        if(eduCurrent == ""){
            schools.push({name: eduCurrent, colspan: 1});
        } else {
            eduPadding++;
        }
    }
    if(expCurrent != ""){
        jobs.push({name: expCurrent, colspan: expPadding});
    }
    if(eduCurrent != ""){
        schools.push({name: eduCurrent, colspan: eduPadding});
    }

    const nYears = years.map( year => {
        return(
            <td>{year}</td>
        );
    });

    const nJobs = jobs.map( job => {
        return(
            <td colspan={job.colspan}>{job.name}</td>
        );
    });

    const nSchools = schools.map( school => {
        return(
            <td colspan={school.colspan}>{school.name}</td>
        );
    });

    return(
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
    );
}

function Experience({experience}) {

    const jobs = experience.map(job => {
        return (
            <li>
                <div>{job.company}</div>
                <div>{job.roles}</div>
                <div>{job.startDate}</div>
                <div>{job.endDate}</div>
            </li>
        );
    });

    return (
        <div className="experience-info">
            <h2>Experience</h2>
            <ul>{jobs}</ul>
        </div>
        );
}

function Education({education}) {

    const schools = education.map(school => {
        return (
            <li>
                <div>{school.name}</div>
                <div>{school.degree}</div>
                <div>{school.startDate}</div>
                <div>{school.endDate}</div>
            </li>
        );
    });
    return (
        <div className="education-info">
            <h2>Education</h2>
            <ul>{schools}</ul>
        </div>
        );
}
