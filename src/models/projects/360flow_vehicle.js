import { Project } from './project.js';
import { Hitachi } from '../companies/hitachi.js'

const content = `360Flow è un sistema a micro servizi per il conteggio delle persone a bordo veicolo. 
Il sistema è stato sviluppato in Python su più moduli che comunicano tra di loro tramite algoritmo MQTT e tramite l’esterno tramite HTTP e socket. 
Il sistema si interfaccia con la sensoristica per la manipolazione dei dati di congestionamento a bordo treno, dei dati di posizionamento e dei dati di diagnostica. 
I moduli sono sviluppati per container Docker su sistema operativo Windows. Il sistema utilizza dei sistemi per difendersi da attacchi informatici. Inoltre è presente la possibilità di interfacciamento diretto con il TCMS a bordo treno tramite un modulo sviluppato in C con protocollo TRDP. 
Inoltre è presente un modulo di AI per la rilevazione delle porte aperte o chiuse in caso di impossibilità di connessione con il TCMS. È stato sviluppato un proxy per consentire la connessione da parte di app terze, come ad esempio HMI per di manutenzione che permette l’invio di comandi al sistema o la lettura di dati da esso. È presente anche un database di tipo relazionale PostgreSQL il quale viene utilizzato per la configurazione dei dispositivi e per la storicizzazione dei dati. Si è dovuta gestire tutta la parte relativa alla sicurezza informatica per le comunicazioni in ingresso ed in uscita dal sistema, in particolare utilizzando certificazioni sulle comunicazioni, crittazione dei dati con chiavi simmetriche e asimmetriche e combinazioni utente password per l’autenticazione.

Tra i dati che la 360Flow raccoglie possiamo nominare:

•	Numero di persone entrate ed uscite ad una certa stazione per una certa porta del treno
•	Numero di persone che, durante il viaggio, ha cambiato la propria carrozza di viaggio.
•	Tipo di oggetti che occupano il treno, esempio biciclette, carrozzine, ecc.

360Flow prevede software sia per la parte veicolo (treno) che per la parte di stazione.
In particolare, ho lavorato alla parte di veicolo, eseguendo i seguenti sviluppi:

•	Implementazione delle operazioni CRUD sul database PostgreSQL.
•	Gestione del formato JSON dei messaggi che il modulo ActionCore (proxy) doveva prevedere.
•	Gestione dell’algoritmo di crittazione che doveva essere applicato ai messaggi da pubblicare tramite MQTT.
•	Sviluppo della libreria centralizzata per il logging del sistema.
•	Sviluppo di un componente del modulo di diagnostica, il FileArchiver, utile a gestire i log creati nel punto precedente. Di fatti, il FileArchiver verifica se i log abbiano superato una certa dimensione oppure una certa data di creazione, ed in tal caso vengono archiviati ed inviati al sistema esterno centrale.
•	Sviluppo del modulo DiagnosticReporter, modulo dedicato al monitoraggio di alcuni valori del sistema centrale.
Esempio, se la RAM della macchina a bordo treno supera alcuni limiti previsti, il sistema di controllo centrale deve essere allertato tramite messaggi HTTP e/o MQTT.

Le tecnologie e strumenti utilizzati sono stati:

•	Python come linguaggio di programmazione dei moduli, e PyCharm come IDE di sviluppo.
•	Docker per la creazione di immagini per ogni modulo previsto, così da rendere il funzionamento di un container (modulo) indipendente dal funzionamento degli altri.
•	CodeCommit + GIT per il versioning del progetto. Il team di sviluppo era composto da 7 persone lato veicolo, che potevano interagire anche sugli stessi file. In particolare, è stato usato Git Flow per assolvere alle funzionalità di versioning.
•	MQTT per lo scambio di messaggi tra i moduli.  Essendo questo un software da installare su macchina a bordo treno, la connessione poteva essere instabile, ecco perché si è scelto di usare questo protocollo anziché l’HTTP per lo scambio di messaggi.
•	PostgreSQL come database per i dati raccolti. È stato selezionato PostgreSQL come database a causa della sua capacità di gestire un alto volume di scritture simultanee, necessario per il sistema.`;

export class FlowVehicle extends Project {
    constructor() {
        super("360 Flow - Veicolo", new Hitachi(), null, content);
    }
}