import { Company } from './company.js';

const content = `Ho lavorato presso Hitachi come consulente Teoresi, in svariati progetti.
In particolare, ho lavorato al progetto 360Flow, lato veicolo, per la manutenzione dei moduli già implementati oltre allo sviluppo di nuove librerie e moduli software.
In Giugno 2024, sono stato invece assegnato al progetto 360Motion, terminato invece verso Settembre 2025, dato che in questo periodo sono stato assegnato al progetto HMAX.
Per un approfondimento dei progetti e delle tecnologie coinvolte, si può far riferimento alle apposite sezioni.`;

export class Hitachi extends Company {
    constructor() {
        super("Hitachi Rail STS S.P.A.", "Gennaio 2024", "Febbraio 2026", "Napoli, via Argine", "https://www.hitachirail.com", content);
    }
}