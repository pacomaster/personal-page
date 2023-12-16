export default function Certifications({certifications}){
    return (
        <div id="certifications">
            <h1>Certifications</h1>
            <ul>
                {certifications.map(certification => (
                    <li>{certification.name} - {certification.school} : {certification.year}</li>
                ))}
            </ul>
        </div>
    );
}