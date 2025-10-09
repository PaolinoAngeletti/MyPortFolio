import { Technology } from './technology.js';
import { getHardwareTitle } from '../../repository/technologies/technologiesTypeRepository.js';

import { NegozioPerfetto } from '../projects/negozio_perfetto.js';
import { MBELab } from '../projects/mbe_lab.js';
import { MagazzinoPerfetto } from '../projects/magazzino_perfetto.js';

const content = `Ho utilizzato lo ZPL per creare etichette stampabili tramite stampanti Zebra, consentendomi di gestire le dimensioni delle etichette e altri aspetti legati alla funzionalità. Questo linguaggio si è dimostrato particolarmente utile per le stampe via Bluetooth, riducendo il carico di dati da inviare dal dispositivo alla stampante, ottimizzando così il processo di stampa.`;

export class ZPL extends Technology {
    constructor() {
        super("ZPL", getHardwareTitle(), content);
        this.setProjects(new NegozioPerfetto, new MBELab, new MagazzinoPerfetto);
    }
}