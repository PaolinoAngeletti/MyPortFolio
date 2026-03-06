import { Technology } from './technology.js';
import { Hmax } from "../projects/hmax.js";
import { getOrchestratorTitle } from '../../repository/technologies/technologiesTypeRepository.js';

const content = `Apache Airflow è una piattaforma open-source utilizzata per orchestrare, schedulare e monitorare workflow, spesso impiegata nella gestione di pipeline di dati.
Permette di definire flussi di lavoro come DAG in Python, coordinando l’esecuzione di task tra loro dipendenti, come processi ETL, elaborazioni batch o pipeline di analytics.
Nel progetto HMAX l’ho utilizzato per schedulare processi ETL sui dati e gestire l’ingestion batch dei dati energetici nel contesto del prodotto Lumada.`;

export class Airflow extends Technology {
    constructor() {
        super("Apache Airflow", getOrchestratorTitle(), content);
        this.setProjects(new Hmax);
    }
}