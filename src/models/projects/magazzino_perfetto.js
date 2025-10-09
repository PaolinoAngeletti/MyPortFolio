import { Project } from './project.js';
import { Advise } from '../companies/advise.js'

const content = `Dopo l'esperienza fatta con MBE LAB, dunque, si arriva al lancio di un nuovo progetto: MagazzinoPerfetto. 
MagazzinoPerfetto nasce anch'esso come gestionale, ma questa volta non di negozi, non di logistiche, ma magazzini nel loro completo ciclo di vita. 
Quindi, anche in questo caso, le modifiche di infrastruttura sono ben poche (incremento del numero delle tabelle, campi diversi), ma sono maggiormente modifiche funzionali ed integrazioni verticali verso altri sistemi. 
Infatti, avendo dovuto implementare un WMS completo, ci siamo ritrovati a doverci interfacciare con molteplici sistemi di terzi parti, in base alle esigenze dei clienti. 

Tra le principali integrazioni eseguite: 
•	Integrazione con un sistema di blockchain, con cui memorizzare le transazioni della merce.
•	Implementazione della tecnologia RFID.
•	Integrazione con sistemi di contabilità.
•	Integrazione con la dogana francese.
•	Integrazione totale con Zebra, azienda di hardware di magazzino (terminali, RFID, visori).
•	Integrazione con WooCommerce per siti customizzati.

In questo progetto sono stato coinvolto nelle seguenti fasi del software: Analisi, Design, Implementazione e manutenzione.`;

export class MagazzinoPerfetto extends Project {
    constructor() {
        super("Magazzino Perfetto", new Advise(), "https://www.magazzinoperfetto.it", content);
        this.setGooglePlayStoreUrl("https://play.google.com/store/apps/details?id=mp.mp2021");
    }
}