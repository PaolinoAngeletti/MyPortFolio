import { Technology } from './technology.js';
import { getMessageBrokersTitle } from '../../repository/technologies/technologiesTypeRepository.js';

import { Motion } from "../projects/360motion.js";
import { FlowVehicle } from '../projects/360flow_vehicle.js';

const content = `MQTT è un protocollo di messaggistica leggero basato su publish/subscribe, progettato per reti con larghezza di banda limitata e connessioni intermittenti.
Nei progetti 360Flow Veicolo e 360Motion, ho utilizzato MQTT per consentire ai veicoli in movimento di inviare ai componenti centralizzati dati come vehicle-congestion, vehicle-position e simili.
Questo protocollo è stato scelto perché, ad alte velocità, la connettività potrebbe non essere garantita; MQTT è progettato proprio per garantire la comunicazione anche in presenza di connessioni instabili o di scarsa qualità.`;

export class MQTT extends Technology {
    constructor() {
        super("MQTT", getMessageBrokersTitle(), content);
        this.setProjects(new FlowVehicle, new Motion);
    }
}