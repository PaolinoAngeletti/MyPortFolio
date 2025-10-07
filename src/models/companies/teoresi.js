import { Company } from './company.js';

const content = `Teoresi è una multi-nazionale in ambito di consulenza ingegneristica. Come tale, sono stato assegnato, nel tempo, a diversi progetti per diversi clienti finali, di cui parlo nei paragrafi successivi.
In questo periodo ho vissuto politiche di smart-working ibrido, alternando così giornate in presenza (sia in sede Teoresi che sede cliente) con giornate di smart.`;

export class Teoresi extends Company {
    constructor() {
        super("Teoresi Group S.P.A.", "Gennaio 2024", "Esperienza attuale", "Napoli, via Ferrante Imparato", "https://www.teoresigroup.it", content);
    }
}