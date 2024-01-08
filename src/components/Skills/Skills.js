import "./Skills.css"

export default function Skills({skills}){
    return (
        <div id="skills">
            <h1>Skills</h1>
            <div class="columns3">
                <ul id="skill_list">
                    {skills.map(skill => (
                        <li class="skill_name">{skill.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}