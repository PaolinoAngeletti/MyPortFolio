import { Technology } from './technology.js';
import { getMessageBrokersTitle } from '../../repository/technologies/technologiesTypeRepository.js';

import { Hmax } from '../projects/hmax.js';
import { Motion } from "../projects/360motion.js";

const content = `Ho utilizzato Apache Kafka nel progetto 360Motion per distribuire messaggi tra i diversi consumer dello streaming interno.
Per la gestione e il monitoraggio dei topic e dei messaggi in circolazione, ho utilizzato AKHQ, che ha permesso di leggere e analizzare facilmente i flussi di dati all’interno della piattaforma Kafka.

Nel progetto HMAX, Apache Kafka è stato utilizzato come data ingestion layer per i dati energetici in real-time, consentendo la gestione di flussi ad alta frequenza con migliaia di messaggi al secondo.`;

export class Kafka extends Technology {
    constructor() {
        super("Apache Kafka", getMessageBrokersTitle(), content);
        this.setProjects(new Motion, new Hmax);
    }
}