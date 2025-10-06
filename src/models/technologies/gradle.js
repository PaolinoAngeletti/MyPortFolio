import { Technology } from './technology.js';
import { getFrameworkTitle } from '../../repository/technologiesTypeRepository.js';

const content = `Ho utilizzato Gradle in vari progetti, in particolare nei progetti implementati tramite framework Android. La tecnologia veniva utilizzata ovviamente per la gestione delle dipendenze, il versioning dell’applicativo e la configurazione dei task di build, semplificando così il processo di compilazione e distribuzione dell’app.`;

export class Gradle extends Technology {
    constructor() {
        super("Gradle", getFrameworkTitle(), content);
    }
}