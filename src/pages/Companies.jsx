import useScrollToHash from '../utils/HookUtils';
import { retrieveAll } from '../repository/companies/companiesRepository';

export default function Companies() {

    useScrollToHash();
    const companiesList = retrieveAll();

    return (
        <div>
            <h1>Esperienze lavorative</h1>

            {companiesList.map((company) => (
                <div id={company.name} key={company.name} className="detail_title">
                    <h2>{company.name}</h2>

                    <div className="detail_title">
                        <h3>🗓️ Data inizio</h3>
                        <p className="information">{company.start}</p>
                    </div>

                    <div className="detail_title">
                        <h3>📅 Data fine</h3>
                        <p className="information">{company.end}</p>
                    </div>

                    <div className="detail_title">
                        <h3>📍 Luogo</h3>
                        <p className="information">{company.location}</p>
                    </div>

                    <div className="detail_title">
                        <h3>🌐 Sito Web</h3>
                        <p className="information">
                            <a href={company.webSite} target="_blank" >
                                {company.webSite}
                            </a>
                        </p>
                    </div>

                    <p className="information">{company.content}</p>
                </div>
            ))}
        </div>
    );
}