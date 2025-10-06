import { Java } from '../models/technologies/java.js';
import { Python } from '../models/technologies/python.js';

const technologies = [
    new Java(), new Python
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