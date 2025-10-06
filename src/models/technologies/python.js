import { Technology } from './technology.js';
import { getLanguagesTitle } from '../../repository/technologiesTypeRepository.js';

export class Python extends Technology {
    constructor() {
        super("Python", getLanguagesTitle());
    }
}