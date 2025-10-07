import { Motion } from '../../models/projects/360motion.js';

const projects = [
    new Motion()
];

export function retrieveAll() {
    return projects;
}