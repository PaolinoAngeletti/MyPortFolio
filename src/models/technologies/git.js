import { Technology } from './technology.js';
import { getFrameworkTitle } from '../../repository/technologies/technologiesTypeRepository.js';

const content = `Ho utilizzato GIT come strumento di versioning in tutti i progetti in cui ho lavorato.
La mia esperienza mi ha portato a utilizzare GIT in quasi tutte le sue funzionalità, lavorando su branch separati che venivano poi pushati sia tramite pull-request sia tramite commit diretti sul branch master.
Ho anche utilizzato la variante Git Flow, che permette di seguire un modello di branching strutturato e standardizzato, gestendo in modo chiaro e sicuro le fasi di sviluppo, release e hotfix. 
Questo approccio facilita il lavoro in team, riduce il rischio di conflitti e permette di mantenere sempre stabile il branch principale.`;

export class Git extends Technology {
    constructor() {
        super("Git", getFrameworkTitle(), content);
    }
}