import { Technology } from './technology.js';
import { getLanguagesTitle } from '../../repository/technologiesTypeRepository.js';

export class Kotlin extends Technology {
    constructor() {
        super("Kotlin", getLanguagesTitle());
    }
}