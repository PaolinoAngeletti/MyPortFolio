import { Technology } from './technology.js';
import { getFrameworkTitle } from '../../repository/technologies/technologiesTypeRepository.js';

const content = `Per il progetto 360Motion ho utilizzato Maven per la gestione centralizzata delle dipendenze e il versionamento dei vari servizi. Il sistema di build supportava, per alcuni servizi, output multipli, includendo sia un applicativo eseguibile sia una libreria, ottimizzando compilazione e distribuzione.`;

export class Maven extends Technology {
    constructor() {
        super("Maven", getFrameworkTitle(), content);
    }
}