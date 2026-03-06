import { Project } from './project.js';
import { Hitachi } from '../companies/hitachi.js'

const content = `HMAX è una piattaforma di gestione digitale delle risorse di Hitachi Rail. 
HMAX consente di prevedere i problemi, ottimizzare la rete e trasformare le operazioni, su flotte di treni, sistemi di segnalamento e infrastrutture.

In questo immenso progetto, ho contributo allo sviluppo di una piattaforma Energy Management System (enMS) per la raccolta e l’analisi di dati di consumo energetico e idrico, con generazione di KPI energetici conformi allo standard ISO 50001.

Responsabile del coordinamento tecnico tra team internazionali (Hitachi Digital Vietnam) e della traduzione dei requisiti funzionali in specifiche architetturali e tecniche per l’implementazione.

Definizione e supervisione dell’implementazione di un’architettura data-driven capace di gestire ingestione dati sia real-time che batch, pipeline di elaborazione dei dati e calcolo dei KPI energetici.

L’infrastruttura di sviluppo e deploy era basata su ambienti virtualizzati accessibili via SSH, con pipeline di sviluppo e integrazione continua.

Competenze: Java · Spring · Python · Kafka · PostgreSQL · Apache Airflow · Kubernetes · Git · Secure Shell (SSH) · Linux · Red Hat Linux`;

export class Hmax extends Project {
    constructor() {
        super("HMAX", new Hitachi(), "https://www.hitachirail.com/products-and-solutions/digital-asset-management/", content);
    }
}