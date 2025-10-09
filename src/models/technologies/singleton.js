import { Technology } from './technology.js';
import { getPatternsTitle } from '../../repository/technologies/technologiesTypeRepository.js';

const content = `Pattern creazione usato per gestire oggetti che dovrebbero essere istanziati una sola volta nel sistema.
Usato in quasi tutti i progetti in cui ho lavorato.`;

export class Singleton extends Technology {
    constructor() {
        super("Singleton pattern", getPatternsTitle(), content);
    }
}