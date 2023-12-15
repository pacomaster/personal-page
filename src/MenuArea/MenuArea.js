import { HashLink } from 'react-router-hash-link';

export default function MenuArea(){
    return (
        <div className="menu">
            <span><HashLink to='#PersonalInfo'>Personal Info</HashLink></span>
            <span><HashLink to='#Timeline'>Timeline</HashLink></span>
            <span><HashLink to='#Languages'>Languages</HashLink></span>
        </div>

    );
}