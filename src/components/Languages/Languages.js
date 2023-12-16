import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../../i18n/config';
import usFlag from './icons/icons8-usa-30.png';
import mxFlag from './icons/icons8-mexico-30.png';
import jpFlag from './icons/icons8-japan-30.png';

export default function Languages ({languages}) {
    const { i18n, t } = useTranslation();
    const [isChange, setIsChange] = useState("false");

    function changeLang(lang_code){
        i18n.changeLanguage(lang_code);
        setIsChange("true");
    }

    function getIcon(code){
        if (code == "en"){
            return usFlag;
        } else if (code == "es"){
            return mxFlag;
        } else if (code == "ja"){
            return jpFlag;
        }
        return usFlag;
    }

    return (
        <div id="Languages" className="languages">
            <h1 data-testid="test-language">{t("language")}</h1>
            <ul>
                { Object.values(languages).map((description, key) => {
                    return (
                        <span key={key}>
                            <img src={getIcon(description.code)} />
                            <a data-testid={description.code}  onClick={() => changeLang(description.code)}>{t(description.lang)}</a>
                        </span>
                        );
                })
                }
            </ul>
        </div>
        );
}
