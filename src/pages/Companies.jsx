import useScrollToHash from '../utils/HookUtils';
import { retrieveAll } from '../repository/companies/companiesRepository';
import styles from './Home.module.css';

export default function Companies() {

    useScrollToHash();
    const companiesList = retrieveAll();

    return (
        <div>
            <h1>Esperienze lavorative</h1>

            {companiesList.map((company) => (
                <div id={company.name} key={company.name} className={styles.detail_title}>
                    <h2>{company.name}</h2>

                    <div className={styles.detail_title}>
                        <h3>🗓️ Data inizio</h3>
                        <p className={styles.information}>{company.start}</p>
                    </div>

                    <div className={styles.detail_title}>
                        <h3>📅 Data fine</h3>
                        <p className={styles.information}>{company.end}</p>
                    </div>

                    <div className={styles.detail_title}>
                        <h3>📍 Luogo</h3>
                        <p className={styles.information}>{company.location}</p>
                    </div>

                    <div className={styles.detail_title}>
                        <h3>🌐 Sito Web</h3>
                        <p className={styles.information}>
                            <a href={company.webSite} target="_blank" >
                                {company.webSite}
                            </a>
                        </p>
                    </div>

                    <p className={styles.information}>{company.content}</p>
                </div>
            ))}
        </div>
    );
}