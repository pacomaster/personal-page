export default function Education({education}){
    return (
        <div id="education">
            <h1>Education</h1>
            <ul>
                {education.map(school => (
                    <li>{school.name} : {(new Date(school.startDate)).getFullYear()} - {(new Date(school.endDate)).getFullYear()}</li>
                ))}
            </ul>
        </div>
    );
}