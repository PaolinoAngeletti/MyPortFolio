import { Project } from './project.js';
import { RFI } from '../companies/rfi.js'

const content = `Progetto commissionato da Trenitalia, che aveva l’esigenza di monitorare, in maniera sicura e semplice, le varie tratte che il sistema ferroviario prevedeva.
Questo progetto nasce durante il periodo Covid, in cui, per sopperire all’impossibilità di lavorare in presenza in ufficio, venne ideata questa soluzione per permettere agli operatori di lavorare anche da casa.
Tutt’ora il sistema è in uso dalle stazioni di Bologna e Milano, ma col tempo la lista potrà solamente aumentare.

QL Mobile è una APP che, tramite sistemi di API, comunica con i sistemi RFI per ottenere informazioni riguardo le tratte, i ritardi, le videoregistrazioni, che un qualsiasi operatore poteva interrogare per qualsiasi esigenza.
Oltre ciò, la APP implementa anche un sistema di streaming video per accedere a varie telecamere poste su una specifica tratta.
Sono previste due modalità di visualizzazione:
Modalità Image: aggiornamento a intervalli regolari configurabili, che simula un frame rate (FPS) costante.
Modalità RTSP: riproduzione diretta di flussi video in tempo reale provenienti dal server.

Per ragioni di sicurezza, la APP non è pubblicata sul PlayStore ufficiale ed opera in maniera corretta solo in presenza di Rete mobile RFI sul device (SIM dedicata), cosi da controllare con facilità i dispositivi da cui la APP può funzionare.
L’APP viene distribuita attraverso uno store interno RFI, accessibile solo a personale autorizzato.
La mia responsabilità includeva il build locale del progetto e la pubblicazione interna sullo store RFI (la distribuzione finale era gestita da altri team).

La APP è stata sviluppata sia per Android che per iOS, scritta in entrambi casi con linguaggio nativo Android e Swift.
Strumenti coinvolti:
• Android (Java).
• Swift (IOS).
• API.`;

export class QLMobile extends Project {
    constructor() {
        super("Quadro Luminoso - QL Mobile", new RFI, null, content);
    }
}