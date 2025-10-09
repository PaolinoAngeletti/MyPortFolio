import { Java } from '../../models/technologies/java.js';
import { NodeJS } from '../../models/technologies/node.js';
import { Swift } from '../../models/technologies/swift.js';
import { VBNet } from '../../models/technologies/vb_net.js';
import { Python } from '../../models/technologies/python.js';
import { BeanShell } from '../../models/technologies/bean_shell.js';
import { Javascript } from '../../models/technologies/javascript.js';

import { Git } from '../../models/technologies/git.js';
import { Maven } from '../../models/technologies/maven.js';
import { Gradle } from '../../models/technologies/gradle.js';
import { Android } from '../../models/technologies/android.js';

const technologies = [
    new BeanShell, new Java, new Javascript, new NodeJS, new Python, new Swift, new VBNet,
    new Android, new Git, new Gradle, new Maven
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