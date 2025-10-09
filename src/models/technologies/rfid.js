import { Technology } from './technology.js';
import { getHardwareTitle } from '../../repository/technologies/technologiesTypeRepository.js';
import { MagazzinoPerfetto } from '../projects/magazzino_perfetto.js';

const content = `Nel contesto del progetto MagazzinoPerfetto, ho applicato la tecnologia RFID per facilitare il tracciamento dell'entrata e dell'uscita della merce, nonché per semplificare le attività di inventario e il controllo dello stock in magazzino. 
In particolare, abbiamo utilizzato l'area di memoria EPC per memorizzare i dati univoci degli articoli, mentre il TID è stato sfruttato per monitorare il numero di rilevazioni dell'EPC specifico durante la lettura RFID.
L’integrazione RFID con l’APP è stata eseguita tramite SDK di Zebra.`;

export class RFID extends Technology {
    constructor() {
        super("RFID", getHardwareTitle(), content);
        this.setProjects(new MagazzinoPerfetto);
    }
}