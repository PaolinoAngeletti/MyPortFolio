import { Technology } from './technology.js';
import { getRelationalDatabaseTitle } from '../../repository/technologies/technologiesTypeRepository.js';

import { Motion } from '../projects/360motion.js';
import { FlowVehicle } from '../projects/360flow_vehicle.js';

const content = `Nell'ambito dei progetti Hitachi, ho utilizzato PostgreSQL come database per la storicizzazione dei dati elaborati dal sistema.
Anche per questo database sono state utilizzati trigger e procedure. Inoltre, per alcune entità, sono stati anche gestiti JSON come colonne di un record.`;

export class PostgresSQL extends Technology {
    constructor() {
        super("PostgresSQL", getRelationalDatabaseTitle(), content);
        this.setProjects(new FlowVehicle, new Motion);
    }
}