import { Technology } from './technology.js';
import { getRelationalDatabaseTitle } from '../../repository/technologies/technologiesTypeRepository.js';

import { CRMO } from '../projects/crmo.js';
import { ApriUnTicket } from '../projects/apri_ticket.js';

const content = `Database usato nei progetti CRM-O ed ApriUnTicket, come soluzione usata negli applicativi web menzionati.`;

export class SQL extends Technology {
    constructor() {
        super("SQL Server", getRelationalDatabaseTitle(), content);
        this.setProjects(new CRMO, new ApriUnTicket);
    }
}