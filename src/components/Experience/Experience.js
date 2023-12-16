export default function Experience({experience}){
    return (
        <div id="experience">
            <h1>Experience</h1>
            <ul>
                {experience.map(job => (
                    <li>{job.company} : {(new Date(job.startDate)).getFullYear()} - {(new Date(job.endDate)).getFullYear()}</li>
                ))}
            </ul>
        </div>
    );
}