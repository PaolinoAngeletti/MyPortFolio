import { Technology } from './technology.js';
import { getContainerTitle } from '../../repository/technologies/technologiesTypeRepository.js';

import { MBELab } from '../projects/mbe_lab.js';
import { MagazzinoPerfetto } from '../projects/magazzino_perfetto.js';
import { FlowVehicle } from '../projects/360flow_vehicle.js';
import { Motion } from '../projects/360motion.js';

const content = `Nella mia esperienza ho lavorato in maniera massiccia con Docker, utilizzando questa tecnologia in due modalità principali:

1.	Sviluppo di app mobile con integrazione AWS: ho utilizzato Docker per creare container a partire da script sviluppati in PHP. 
Le immagini generate venivano poi caricate su AWS tramite il servizio AWS Batch, utilizzato per eseguire job schedulati e non, consentendo di processare operazioni anche di lunga durata, che potevano richiedere diverse ore.

2.	Progetti Hitachi 360Flow e 360Motion: ho impiegato Docker nella sua funzione principale, ossia la containerizzazione di servizi Java, permettendone l’esecuzione sia in locale sia in ambiente di produzione tramite Kubernetes. 
In questo contesto ho utilizzato Docker Compose per buildare e orchestrare i vari container in maniera efficiente.`;

export class Docker extends Technology {
    constructor() {
        super("Docker", getContainerTitle(), content);
        this.setProjects(new MBELab, new MagazzinoPerfetto, new FlowVehicle, new Motion);
    }
}