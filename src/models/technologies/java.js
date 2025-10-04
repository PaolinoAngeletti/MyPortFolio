import { Technology } from './technology.js';
import { getLanguagesTitle } from '../../repository/technologiesTypeRepository.js';

export class Java extends Technology {
    constructor() {
        super("Java", getLanguagesTitle());
    }
}