import styles from './Home.module.css';

export default function Home() {
    return (
        <div>
            <h1>Paolino Angeletti</h1>

            <p>Ciao! Benvenuto nel mio portfolio &#128075;</p>
            <p>Il mio nome è Paolino Angeletti, sono uno sviluppatore Senior Back-End, con anche piccole esperienze nello sviluppo Front-End.</p>
            <p>In questa pagina troverete informazioni riassunte relative alle mie esperienze, informazioni che potranno poi essere approfondite in specifiche sezioni presenti in questo portfolio &#128521;</p>

            <h2>Informazioni personali</h2>

            <div class={styles.detail_title}>
                <h3>🎂 Data di nascita</h3>
                <p class={styles.information}>04 Maggio 1993</p>
            </div>

            <div class={styles.detail_title}>
                <h3>🌍 Nazionalità</h3>
                <p class={styles.information}>Italiana</p>
            </div>

            <div class={styles.detail_title}>
                <h3>💬 Livello Inglese</h3>
                <p class={styles.information}>B1</p>
            </div>

            <h2>Istruzione</h2>

            <div class={styles.detail_title}>
                <h3>Laurea Triennale in Informatica</h3>
                <p class={styles.information}>Università Federico II, Napoli • 2012–2016 • Votazione: 100/110</p>
            </div>
            
            <div class={styles.detail_title}>
                <h3>Diploma Perito Commerciale e Programmatore</h3>
                <p class={styles.information}>ITCG Masullo-Theti, Nola (NA) • 2009–2012 • Votazione: 74/100</p>
            </div>

            <h2>Esperienze professionali</h2>

            <div class={styles.detail_title}>
                <h3>Hitachi Rail (Consultant @ Teoresi Group S.p.A.)</h3>
                <p class={styles.information}>Napoli • Giugno 2024 – Ottobre 2025</p>
                <ul>
                    <li>
                        Progetto 360Motion
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
                        Progetto 360Motion
                    </li>
                    <li>
                        Protocolli: HTTP, MQTT
                    </li>
                </ul>
            </div>
        </div>
    );
}