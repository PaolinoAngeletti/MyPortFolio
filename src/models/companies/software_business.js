import { Company } from './company.js';

const content = `Questa esperienza è nata come opportunità di tirocinio messa a disposizione dall’università. Il mio obiettivo finale era il rilascio di una piattaforma web user-friendly avente lo scopo di creare ordini clienti in SAP. Tale applicativo doveva essere utilizzato dagli stessi customer finali, che quindi potevano ordinare merce autonomamente, stile e-commerce.`;

export class SoftwareBusiness extends Company {
    constructor() {
        super("Software Business S.R.L.", "Marzo 2016", "Agosto 2016", "Mugnano del Cardinale (AV)", "https://www.softwarebusiness.it", content);
    }
}