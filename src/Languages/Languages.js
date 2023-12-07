import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../i18n/config';



export default function Languages({languages}) {
    const { i18n, t } = useTranslation();
    const [isChange, setIsChange] = useState("false");

    function changeLang(lang_code){
        i18n.changeLanguage(lang_code);
        setIsChange("true");
    }

    return (
        <div id="Languages" className="languages">
            <h1>Languages</h1>
            <ul>
                { Object.values(languages).map((description, key) => {
                    return (
                        <li data-testid={description.lang} key={key}>
                            <button data-testid={description.code} onClick={() => changeLang(description.code)}>{t(description.lang)}</button>
                        </li>
                        );
                })
                }
            </ul>
        </div>
        );
}