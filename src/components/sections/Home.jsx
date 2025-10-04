import styles from './Home.module.css';
import { retrieveGroupedByType } from '../../repository/technologiesRepository';
import Card from '../graphic/Card';

export default function Home({handleCardClick}) {

    const technologiesList = retrieveGroupedByType();

    return (
        <div>
            <h1>Paolino Angeletti</h1>

            <p>Ciao! Benvenuto nel mio portfolio &#128075;</p>
            <p>Il mio nome è Paolino Angeletti, sono uno sviluppatore Senior Back-End, con anche piccole esperienze nello sviluppo Front-End.</p>
            <p>In questa pagina troverete informazioni riassunte relative alle mie esperienze, informazioni che potranno poi essere approfondite in specifiche sezioni presenti in questo portfolio &#128521;</p>

            <h2>Informazioni personali</h2>

            <div className={styles.detail_title}>
                <h3>🎂 Data di nascita</h3>
                <p className={styles.information}>04 Maggio 1993</p>
            </div>

            <div className={styles.detail_title}>
                <h3>🌍 Nazionalità</h3>
                <p className={styles.information}>Italiana</p>
            </div>

            <div className={styles.detail_title}>
                <h3>💬 Livello Inglese</h3>
                <p className={styles.information}>B1</p>
            </div>

            <h2>Istruzione</h2>

            <div className={styles.detail_title}>
                <h3>Laurea Triennale in Informatica</h3>
                <p className={styles.information}>Università Federico II, Napoli • 2012 - 2016 • Votazione: 100/110</p>
            </div>

            <div className={styles.detail_title}>
                <h3>Diploma Perito Commerciale e Programmatore</h3>
                <p className={styles.information}>ITCG Masullo-Theti, Nola (NA) • 2009 - 2012 • Votazione: 74/100</p>
            </div>

            <h2>Esperienze professionali</h2>

            <div className={styles.detail_title}>
                <h3>Hitachi Rail (Consultant @ Teoresi Group S.p.A.)</h3>
                <p className={styles.information}>Napoli • Giugno 2024 - Ottobre 2025</p>
                <ul>
                    <li>
                        Progetto: 360Motion
                    </li>
                    <li>
                        Sviluppo microservizi in Java Spring Boot
                    </li>
                    <li>
                        Utilizzo avanzato di: Docker, Kafka, Keycloak, Redis, PostgreSQL, AKHQ, JMeter, SonarQube, Test Containers
                    </li>
                    <li>
                        Progettazione e refactoring SDK e librerie interne
                    </li>
                    <li>
                        Gestione test di integrazione tramite libreria proprietaria Test Core
                    </li>
                    <li>
                        Protocolli: HTTP, MQTT
                    </li>
                </ul>
            </div>

            <div className={styles.detail_title}>
                <h3>Hitachi Rail (Consultant @ Teoresi Group S.p.A.)</h3>
                <p className={styles.information}>Napoli • Gennaio 2024 - Aprile 2024</p>
                <ul>
                    <li>
                        Progetto: 360FlowVehicle
                    </li>
                    <li>
                        Sviluppo microservizi in Python
                    </li>
                    <li>
                        Utilizzo avanzato di Docker
                    </li>
                    <li>
                        Sicurezza: crittografia, MQTT, autenticazione
                    </li>
                </ul>
            </div>

            <div className={styles.detail_title}>
                <h3>Advise S.R.L.</h3>
                <p className={styles.information}>Mugnano del Cardinale (AV) • Giugno 2016 - Gennaio 2024</p>
                <ul>
                    <li>
                        Progetti Android (Java) & Back end (Node.js, Python)
                    </li>
                    <li>
                        Project Manager su vari gestionali (NegozioPerfetto, MBE LAB, MagazzinoPerfetto)
                    </li>
                    <li>
                        Integrazione con AWS, RFID, Blockchain, WooCommerce
                    </li>
                    <li>
                        Realizzazione APP offline-first sincronizzate con MySQL/DynamoDB
                    </li>
                    <li>
                        API REST, notifiche push (Firebase), stampa Bluetooth (ZPL)
                    </li>
                </ul>
            </div>

            <div className={styles.detail_title}>
                <h3>Software Business S.R.L.</h3>
                <p className={styles.information}>Mugnano del Cardinale (AV) • Tirocinio universitario • Marzo 2016 - Agosto 2016</p>
                <ul>
                    <li>
                        Progettazione e rilascio piattaforma ordini B2B integrata SAP
                    </li>
                </ul>
            </div>

            <h2>Competenze tecniche</h2>

            {Object.entries(technologiesList).map(([type, technologies]) => (
                <div className={styles.detail_title} key={type}>
                    <h3>{type}</h3>
                    <div style={{ display: 'flex' }}>
                        {technologies.map((technology) => (
                            <Card
                                key={technology.name}
                                title={technology.name} onClick={() => handleCardClick("Tecnologie", "Java")}
                            />
                        ))}</div>
                </div>
            ))}

        </div>
    );
}