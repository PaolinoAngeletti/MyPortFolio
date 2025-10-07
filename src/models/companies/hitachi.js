import { Company } from './company.js';

const content = `Ho lavorato presso Hitachi come consulente Teoresi, in svariati progetti.
In particolare, ho lavorato al progetto 360Flow, lato veicolo, per la manutenzione dei moduli già implementati oltre allo sviluppo di nuove librerie e moduli software.
In Giugno 2024, sono stato invece assegnato al progetto 360Motion, terminato invece verso Ottobre 2025.
Per un approfondimento dei progetti e delle tecnologie coinvolte, si può far riferimento alle apposite sezioni.`;

export class Hitachi extends Company {
    constructor() {
        super("Hitachi Rail STS S.P.A.", "Gennaio 2024", "Esperienza attuale", "Napoli, via Argine", "https://www.hitachirail.com", content);
    }
}