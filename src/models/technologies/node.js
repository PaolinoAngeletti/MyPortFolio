import { Technology } from './technology.js';
import { getLanguagesTitle } from '../../repository/technologies/technologiesTypeRepository.js';

import { MBELab } from "../projects/mbe_lab.js";
import { NegozioPerfetto } from "../projects/negozio_perfetto.js";
import { MagazzinoPerfetto } from "../projects/magazzino_perfetto.js";

const content = `Ho utilizzato Node.js principalmente per la scrittura di script e funzioni serverless in AWS Lambda, sfruttando la sua capacità di gestire in modo efficiente eventi e richieste asincrone.
La mia esperienza con questo linguaggio è quindi più orientata allo scripting operativo che allo sviluppo di applicazioni complete: ho scritto codice per connettermi a database, elaborare dati e integrare servizi cloud, ma non mi sono occupato di aspetti come build, dipendenze o configurazioni complesse di progetto.

Le Lambda potevano essere scritte anche in Python, ma in alcuni casi si preferiva Node.js per la sua rapidità nel gestire operazioni I/O asincrone.
Ad esempio, ho realizzato una funzione che riceveva richieste API, interrogava un database DynamoDB, e restituiva i risultati in formato JSON in modo non bloccante, sfruttando le Promise e le funzioni async/await di Node.js.`;

export class NodeJS extends Technology {
    constructor() {
        super("Node.js", getLanguagesTitle(), content);
        this.setProjects(new NegozioPerfetto, new MBELab, new MagazzinoPerfetto);
    }
}