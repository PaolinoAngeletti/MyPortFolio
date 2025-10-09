import { Technology } from './technology.js';
import { NegozioPerfetto } from '../projects/negozio_perfetto.js';
import { getNoSqlDatabaseTitle } from '../../repository/technologies/technologiesTypeRepository.js';

const content = `Amazon DynamoDB è un servizio di database NoSQL gestito, offerto da AWS, progettato per garantire prestazioni veloci e scalabili. 
È altamente disponibile, supporta dati strutturati in tabelle, ed è ottimizzato per applicazioni che richiedono basse latenze e alta velocità nelle operazioni di lettura e scrittura.
Nel progetto NegozioPerfetto, è stato usato DynamoDB per la storicizzazione di alcuni tipi di entità, come ad esempio documenti JSON da associare a specifiche transazioni di magazzino storicizzate, invece, in MySQL.`;

export class DynamoDB extends Technology {
    constructor() {
        super("DynamoDB", getNoSqlDatabaseTitle(), content);
        this.setProjects(new NegozioPerfetto);
    }
}