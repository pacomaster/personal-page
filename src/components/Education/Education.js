import "./Education.css";

export default function Education({education}){
    return (
        <div id="education">
            <h1>Education</h1>
            <ul id="education_list">
                {education.map(school => (
                    <li>
                        <div class="school_degree">{school.degree}</div>
                        <div class="school_name">{school.abbreviation}</div>
                        <div class="school_grade">{school.grade} / 10</div>
                        <hr className="dotted"/>
                    </li>
                ))}
            </ul>
        </div>
    );
}