import { Java } from '../../models/technologies/java.js';
import { Python } from '../../models/technologies/python.js';
import { Gradle } from '../../models/technologies/gradle.js';
import { Maven } from '../../models/technologies/maven.js';
import { NodeJS } from '../../models/technologies/node.js';

const technologies = [
    new Java(), new Gradle(), new Maven(), 
    new Python, new NodeJS
];

export function retrieveAll() {
    return technologies;
}

export function retrieveGroupedByType() {
    return retrieveAll().reduce((result, tech) => {
        if (!result[tech.type]) {
            result[tech.type] = [];
        }
        result[tech.type].push(tech);
        return result;
    }, {});
}