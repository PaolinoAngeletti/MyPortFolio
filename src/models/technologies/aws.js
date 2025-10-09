import { Technology } from './technology.js';
import { getCloudTitle } from '../../repository/technologies/technologiesTypeRepository.js';

import { NegozioPerfetto } from '../projects/negozio_perfetto.js';
import { MBELab } from '../projects/mbe_lab.js';
import { MagazzinoPerfetto } from '../projects/magazzino_perfetto.js';

const content = `Ho utilizzato i servizi AWS durante le mie esperienze di sviluppo mobile Android.
Di seguito i servizi usati che la piattaforma mette a disposizione:

Aurora DB

Gestione di un database relazionale basato su MySQL.
In un contesto AWS, i dati venivano interrogati esclusivamente tramite Lambda, che eseguivano le query, trasformavano i dati e li restituivano al chiamante. 
Questo approccio ha permesso di mantenere sicuro l’accesso al database e di garantire una gestione scalabile e serverless delle operazioni di lettura e scrittura.

Dynamo DB

Gestione di un database non relazionale serverless basato su struttura key-value.
Questa soluzione è stata utilizzata per la storicizzazione di dati che non era possibile gestire in un database relazionale, come ad esempio documenti JSON. 
Per alcune entità, infatti, uno degli attributi conteneva un JSON; per queste entità è stata quindi scelta la storicizzazione su DynamoDB anziché su Aurora, garantendo maggiore flessibilità e scalabilità nella gestione dei dati.

Lambda

Servizio di elaborazione che consente di eseguire del codice senza la necessità di effettuare il provisioning o la gestione dei server.
Questo codice storicizzato è poi invocabile tramite API o tramite SDK Amazon.
Il codice per le funzioni di lambda può essere scritto con una lista di linguaggio che la piattaforma mette a disposizione, e nello specifico ho usato: Python e NodeJS.
Le lambda sviluppate, in genere, avevano la responsabilità di accedere ai database previsti, estrarre dati, trasformarli e restituirli al chiamante tramite API.

API Gateway

Servizio AWS per la creazione, la pubblicazione, la gestione, il monitoraggio e la protezione di API REST, HTTP e WebSocket a qualsiasi livello. 
Gli sviluppatori di API possono creare API in grado di accedere ad AWS o ad altri servizi Web, nonché ai dati archiviati nel cloud AWS.
In particolare, nella mia esperienza, ho sempre provveduto a collegare una API ad una funzione Lambda specifica.

Cognito

Piattaforma di identità per app Web e per dispositivi mobili, utile a gestire l'accesso al sistema tramite credenziali.
È una directory utente, un server di autenticazione e un servizio di autorizzazione per i token di accesso OAuth 2.0 e le credenziali AWS. 

S3 (Amazon Simple Storage Service)

Servizio Amazon dedicato alla archiviazione e gestione di una serie di documenti e file generici previsti dal sistema in implementazione.
Ho gestito nel tempo sia bucket privati che pubblici, in base alla richiesta utente.

Cloud Watch

Servizio di monitoraggio di AWS per le risorse cloud e le applicazioni in esecuzione su AWS. 
Ho utilizzato Amazon CloudWatch per raccogliere e tenere traccia dei parametri, raccogliere e monitorare file di log prodotti dai vari servizi gestiti nel tempo.
Esempio: visualizzare i log prodotti da una specifica funzione lambda.

Batch

Servizio AWS utilizzato per eseguire processi di lunga durata.
Ho utilizzato batch per eseguire, ad esempio, calcoli notturni statistici che in altre condizioni avrebbero impiegato troppo tempo e risorse.
Questi job potevano essere schedulati (esempio ogni notte) o eseguiti su richiesta (esempio l’esportazione in CSV dei dati di magazzino).

ECR (Amazon Elastic Container Registry)

Servizio di registro delle immagini container.
Le immagini che ho caricato in ECR erano sviluppate tramite Docker e poi caricate in ECR come repository private.
Tale servizio è stato usato per poter avviare le suddette immagini Docker tramite AWS Batch.`;

export class AWS extends Technology {
    constructor() {
        super("AWS Amazon Cloud", getCloudTitle(), content);
        this.setProjects(new NegozioPerfetto, new MBELab, new MagazzinoPerfetto);
    }
}