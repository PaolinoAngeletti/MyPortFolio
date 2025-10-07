import { Technology } from './technology.js';
import { getLanguagesTitle } from '../../repository/technologies/technologiesTypeRepository.js';

const content = `Nella mia esperienza ho utilizzato Python in più di un progetto, con le seguenti modalità:

1.	In ambito AWS, ho utilizzato Python per l’implementazione delle funzioni Lambda, che venivano poi esposte tramite le apposite API Gateway previste sempre nell’ambito AWS. In particolare, queste funzioni Lambda sono state sviluppate con l’utilizzo della libreria boto3, utile per l'interazione con gli altri servizi AWS (esempio database, storage, ecc.).

2.	Nel progetto 360FlowVehicle, Python era il linguaggio di programmazione con cui l’intero progetto è stato sviluppato. I moduli sviluppati venivano poi containerizzati in ambito Docker. In questo contesto è stato utilizzato anche un server Flask per simulare richieste HTTP.
`;

export class Python extends Technology {
    constructor() {
        super("Python", getLanguagesTitle(), content);
    }
}