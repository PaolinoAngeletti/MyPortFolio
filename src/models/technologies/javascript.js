import { Technology } from './technology.js';
import { getLanguagesTitle } from '../../repository/technologies/technologiesTypeRepository.js';

import { Movitel } from "../projects/movitel.js";
import { CRMO } from "../projects/crmo.js";
import { ApriUnTicket } from "../projects/apri_ticket.js";
import { FantaRegolamento } from '../projects/fantaregolamento.js';
import { MyPortFolio } from '../projects/my_portfolio.js';

const content = `Ho utilizzato JavaScript in diversi progetti lato front-end, in particolare nelle mie prime esperienze lavorative, dove ero responsabile dello sviluppo e della manutenzione di alcuni applicativi web.
In questa fase, l’utilizzo di JavaScript è stato di tipo tradizionale, in combinazione con HTML e CSS, senza l’impiego di framework particolari, per realizzare le funzionalità e l’interfaccia desiderate.
Successivamente ho utilizzato anche jQuery, per semplificare l’accesso e la manipolazione degli elementi del DOM.
Infine, in alcuni progetti personali, ho avuto modo di approfondire l’uso di React, implementando un’applicazione basata su JSX (JavaScript XML) per raggiungere gli obiettivi dell’applicazione.
Ho anche avuto modo di esplorare lo Unit Testing in Javascript, sfruttando il framework Jasmine.`;

export class Javascript extends Technology {
    constructor() {
        super("Javascript", getLanguagesTitle(), content);
        this.setProjects(new Movitel, new CRMO, new ApriUnTicket, new FantaRegolamento, new MyPortFolio);
    }
}