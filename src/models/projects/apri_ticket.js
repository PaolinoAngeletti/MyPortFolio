import { Project } from './project.js';
import { Advise } from '../companies/advise.js'

const content = `ApriUnTicket è un CRM (Customer Relationship Management) sviluppato dapprima per uso interno aziendale, e poi venduto a clienti terzi per alcune funzionalità utili individuate in esso.
Questo CRM, a dispetto degli altri, è un CRM sviluppato con l'obiettivo di facilitare non solo il rapporto con la clientela e la gestione dei vari problemi informatici che ogni giorno possono venire a mostrarsi, ma è stato sviluppato con il vero scopo di aiutare i tecnici che lavorano ai problemi, e quindi vien data la possibilità di indicare metodo (Teleassistenza oppure On Side) e durata di un intervento, così da poter poi estrarre anche reportistiche utili a capire, ad esempio, il cliente più impegnativo, il cliente con meno problemi, e così via.
Altra particolarità di questo progetto (presente però anche in altri CRM) è l'implementazione di un lettore automatico di email, cioè un utente con problema non dovrà far altro che scrivere una email ad un indirizzo specificato, e tale lettore automatico aprirà un ticket automaticamente, oppure lo aggiornerà se la email richiama un ticket già aperto in precedenza.
In questo modo sia gli utenti che i tecnici non dovranno mai accedere al portale web del CRM per gestire un issue (o ticket), ma potranno farlo in maniera comodissima tramite le email.

L’applicativo è stato scritto tramite tecnologie .NET (ASPX nello specifico) con database SQL per la gestione dei dati.
Per la parte di front-end invece sono stati utilizzati:
•	HTML, CSS, Javascript.
•	IDE di sviluppo: Visual studio.
•	PHP: usato per l’implementazione del lettore automatico di email.`;

export class ApriUnTicket extends Project {
    constructor() {
        super("Apri Un Ticket", new Advise(), null, content);
    }
}