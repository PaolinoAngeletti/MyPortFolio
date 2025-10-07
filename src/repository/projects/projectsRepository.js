import { Motion } from '../../models/projects/360motion.js';
import { FlowVehicle } from '../../models/projects/360flow_vehicle.js';
import { TestCaseRunner } from '../../models/projects/test_case_runner.js';

import { MBELab } from '../../models/projects/mbe_lab.js';
import { NegozioPerfetto } from '../../models/projects/negozio_perfetto.js';
import { MagazzinoPerfetto } from '../../models/projects/magazzino_perfetto.js';

import { CRMO } from '../../models/projects/crmo.js';
import { Movitel } from '../../models/projects/movitel.js';
import { ApriUnTicket } from '../../models/projects/apri_ticket.js';

import { AcquistoMerciCreazioneOrdiniSap } from '../../models/projects/acquisto_merci_sap.js';
import { QLMobile } from '../../models/projects/ql_mobile.js';

const projects = [
    new Motion, new FlowVehicle, new TestCaseRunner,
    new NegozioPerfetto, new MBELab, new MagazzinoPerfetto,
    new ApriUnTicket, new CRMO, new Movitel,
    new AcquistoMerciCreazioneOrdiniSap
];

const freelanceProjects = [
    new QLMobile
];

export function retrieveAll() {
    return projects;
}

export function retrieveFreelance() {
    return freelanceProjects;
}