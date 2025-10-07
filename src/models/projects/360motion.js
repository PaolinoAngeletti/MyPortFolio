import { Project } from './project.js';
import { Hitachi } from '../companies/hitachi.js'

const content = `360Motion è una piattaforma pionieristica che sta trasformando la mobilità urbana consolidando i dati provenienti da diversi servizi di trasporto in una soluzione unificata. È alimentato da algoritmi avanzati di intelligenza artificiale e ML, che gli consentono di ottimizzare dinamicamente le reti di trasporto pubblico, facilitare la pianificazione degli scenari e anticipare e mitigare le interruzioni.
In pratica, 360Motion riunisce i dati di più servizi di trasporto (bus, metro e veicoli vari) in un'unica piattaforma unificata.
Questi dati vengono ricevuti ed analizzati, con lo scopo di fornire una piattaforma web che possa fornire all’utente quante più informazioni e operatività possibili.

360Motion è una piattaforma indipendente dall'hardware, in grado di scalare le soluzioni di mobilità esistenti raccogliendo e acquisendo dati da qualsiasi tipo di fonte e consentendo a operatori e passeggeri di comprendere il modo ottimale di spostarsi attraverso i paesaggi urbani.
Tecnicamente, invece, 360Motion è un progetto a micro-servizi, scritti in Java (SpringBoot), Python, ed una parte front-end scritta in Angular, che viene distribuito tramite Kubernetes.

In questa mia esperienza come consulente, le tecnologie utilizzate sono state:
•	Java con SpringBoot, IntelliJ Idea come IDE
•	Maven come strumento di gestione
•	PostGress, con PgAdmin come strumento di accesso e gestione.
•	Docker
•	Swagger
•	Git, come strumento di versioning
•	Kafka, come distributore interno di messaggi, ed AKHQ come strumento di lettura dei vari topic.
•	Redis, ossia un database NoSQL in cache per ottimizzarne le letture. Usato RedisCommander come strumento per accedervi.
•	Azure DevOps, come strumento di accesso ai repository e esecutore di pull-request su main, pipeline per compilazione e rilascio automatico.
•	SonarQube, strumento per eseguire analisi statica del codice
•	JMeter per l’attività di verifica e fix dei work-item rilevati, con linguaggio BeanShell
•	Doors, strumento usato come repository dei requisiti di sistema, ove eventualmente applicare modifiche ad essi.
•	Project Place, strumento per la gestione dei task interni.
•	Cisco Any Connect, usato per accesso a VPN interne.

Invece, le attività di cui mi sono occupato sono:
•	Implementazione di Integration-test per controller Spring che ne erano sprovvisti, con JUnit.
•	Incremento della code coverage del codice.
•	Integrazione di Swagger nei controller previsti.
•	Verifica ed eventuale fix per work-item rilevati dal team di V&V (Verification & Validation)
•	Refactoring di un SDK interno utile alla gestione delle proprietà che i singoli componenti potevano richiedere al database
•	Implementazione della libreria Test Core, utilizzata come framework per la scrittura di test di integrazione. Questa libreria mette a disposizione vari connettori (database, Redis, Kafka, ecc.) e gestisce, tramite il file application. properties, l'accesso a tali connettori tramite test container o tramite l'ambiente reale locale. I connettori vengono implementati utilizzando il Factory pattern, garantendo così una facile aggiunta di nuovi elementi.
•	Implementazione di un nuovo servizio Java, platform-integration-test, che, tramite la libreria Test Core, contiene una serie di test di integrazione per verificare il comportamento dei vari microservizi rilasciati.

Nel contesto di IntelliJ, sono stati usati i seguenti plugins:
•	Lombok, usato per importare annotazioni e ridurre il codice scritto.
•	SonarLint, utile a rilevare eventuali problemi del codice.`;

export class Motion extends Project {
    constructor() {
        super("360 Motion", new Hitachi(), "https://www.youtube.com/watch?v=3Oe-XVIZd-I", content);
    }
}