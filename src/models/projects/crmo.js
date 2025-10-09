import { Project } from './project.js';
import { Advise } from '../companies/advise.js'

const content = `CRM - O (Officina) è un software sviluppato per una delle più grandi concessionarie Peugeot e Volkswagen della Campania.
Il software nasce come esigenza alla seguente richiesta: le due grandi multinazionali nominate sopra, richiedono con cadenza mensile un file tracciato, in formato txt, contenente l'elenco dei clienti soddisfatti e non passati in officina durante il mese corrente.
La soddisfazione viene stabilita tramite un colloquio telefonico che viene effettuato.

Dunque, il software, aveva i seguenti compiti:
-	Comunicare con i gestionali, ottenendo così i clienti da chiamare questo mese.
-	Per rendere agile la chiamata, ossia senza l'onere di dover digitare il numero da chiamare, tale software comunicava con un sistema di chiamate VoIP (www.voispeed.com), in modo che l'operatore potesse effettuare chiamate direttamente dalla pagina web.
-	Compilazione dei questionari, da effettuare, ovviamente, a chiamata conclusa col cliente (o durante).
-	Generazione del file tracciato, rispettando le regole previste, ed invio di tale file alle case madri.

Applicativo scritto in .NET, e database SQL per l’archivio dei dati.`;

export class CRMO extends Project {
    constructor() {
        super("CRM-O", new Advise(), null, content);
    }
}