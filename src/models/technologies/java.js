import { Technology } from './technology.js';
import { getLanguagesTitle } from '../../repository/technologies/technologiesTypeRepository.js';

import { Motion } from "../projects/360motion.js";

const content = `Nella mia esperienza ho utilizzato Java in più di un progetto, ma principalmente in due modi:

1. Sviluppo di applicazioni mobile in ambito logistico, quindi sfruttando il framework previsto dallo sviluppo Android. 
Per ulteriori dettagli relativi alle mie esperienze Android, si può far riferimento alla apposita sezione.

2. Sviluppo di micro servizi in Java tramite framework Spring Boot.`;

export class Java extends Technology {
    constructor() {
        super("Java", getLanguagesTitle(), content);
        this.setProjects(new Motion());
    }
}