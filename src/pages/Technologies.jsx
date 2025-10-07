import { useEffect } from 'react';
import { retrieveAll } from '../repository/technologies/technologiesRepository';
import styles from './Home.module.css';

export default function Technologies() {

    const technologiesList = retrieveAll();

    // scroll effect when paragraph is detected in url path.
    useEffect(() => {
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
                <div id={technology.name} key={technology.name} className={styles.detail_title}>
                    <h3>{technology.name}</h3>
                    <p className={styles.information}>{technology.content}</p>
                </div>
            ))}
        </div>
    );
}