import { Technology } from './technology.js';
import { Motion } from "../projects/360motion.js";
import { getLanguagesTitle } from '../../repository/technologies/technologiesTypeRepository.js';

const content = `Ho utilizzato il linguaggio BeanShell per le attività di test automation del progetto 360Motion, basato sull’uso del software Apache JMeter.
Quindi linguaggio utilizzato solamente per scripting, e non a livello di progetto.`;

export class BeanShell extends Technology {
    constructor() {
        super("BeanShell", getLanguagesTitle(), content);
        this.setProjects(new Motion);
    }
}