import { Technology } from './technology.js';
import { Motion } from "../projects/360motion.js";
import { getMessageBrokersTitle } from '../../repository/technologies/technologiesTypeRepository.js';

const content = `Ho utilizzato Apache Kafka nel progetto 360Motion per distribuire messaggi tra i diversi consumer dello streaming interno.
Per la gestione e il monitoraggio dei topic e dei messaggi in circolazione, ho utilizzato AKHQ, che ha permesso di leggere e analizzare facilmente i flussi di dati all’interno della piattaforma Kafka.`;

export class Kafka extends Technology {
    constructor() {
        super("Apache Kafka", getMessageBrokersTitle(), content);
        this.setProjects(new Motion);
    }
}