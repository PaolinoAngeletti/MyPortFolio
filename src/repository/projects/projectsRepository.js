import { Motion } from '../../models/projects/360motion.js';
import { FlowVehicle } from '../../models/projects/360flow_vehicle.js';
import { TestCaseRunner } from '../../models/projects/test_case_runner.js';

import { MBELab } from '../../models/projects/mbe_lab.js';
import { NegozioPerfetto } from '../../models/projects/negozio_perfetto.js';
import { MagazzinoPerfetto } from '../../models/projects/magazzino_perfetto.js';

import { ApriUnTicket } from '../../models/projects/apri_ticket.js';

const projects = [
    new Motion(), new FlowVehicle(), new TestCaseRunner,
    new NegozioPerfetto(), new MBELab(), new MagazzinoPerfetto(),
    new ApriUnTicket()
];

export function retrieveAll() {
    return projects;
}