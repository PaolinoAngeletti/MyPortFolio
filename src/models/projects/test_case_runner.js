import { Project } from './project.js';
import { Teoresi } from '../companies/teoresi.js'

const content = `Il Test Case Runner è una piattaforma generica per implementare l'automazione dei test, basata su un'applicazione web Python Django.
Le funzionalità principali consentono di:
•	caricare una suite di test basata su un formato XML validato
•	caricare plugins su richiesta
•	memorizzare su un database SQLite le informazioni del test (ovvero test, descrizione, requisiti, report di esecuzione)
•	eseguire le fasi di prova
•	esportare documenti personalizzati in base alle informazioni archiviate nel database.

L'applicazione può essere personalizzata per testare un progetto specifico. 
Il core carica automaticamente i plugins presenti in una cartella specifica.
I plugin possono implementare le seguenti interfacce:
•	pre-esecuzione: una serie di passaggi eseguiti prima dell'esecuzione dei passaggi di test (ovvero preconfigurazione del test)
•	eseguire: una serie di passaggi di test
•	post-esecuzione: una serie di passaggi eseguiti dopo l'esecuzione dei passaggi di test (ovvero smontaggio)

L'applicazione web Python Django consente di:
•	caricare una suite di test
•	creare una nuova suite di test
•	modificare una suite di test (ad esempio aggiornando titolo o descrizione, aggiungendo test case, modificando passaggi di test, …)
•	eseguire una suite di test
•	mostra la cronologia della suite di test
•	Esportare una suite di test.

In questo progetto mi sono occupato di:
•	Migrazione del progetto da Python 2.7 a Python 3.9, in cui sono stato coinvolto nel refactoring di alcune funzionalità, dato che alcune librerie usate in Python 2.7 non erano presenti per Python 3.9 oppure producevano risultati diversi. Nomino ad esempio la libreria py_spy, sostituita con py_shark per lo sniffing di pacchetti di rete UDP.
•	Integrazione del protocollo TRDP, oltre a quello già presente IPTCOM. 
Il TRDP (Train Real-time Data Protocol) è un protocollo di comunicazione progettato specificamente per il settore ferroviario, che permette la trasmissione di dati in tempo reale tra i vari sistemi di un treno. È stato sviluppato per soddisfare le esigenze di comunicazione affidabile e deterministica in ambienti ferroviari, dove è fondamentale avere un basso ritardo e alta disponibilità dei dati.
•	Definizione di una GUI utile alla creazione dei test XML in maniera rapida ed intuitiva.

Le tecnologie e strumenti utilizzati sono stati:
•	Git (con Bitbucket) come sistema di versioning.
•	JIRA per la gestione del progetto con Agile Scrum.
•	Confluence per la gestione della documentazione.
•	Python Django for the Web application.`;

export class TestCaseRunner extends Project {
    constructor() {
        super("TCR - Test Case Runner", new Teoresi(), null, content);
    }
}