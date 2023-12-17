import passportPhoto from './img/passport.jpg';

export default function PersonalInfo ({name, birthday, phone, email, position}) {
    return (
        <div id="personal-info">
            <h1>{name}</h1>
            <div><img id='photo' src={passportPhoto} /></div>
            <div>
                <div>{position}</div>
                <div>{birthday.split("T")[0]}</div>
                <div>{phone}</div>
                <div>{email}</div>
            </div>
        </div>
        );
}