export default function Skills({skills}){
    return (
        <div id="skills">
            <h1>Skills</h1>
            <ul>
                {skills.map(skill => (
                    <li>{skill.name}</li>
                ))}
            </ul>
        </div>
    );
}