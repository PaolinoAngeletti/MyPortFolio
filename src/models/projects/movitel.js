import { Project } from './project.js';
import { Advise } from '../companies/advise.js'

const content = `Questo piccolo progetto nasce dalla completa integrazione con i sistemi Voispeed, azienda fornitrice di centralini professionali aziendali.
L’obiettivo di questa applicazione Desktop era quella di interfacciarsi con il sistema Voispeed in modo da replicare su schermo le funzionalità previste da un classico telefono centralino, esempio la possibilità di effettuare chiamate, inoltrare chiamate, ecc.

Le tecnologie utilizzate per implementare questo progetto sono:
•	Microsoft .NET (VB.NET) come linguaggio di programmazione.
•	HTML, CSS, Javascript per la parte front-end.
•	SQL come database.
•	API per comunicare con il centralino.`;

export class Movitel extends Project {
    constructor() {
        super("Movitel", new Advise(), null, content);
    }
}