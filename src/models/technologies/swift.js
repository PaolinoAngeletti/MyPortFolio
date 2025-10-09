import { Technology } from './technology.js';
import { QLMobile } from '../projects/ql_mobile.js';
import { getLanguagesTitle } from '../../repository/technologies/technologiesTypeRepository.js';

const content = `Ho utilizzato il linguaggio Swift per lo sviluppo dell’app mobile QL-Mobile.
Si tratta dell’unico progetto in cui ho impiegato questo linguaggio, ma l’esperienza mi ha permesso di acquisire familiarità sia con Swift sia con l’IDE Xcode di Apple.
Ho approfondito le best practice di sviluppo iOS, realizzando un’interfaccia fluida e funzionale, integrando API esterne e gestendo un database locale per la memorizzazione di dati persistenti, come le impostazioni utente.`;

export class Swift extends Technology {
    constructor() {
        super("Swift", getLanguagesTitle(), content);
        this.setProjects(new QLMobile);
    }
}