import { Project } from './project.js';
import { ProgettoPersonale } from '../companies/personal_project.js';

const content = `Questo progetto nasce da un gioco condiviso con amici: il Fantacalcio.
A partire dall’esigenza di definire un regolamento chiaro e automatizzato in grado di gestire le diverse situazioni che possono presentarsi, ho ideato e sviluppato una web application dedicata.
L’applicazione è stata deployata tramite GitHub Pages ed è stata realizzata utilizzando HTML, CSS e JavaScript.
In questo progetto ho anche avuto modo di realizzare Unit testing sfruttando Jasmine.`;

export class FantaRegolamento extends Project {
    constructor() {
        super("FantaRegolamento", new ProgettoPersonale, "https://paolinoangeletti.github.io/fantaregolamento", content);
    }
}