import { Project } from './project.js';
import { SoftwareBusiness } from '../companies/software_business.js'

const content = `Questa applicazione è stata implementata durante il mio tirocinio aziendale.
Essa nasce dall'esigenza dei clienti finali di ordinare merce in autonomia, e quindi l'applicativo, implementato in stile Master-detail, mostrava la lista di articoli acquistabili e la gestione di un carrello finale.
Dopodiché, ad ordine completo, esso veniva esportato nel sistema SAP di riferimento.
Le richieste verso il server SAP venivano eseguite tramite API REST.

Tecnologie
•	HTML, CSS, Javascript per la parte front-end.
•	XML e JSON per lo scambio di dati.
•	API per creare l’ordine nel sistema cliente previsto.
•	SAP WEB IDE come strumento di programmazione.`;

export class AcquistoMerciCreazioneOrdiniSap extends Project {
    constructor() {
        super("Acquisto Merci - Creazione Ordini", new SoftwareBusiness(), null, content);
    }
}