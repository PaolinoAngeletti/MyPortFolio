import { Technology } from './technology.js';
import { getPatternsTitle } from '../../repository/technologies/technologiesTypeRepository.js';

const content = `Il pattern Observer è un pattern comportamentale che permette a un oggetto, chiamato "soggetto", di notificare automaticamente gli "osservatori" registrati quando avviene un cambiamento nel suo stato. 
Gli osservatori sono quindi aggiornati e possono reagire di conseguenza. 
Questo pattern è stato usato nel progetto 360Flow in modo da mettere in ascolto alcuni componenti dei vari moduli sui subscriber MQTT previsti, in modo da avere un solo componente in ascolto sul broker MQTT e tante classi che sono in ascolto sull’aggiornamento dei valori osservati.`;

export class Observer extends Technology {
    constructor() {
        super("Observer pattern", getPatternsTitle(), content);
    }
}