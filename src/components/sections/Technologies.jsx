import { retrieveAll } from '../../repository/technologiesRepository';

import styles from './Home.module.css';
import { useEffect } from 'react';

export default function Technologies() {

    const technologiesList = retrieveAll();

    useEffect(() => {
        // Se c'è un hash nell'URL, scrolla al paragrafo corrispondente
        if (window.location.hash) {
            const id = window.location.hash.replace('#', '');
            const el = document.getElementById(id);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, []);

    return (
        <div>
            <h1>Stack tecnologico</h1>

            {technologiesList.map((technology) => (
                <div id={technology.name} className={styles.detail_title}>
                    <h3>{technology.name}</h3>
                    <p className={styles.information}>{technology.description()}</p>
                </div>
            ))}
        </div>
    );
}