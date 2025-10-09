import { Technology } from './technology.js';
import { getRelationalDatabaseTitle } from '../../repository/technologies/technologiesTypeRepository.js';

import { NegozioPerfetto } from '../projects/negozio_perfetto.js';
import { MBELab } from '../projects/mbe_lab.js';
import { MagazzinoPerfetto } from '../projects/magazzino_perfetto.js';

const content = `Database usato nei progetti NegozioPerfetto, MagazzinoPerfetto e MBE LAB come database in cloud per la storicizzazione di dati provenienti dalle APP Android.
Gli strumenti utilizzati sono stati:

•	Trigger
•	Stored function
•	Stored procedure
•	Indici

Nel progetto MagazzinoPerfetto, sono stati implementati trigger che invocavano chiamate API che a loro volta invocavano procedure lambda in AWS, per rendere disponibili web hook utili all’utente finale.
Questa soluzione ha consentito l'integrazione fluida con altre applicazioni e sistemi esterni, garantendo una gestione efficiente delle notifiche e degli aggiornamenti in tempo reale all'interno del magazzino.`;

export class MySQL extends Technology {
    constructor() {
        super("MySQL", getRelationalDatabaseTitle(), content);
        this.setProjects(new NegozioPerfetto, new MBELab, new MagazzinoPerfetto);
    }
}