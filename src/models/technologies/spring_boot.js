import { Technology } from './technology.js';
import { getFrameworkTitle } from '../../repository/technologies/technologiesTypeRepository.js';

import { Hmax } from '../projects/hmax.js';
import { Motion } from "../projects/360motion.js";

const content = `Durante lo sviluppo del progetto 360Motion, ho contribuito alla realizzazione di un sistema basato su Spring Boot e architettura a microservizi, dove ciascun servizio era indipendente e comunicava con gli altri tramite Kafka.
Ho curato la definizione delle API REST, la gestione del data layer tramite Spring Data JPA e Hibernate, e la configurazione dei database PostgreSQL e Redis per la memorizzazione dei dati.
L’intero progetto è stato gestito e costruito con Maven, assicurando una solida integrazione tra i vari componenti.

Nel progetto HMAX, Spring Framework è stato utilizzato per sviluppare una dashboard web finalizzata alla visualizzazione e gestione dei KPI energetici prodotti dal sistema Lumada.`;

export class SpringBoot extends Technology {
    constructor() {
        super("Spring Boot", getFrameworkTitle(), content);
        this.setProjects(new Motion, new Hmax);
    }
}