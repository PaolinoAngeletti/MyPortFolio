import { Technology } from './technology.js';
import { getFrameworkTitle } from '../../repository/technologies/technologiesTypeRepository.js';

import { NegozioPerfetto } from '../projects/negozio_perfetto.js';
import { MBELab } from '../projects/mbe_lab.js';
import { MagazzinoPerfetto } from '../projects/magazzino_perfetto.js';

const content = `Il framework Android è stata la tecnologia che ho usato per circa 7 anni, dal 2016 al 2023.
Come IDE di sviluppo è stato usato Android Studio, mentre come linguaggio ho usato per lo più Java, ma ho avuto modo di usare anche Kotlin in altri progetti minori e per funzioni specifiche.
Ho avuto modo di adottare architetture di tipo MVC (Model-View-Controller) o MVP (Model-View-Presenter) per garantire una separazione chiara delle responsabilità: le activity fungevano da model o presenter, che invocano fragment che fungono da view, per mostrare l'interfaccia utente e reagire agli input dell'utente. 
Ho organizzato i file XML per definire il layout dell'interfaccia utente e ho utilizzato i file di risorse per la gestione delle stringhe, delle dimensioni e degli stili.
L’associazione degli elementi della view ed il relativo controllore veniva eseguita tramite view binding.
Inoltre, ho utilizzato Gradle come strumento di build per gestire le dipendenze esterne e assicurare una corretta configurazione del progetto.
Riguardo i database, ho usato sia database locali SQLite sia progetti in cui i dati venivano rilevati tramite API.
Nei progetti NegozioPerfetto, MBE LAB e MagazzinoPerfetto, questo database locale veniva poi sincronizzato con un database in cloud tramite un processo scritto ad-hoc.
Altri servizi usati in questo contesto sono Firebase, usato per ricevere notifiche di crash o analisi e per inviare notifiche push, e Git, usato per il versioning.
Per quanto riguarda invece l’invocazione di API, si enuncia anche l’utilizzo di Retrofit.`;

export class Android extends Technology {
    constructor() {
        super("Android (Mobile Dev)", getFrameworkTitle(), content);
        this.setProjects(new NegozioPerfetto, new MBELab, new MagazzinoPerfetto);
    }
}