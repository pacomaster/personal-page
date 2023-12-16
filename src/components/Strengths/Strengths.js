export default function Strengths({strengths}){
    return (
        <div id="strengths">
            <h1>Strengths</h1>
            <ul>
                {strengths.map(strength => (
                    <li>{strength.title} - {strength.summary}</li>
                ))}
            </ul>
        </div>
    );
}