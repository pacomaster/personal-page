import passportPhoto from '../img/passport.jpg';
import { HashLink } from 'react-router-hash-link';

export default function PersonalInfo ({name, birthday, phone, email, description}) {
    return (
        <div id="PersonalInfo" className="personal-info">
            <h1>{name}</h1>
            <MenuArea />
            <div><img id='photo' src={passportPhoto} /></div>
            <div>
                <div>{birthday.split("T")[0]}</div>
                <div>{phone}</div>
                <div>{email}</div>
            </div>
            <div className="description">{description}</div>
        </div>
        );
}

function MenuArea(){
    return (
        <div className="menu">
            <span><HashLink to='#PersonalInfo'>Personal Info</HashLink></span>
            <span><HashLink to='#Timeline'>Timeline</HashLink></span>
            <span><HashLink to='#Languages'>Languages</HashLink></span>
        </div>

    );
}