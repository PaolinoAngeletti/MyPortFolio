import { Company } from './company.js';

const content = `La mia esperienza in questa azienda si può suddividere in due fasi:
All’inizio, le prime attività riguardavano la manutenzione degli applicativi già in produzione, scritti prevalentemente con tecnologia .NET e database SQL o MySQL.
In questa fase mi sono occupato sia dello sviluppo Back-End che Front-End, con l’ausilio delle classiche tecnologie HTML, CSS e Javascript. Nessun framework in particolare è stato utilizzato.
Dopo circa un anno dalla mia assunzione, sono stati avviati alcuni progetti per lo sviluppo di APP, nello specifico Android e Gestionali di magazzino (ambito logistico), di cui sono diventato, col tempo, Project Manager. I progetti vengono descritti più ampiamente nella sezione dedicata.
Queste APP sono state sviluppate, quindi, con l’utilizzo del framework Android e l’integrazione di alcuni servizi AWS.`;

export class Advise extends Company {
    constructor() {
        super("Advise S.R.L.", "Giugno 2016", "Gennaio 2024", "Mugnano del Cardinale (AV)", "https://www.advise.it", content);
    }
}