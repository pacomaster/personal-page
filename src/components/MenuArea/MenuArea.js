import { HashLink } from 'react-router-hash-link';

export default function MenuArea(){
    return (
        <div className="menu">
            <span><HashLink to='#personal-info'>Personal Info</HashLink></span>
            <span><HashLink to='#summary'>Summary</HashLink></span>
            <span><HashLink to='#experience'>Experience</HashLink></span>
            <span><HashLink to='#education'>Education</HashLink></span>
            <span><HashLink to='#skills'>Skills</HashLink></span>
            <span><HashLink to='#strengths'>Strengths</HashLink></span>
            <span><HashLink to='#certifications'>Certifications</HashLink></span>
        </div>

    );
}