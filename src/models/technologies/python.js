import { Technology } from './technology.js';
import { getLanguagesTitle } from '../../repository/technologies/technologiesTypeRepository.js';

import { MBELab } from "../projects/mbe_lab.js";
import { FlowVehicle } from "../projects/360flow_vehicle.js";
import { TestCaseRunner } from "../projects/test_case_runner.js";
import { NegozioPerfetto } from "../projects/negozio_perfetto.js";
import { MagazzinoPerfetto } from "../projects/magazzino_perfetto.js";

const content = `Nella mia esperienza ho utilizzato Python in più di un progetto, con le seguenti modalità:

1.	In ambito AWS, ho utilizzato Python per l’implementazione delle funzioni Lambda, che venivano poi esposte tramite le apposite API Gateway previste sempre nell’ambito AWS. In particolare, queste funzioni Lambda sono state sviluppate con l’utilizzo della libreria boto3, utile per l'interazione con gli altri servizi AWS (esempio database, storage, ecc.).

2.	Nel progetto 360FlowVehicle, Python era il linguaggio di programmazione con cui l’intero progetto è stato sviluppato. I moduli sviluppati venivano poi containerizzati in ambito Docker. In questo contesto è stato utilizzato anche un server Flask per simulare richieste HTTP.

3.	Nel progetto TCR, mi sono occupato della migrazione del progetto da Python 2.7 a Python 3.9, andando a gestire anche casistiche in cui alcune librerie utilizzate dalla 2.7 non erano più supportate dalla versione 3.9.`;

export class Python extends Technology {
    constructor() {
        super("Python", getLanguagesTitle(), content);
        this.setProjects(new NegozioPerfetto, new MBELab, new MagazzinoPerfetto, new TestCaseRunner, new FlowVehicle);
    }
}