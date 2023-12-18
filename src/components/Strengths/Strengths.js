import "./Strengths.css";

export default function Strengths({strengths}){
    return (
        <div id="strengths">
            <h1>Strengths</h1>
            <ul id="strengths_list">
                {strengths.map(strength => (
                    <li className="strength">
                        <div className="strength_name">{strength.title}</div>
                        <div className="strength_summary">{strength.summary}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
}