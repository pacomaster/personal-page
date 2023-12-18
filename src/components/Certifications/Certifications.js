import "./Certifications.css";

export default function Certifications({certifications}){
    return (
        <div id="certifications">
            <h1>Certifications</h1>
            <ul id="certifications_list">
                {certifications.map(certification => (
                    <li className="certification">
                        <div className="certification_name">{certification.name}</div>
                        <div className="certification_school">{certification.school} - {certification.year}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
}