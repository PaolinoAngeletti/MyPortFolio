import { Project } from './project.js';
import { Advise } from '../companies/advise.js'

const content = `MBE LAB è un gestionale per logistiche nato dall'interesse di Mail Boxes Etc. verso NegozioPerfetto.
Essendo però NegozioPerfetto pensato per negozianti e più concentrato sulla vendita al banco, ecco che viene avviato questo nuovo progetto di logistica. 
Se da un lato l'infrastruttura non ha subito grosse modifiche rispetto a NegozioPerfetto (incremento del numero delle tabelle, campi diversi), la APP è stata completamente rivisitata, dato che i requisiti tra la vendita al banco e la logistica sono parecchio differenti. 
Anche sotto l'aspetto delle tecnologie il sistema non ha subito grosse modifiche.

Dunque, le differenze tra i due progetti sono per lo più funzionali che infrastrutturali. 
In questo progetto ci siamo scontrati con l'enorme mole di dati che logisticamente venivano prodotto, e ciò ha comportato alcune migliorie al database ed alla APP stessa in termini di performance. 
Basti pensare che, in alcuni casi particolare, la APP ha dovuto gestire, sincronizzando automaticamente più di 50 terminali, le emissioni di circa 10.000 documenti di spedizione al giorno. 
Le funzionalità si sono poi concentrato sull'integrazione tra i sistemi da noi gestiti e quelli di MBE, implementando una lista corposa di API (lettera vettura, spedizioni, utenza) ed un sistema di SSO (single sign-on).

MBE LAB è un progetto utilizzato in vari paesi del mondo, quali Italia, Germania, Inghilterra, Spagna, Polonia, Kazakistan, Panama e Francia, e la lista con il tempo potrà solamente aumentare. 
In questo progetto sono stato coinvolto nelle seguenti fasi del software: Analisi, Design, Implementazione e manutenzione.`;

export class MBELab extends Project {
    constructor() {
        super("MBE LAB", new Advise(), "https://www.mbe.it", content);
        this.setGooglePlayStoreUrl("https://play.google.com/store/apps/details?id=mbe.mp&hl=it");
    }
}