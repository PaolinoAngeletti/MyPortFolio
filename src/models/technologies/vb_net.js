import { Technology } from './technology.js';
import { getLanguagesTitle } from '../../repository/technologies/technologiesTypeRepository.js';

import { CRMO } from '../projects/crmo.js';
import { Movitel } from '../projects/movitel.js';
import { ApriUnTicket } from '../projects/apri_ticket.js';

const content = `Ho avuto modo di utilizzare il linguaggio VB.NET nei primi anni della mia esperienza lavorativa, occupandomi inizialmente della manutenzione di applicativi già in produzione al momento della mia assunzione.
Con il tempo, ho esteso le mie competenze sviluppando nuove funzionalità e partecipando all’evoluzione dei moduli esistenti, migliorandone prestazioni e stabilità.
Questa esperienza mi ha permesso di approfondire la programmazione ad oggetti in ambiente .NET, l’interazione con database SQL Server e la gestione del ciclo di vita del software in contesti aziendali strutturati.`;

export class VBNet extends Technology {
    constructor() {
        super("VB.NET", getLanguagesTitle(), content);
        this.setProjects(new Movitel, new CRMO, new ApriUnTicket);
    }
}