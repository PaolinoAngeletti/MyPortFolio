import { Technology } from './technology.js';
import { Motion } from "../projects/360motion.js";
import { getFrameworkTitle } from '../../repository/technologies/technologiesTypeRepository.js';

const content = `Durante lo sviluppo del progetto 360Motion, ho contribuito alla realizzazione di un sistema basato su Spring Boot e architettura a microservizi, dove ciascun servizio era indipendente e comunicava con gli altri tramite Kafka.
Ho curato la definizione delle API REST, la gestione del data layer tramite Spring Data JPA e Hibernate, e la configurazione dei database PostgreSQL e Redis per la memorizzazione dei dati.
L’intero progetto è stato gestito e costruito con Maven, assicurando una solida integrazione tra i vari componenti.`;

export class SpringBoot extends Technology {
    constructor() {
        super("Spring Boot", getFrameworkTitle(), content);
        this.setProjects(new Motion);
    }
}