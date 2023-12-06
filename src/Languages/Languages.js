import { useTranslation } from 'react-i18next';
import '../i18n/config';



export default function Languages({languages}) {
    const { i18n, t } = useTranslation();

    function changeLang(lang_code){
        i18n.changeLanguage(lang_code);
    }

    return (
        <div id="Languages" className="languages">
            <h1>Languages</h1>
            <span>{t('japanese')}</span>
            <ul>
                { Object.values(languages).map((description, key) => {
                    return (<li data-testid={description} key={key}><button onClick={() => changeLang('ja')}>{t(description)}</button></li>);
                })
                }
            </ul>
        </div>
        );
}