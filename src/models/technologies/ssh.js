import { Technology } from './technology.js';
import { getRemoteAccessTitle } from '../../repository/technologies/technologiesTypeRepository.js';
import { Hmax } from '../projects/hmax.js';

const content = `Ho utilizzato SSH per accedere e lavorare su diverse macchine virtuali Linux Red Hat 9, messe a disposizione del team di Hitachi Digital per attività di sviluppo.
Poiché queste macchine non avevano accesso a Internet, i file venivano trasferiti in modalità offline.`;

export class SSH extends Technology {
    constructor() {
        super("SSH", getRemoteAccessTitle(), content);
        this.setProjects(new Hmax);
    }
}