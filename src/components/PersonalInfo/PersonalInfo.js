import './PersonalInfo.css';
import passportPhoto from './img/passport.png';
import githubIcon from './icons/icons8-github-50.png';
import linkedInIcon from './icons/icons8-linked-in-64.png';

export default function PersonalInfo ({name, birthday, email, position, github, linkedIn}) {
    return (
        <div id="personal-info">
            <h1>{name}</h1>
            <div><img id='photo' src={passportPhoto} /></div>
            <div>
                <div class="position">{position}</div>
                <div>{birthday.split("T")[0]}</div>
                <div>{email}</div>
                <div>
                    <table class="links">
                        <tr>
                            <td>
                                <div><a href={github}><img class="link_icon" src={githubIcon}/></a></div>
                                <div>Github</div>
                            </td>
                            <td>
                                <div><a href={linkedIn}><img class="link_icon" src={linkedInIcon}/></a></div>
                                <div>LinkedIn</div>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        );
}