import { Technology } from './technology.js';
import { getPatternsTitle } from '../../repository/technologies/technologiesTypeRepository.js';

const content = `Il pattern Mediator è un pattern comportamentale che favorisce la comunicazione indiretta tra gli oggetti, promuovendo la debole dipendenza tra di essi. 
Un oggetto "Mediatore" facilita la comunicazione tra gli oggetti "Colleghi" attraverso una logica centralizzata, riducendo così il numero di connessioni dirette tra gli stessi. 
Questo pattern è stato utilizzato nel progetto 360Flow per facilitare la comunicazione tra componenti diversi del sistema.`;

export class Mediator extends Technology {
    constructor() {
        super("Mediator pattern", getPatternsTitle(), content);
    }
}