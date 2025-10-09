import { Project } from './project.js';
import { ProgettoPersonale } from '../companies/personal_project.js';

const content = `Questa applicazione realizza un curriculum vitae navigabile, in cui ogni concetto è collegato a progetti, tecnologie, e viceversa.
L’applicazione è stata deployata tramite GitHub Pages ed è stata realizzata utilizzando il framework React, quindi HTML, CSS e Javascript XML.
Per il versionamento è stato utilizzato GIT.`;

export class MyPortFolio extends Project {
    constructor() {
        super("MyPortFolio", new ProgettoPersonale, "https://paolinoangeletti.github.io/MyPortFolio", content);
    }
}