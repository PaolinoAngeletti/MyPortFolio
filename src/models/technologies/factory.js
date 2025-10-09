import { Technology } from './technology.js';
import { getPatternsTitle } from '../../repository/technologies/technologiesTypeRepository.js';

const content = `Il Factory pattern è un pattern creazionale che consente di creare oggetti senza specificare esplicitamente la classe concreta di ogni oggetto. 
Questo è possibile attraverso l'utilizzo di un'interfaccia o di una classe astratta che definisce un metodo per la creazione di oggetti. 
Le classi concrete che implementano questa interfaccia decidono quale tipo di oggetto istanziare, in base alle esigenze dell'applicazione. 
Questo pattern è ampiamente utilizzato nei progetti 360Flow e 360Motion per gestire la creazione dinamica di vari tipi di oggetti in modo flessibile e scalabile, permettendo una migliore separazione delle responsabilità e facilitando l'estensione del sistema con nuovi tipi di oggetti.`;

export class Factory extends Technology {
    constructor() {
        super("Factory pattern", getPatternsTitle(), content);
    }
}