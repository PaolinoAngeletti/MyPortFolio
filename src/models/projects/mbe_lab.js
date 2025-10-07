import { Project } from './project.js';
import { Advise } from '../companies/advise.js'

const content = `NegozioPerfetto è un progetto nato dall'idea di aiutare i piccoli negozianti a contrastare le grandi multinazionali che oggi dominano il mercato.
NegozioPerfetto è quindi un gestionale light, sviluppato per essere quanto più intuitivo e semplice possibile.
Oltre alle classiche funzioni di gestione della movimentazione di magazzino (quindi carico, scarico, trasferimenti, ecc.), l'obiettivo del progetto era quello di implementare un sito e-commerce completamente ed automaticamente integrato al gestionale, cosi da mostrare online sempre anagrafiche e stock aggiornati in tempo reale.
Altra questione affrontata nel progetto era l'utilizzo della APP in offline: dato che, in un negozio, la connessione potrebbe essere scarsa o comunque non perfetta, il negoziante avrebbe potuto tranquillamente vendere.
Tramite poi un processo di sincronizzazione, i dati venivano sincronizzati sia in entrata che in uscita con il cloud, permettendo quindi sia un backup dei dati sia la possibilità di lavorare offline con una lista indefinita di dispositivi.

In questo progetto sono stato coinvolto nelle seguenti fasi del software:
- Analisi
- Design
- Implementazione
- Manutenzione.

Di seguito, invece, le tecnologie usate:

Amazon AWS Cloud

Come detto nella descrizione del progetto, la APP prevede di lavorare in offline per poi sincronizzare le modifiche (sia in importazione che esportazione) su un server in cloud.
È stato scelto AWS come piattaforma cloud, di cui sono stati utilizzati svariati servizi:

- EC2: servizio per avere in esecuzione un server Linux.
- Aurora DB: database relazione MySQL.
- DynamoDB: database non relazione usato per contenere alcune informazioni particolari.
- Lambda: servizio con cui creare delle procedure online raggiungibili tramite API. Per la scrittura di queste lambda, sono stati usati principalmente due linguaggi: Python e NodeJS.
- API Gateway : servizio con cui creare delle API associate poi a delle funzioni lambda.
- Cognito : servizio con cui implementare velocemente le procedure di login, recupero password e registrazione al sistema.
- S3 : spazio di storage in cui poter salvare file.
- Iot Core : servizio di IOT usati per richieste verticali, esempio implementazione di un Dash button con cui ordinare uno specifico articolo solamente cliccando il tasto previsto.

Java (Android)

La APP è stata scritta utilizzando il linguaggio Android nativo, mentre come IDE è stato usato Android Studio.
È stato implementato un database in locale SQLite che poi, tramite API, veniva sincronizzato con il database in cloud in MySQL.
Altri strumenti usati durante il progetto sono stati Fabric per l’Analytics e Crashlitycs e Firebase per l’invio di notifiche push al sistema.

Python, NodeJS

Linguaggi utilizzati per scrivere le funzioni lambda necessarie al sistema.

Git Hub

È stato usato GitHub come piattaforma di versioning.

WooCommerce

Il sito integrato al progetto è stato creato tramite piattaforma WooCommerce, ed ovviamente sono state implementate tutte le API utili al progetto per implementare l'integrazione con il sito discussa nella descrizione del progetto.

MySQL

Come database in cloud è stato scelto una soluzione basata sul MySQL.
Negli anni sono stati approfonditi varie tematiche relativamente al database, ossia sono state implementati trigger, stored functions, stored procedures ed indicizzazione delle tabelle più sollecitate dalle operazioni previste.

ZPL

Linguaggio utilizzato per creare etichette stampabili tramite stampanti Zebra, in modo da gestire dimensione etichette ed altri aspetti connessi alla funzionalità.
Particolarmente utile per stampe Bluetooth, in modo da alleggerire il carico da inviare da dispositivo a stampante.`;

export class MBELab extends Project {
    constructor() {
        super("MBE LAB", new Advise(), "https://www.mbe.it", content);
        this.setGooglePlayStoreUrl("https://play.google.com/store/apps/details?id=mbe.mp&hl=it");
    }
}