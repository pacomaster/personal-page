import passportPhoto from './img/passport.jpg';

export default function PersonalInfo ({name, birthday, phone, email, description}) {
    return (
        <div id="PersonalInfo" className="personal-info">
            <h1>{name}</h1>
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