import { Technology } from './technology.js';
import { getFrameworkTitle } from '../../repository/technologies/technologiesTypeRepository.js';

import { MBELab } from "../projects/mbe_lab.js";
import { NegozioPerfetto } from "../projects/negozio_perfetto.js";
import { MagazzinoPerfetto } from "../projects/magazzino_perfetto.js";

const content = `Ho utilizzato Gradle in vari progetti, in particolare nei progetti implementati tramite framework Android. La tecnologia veniva utilizzata ovviamente per la gestione delle dipendenze, il versioning dell’applicativo e la configurazione dei task di build, semplificando così il processo di compilazione e distribuzione dell’app.`;

export class Gradle extends Technology {
    constructor() {
        super("Gradle", getFrameworkTitle(), content);
        this.setProjects(new NegozioPerfetto, new MBELab, new MagazzinoPerfetto);
    }
}