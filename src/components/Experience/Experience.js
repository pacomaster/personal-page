import "./Experience.css"

export default function Experience({experience}){
    return (
        <div id="experience">
            <h1>Experience</h1>
            <ul id="experience_list">
                {experience.map(job => (
                    <li>
                        <div class="company_role">{job.role}</div>
                        <div class="company_name">{job.company}</div>
                        <span class="company_time">Time: {(new Date(job.startDate)).getFullYear()} - {(new Date(job.endDate)).getFullYear()}</span>
                        <span class="company_location">Location: {job.location}</span>
                        <div class="company_summary">{job.summary}</div>
                        <ul class="company_projects">
                            {job.projects.map(project => {return(<li class="company_project">{project}</li>)}) }

                        </ul>
                        <hr className="dotted"/>
                    </li>
                ))}
            </ul>
        </div>
    );
}