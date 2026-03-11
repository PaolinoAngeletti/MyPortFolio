import buildNavLink from '../utils/NavLinkUtils';
import { portfolioRepository } from '../repository/portfolioRepository';

export default function Home() {

    const emailAddress = "paolinoangeletti@gmail.com";
    const linkedinUrl = "https://www.linkedin.com/in/paolino-angeletti-64484211b";

    const companiesList = portfolioRepository.getCompanies(false);
    const technologiesList = portfolioRepository.getTechnologiesGroupedByType();

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

            {companiesList.map((company) => (
                <div key={company.name} className="detail_title">
                    <h3>{company.name}</h3>
                    <p className="information">
                        {company.location} • {company.start} - {company.end}
                    </p>

                    {company.activities && company.activities.length > 0 && (
                        <ul>
                            {company.activities.map((activity, index) => (
                                <li key={index}>{activity}</li>
                            ))}
                        </ul>
                    )}

                </div>
            ))}

            <h2>Competenze tecniche</h2>

            {technologiesList.map((group) => (
                <div className="detail_title" key={group.type}>
                    <h3>{group.title}</h3>

                    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                        {group.technologies.map((technology) => (
                            buildNavLink(technology.name, "/technologies")
                        ))}
                    </div>

                </div>
            ))}

        </div>
    );
}