import { Technology } from './technology.js';
import { Motion } from '../projects/360motion.js';
import { getNoSqlDatabaseTitle } from '../../repository/technologies/technologiesTypeRepository.js';

const content = `Redis è un database in-memory open-source che funziona come un data-store NoSQL. 
È noto per la sua velocità estremamente elevata, poiché i dati vengono memorizzati principalmente in memoria (RAM) anziché su disco. 
Redis supporta strutture dati come stringhe, liste, set, hash e bitmaps, ed è spesso utilizzato per caching, session management, real-time analytics e messaging.
Nel progetto 360Motion, ho usato Redis per la storicizzazione e lettura di JSON che dovevano essere letti e modificati di continuo in runtime.
Usato, inoltre, RedisCommander come strumento per l’accesso a tale database.`;

export class Redis extends Technology {
    constructor() {
        super("Redis", getNoSqlDatabaseTitle(), content);
        this.setProjects(new Motion);
    }
}