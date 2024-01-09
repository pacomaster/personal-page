import './PersonalInfo.css';
import passportPhoto from './img/passport.png';
import githubIcon from './icons/icons8-github-50.png';

export default function PersonalInfo ({name, birthday, phone, email, position, github}) {
    return (
        <div id="personal-info">
            <h1>{name}</h1>
            <div><img id='photo' src={passportPhoto} /></div>
            <div>
                <div class="position">{position}</div>
                <div>{birthday.split("T")[0]}</div>
                <div>{phone}</div>
                <div>{email}</div>
                <div><a href={github}><img src={githubIcon}/></a></div>
                <div>github</div>
            </div>
        </div>
        );
}