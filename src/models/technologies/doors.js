import { Technology } from './technology.js';
import { getDocumentationTitle } from '../../repository/technologies/technologiesTypeRepository.js';
import { Motion } from '../projects/360motion.js';

const content = `IBM Engineering Requirements Management DOORS è uno strumento di gestione dei requisiti ampiamente utilizzato nel settore dell'ingegneria e dello sviluppo di software.
Ho utilizzato questo strumento per gestire i requisiti del progetto 360 Motion.`;

export class Doors extends Technology {
    constructor() {
        super("Doors", getDocumentationTitle(), content);
        this.setProjects(new Motion);
    }
}