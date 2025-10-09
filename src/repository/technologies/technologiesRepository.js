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

import { AWS } from '../../models/technologies/aws.js';
import { Docker } from '../../models/technologies/docker.js';

import { SQL } from '../../models/technologies/sql.js';
import { MySQL } from '../../models/technologies/mysql.js';
import { PostgresSQL } from '../../models/technologies/postgres.js';

import { Redis } from '../../models/technologies/redis.js';
import { DynamoDB } from '../../models/technologies/dynamodb.js';

import { MQTT } from '../../models/technologies/mqtt.js';
import { Kafka } from '../../models/technologies/kafka.js';

import { Singleton } from '../../models/technologies/singleton.js';
import { Factory } from '../../models/technologies/factory.js';
import { Observer } from '../../models/technologies/observer.js';
import { Mediator } from '../../models/technologies/mediator.js';

import { Doors } from '../../models/technologies/doors.js';

import { ZPL } from '../../models/technologies/zpl.js';
import { RFID } from '../../models/technologies/rfid.js';

const technologies = [
    new BeanShell, new Java, new Javascript, new NodeJS, new Python, new Swift, new VBNet,
    new Android, new Git, new Gradle, new Maven,
    new AWS, new Docker,
    new MySQL, new SQL, new PostgresSQL,
    new DynamoDB, new Redis,
    new MQTT, new Kafka,
    new Singleton, new Factory, new Mediator, new Observer,
    new Doors,
    new RFID, new ZPL
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