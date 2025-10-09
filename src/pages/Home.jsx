import buildNavLink from '../utils/NavLinkUtils';
import { retrieveGroupedByType } from '../repository/technologies/technologiesRepository';

export default function Home() {

    const technologiesList = retrieveGroupedByType();
    const emailAddress = "paolinoangeletti@gmail.com";
    const linkedinUrl = "https://www.linkedin.com/in/paolino-angeletti-64484211b";

    return (
        <div>
            <h1>Paolino Angeletti</h1>

            <p>Ciao! Benvenuto nel mio portfolio &#128075;</p>
            <p>Il mio nome è Paolino Angeletti, sono uno sviluppatore Senior Back-End, con anche piccole esperienze nello sviluppo Front-End.</p>
            <p>In questa pagina troverete informazioni riassunte relative alle mie esperienze, informazioni che potranno poi essere approfondite in specifiche sezioni presenti in questo portfolio &#128521;</p>

            <h2>Informazioni personali</h2>

            <div className="detail_title">
                <h3>🎂 Data di nascita</h3>
                <p className="information">04 Maggio 1993</p>
            </div>

            <div className="detail_title">
                <h3>🌍 Nazionalità</h3>
                <p className="information">Italiana</p>
            </div>

            <div className="detail_title">
                <h3>💬 Livello Inglese</h3>
                <p className="information">B1</p>
            </div>

            <h2>Contatti</h2>

            <div className="detail_title">
                <h3>✉️ Email</h3>
                <p className="information">
                    <a className='information' href={`mailto:${emailAddress}`}>
                        {emailAddress}
                    </a>
                </p>
            </div>

            <div className="detail_title">
                <h3>📞 Cellulare</h3>
                <p className="information">+39 320.29.50.351</p>
            </div>

            <div className="detail_title">
                <h3>💼 Linkedin</h3>
                <p className="information">
                    <a className='information' href={linkedinUrl} target="_blank">
                        {linkedinUrl}
                    </a>
                </p>
            </div>

            <h2>Istruzione</h2>

            <div className="detail_title">
                <h3>Laurea Triennale in Informatica</h3>
                <p className="information">Università Federico II, Napoli • 2012 - 2016 • Votazione: 100/110</p>
            </div>

            <div className="detail_title">
                <h3>Diploma Perito Commerciale e Programmatore</h3>
                <p className="information">ITCG Masullo-Theti, Nola (NA) • 2009 - 2012 • Votazione: 74/100</p>
            </div>

            <h2>Esperienze professionali</h2>

            <div className="detail_title">
                <h3>Teoresi Group S.p.A. (Consultant @ Hitachi Rail)</h3>
                <p className="information">Napoli • Giugno 2024 - presente</p>
                <ul>
                    <li>
                        Progetti: 360Motion, 360FlowVehicle (ambito Railway)
                    </li>
                    <li>
                        Sviluppo microservizi in Java Spring Boot e Python.
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
                    <li>
                        Sicurezza: Crittografia, Keycloak, JWT
                    </li>
                </ul>
            </div>

            <div className="detail_title">
                <h3>Advise S.R.L.</h3>
                <p className="information">Mugnano del Cardinale (AV) • Giugno 2016 - Gennaio 2024</p>
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

            <div className="detail_title">
                <h3>Software Business S.R.L.</h3>
                <p className="information">Mugnano del Cardinale (AV) • Tirocinio universitario • Marzo 2016 - Agosto 2016</p>
                <ul>
                    <li>
                        Progettazione e rilascio piattaforma ordini B2B integrata SAP
                    </li>
                </ul>
            </div>

            <h2>Competenze tecniche</h2>

            {Object.entries(technologiesList).map(([type, technologies]) => (
                <div className="detail_title" key={type}>
                    <h3>{type}</h3>
                    <div style={{ display: 'flex', gap: "10px" }}>
                        {technologies.map((technology) => (
                            buildNavLink(technology.name, "/technologies")
                        ))}
                    </div>
                </div>
            ))}

        </div>
    );
}