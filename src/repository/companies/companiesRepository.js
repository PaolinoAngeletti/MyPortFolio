import { Advise } from '../../models/companies/advise.js';
import { Teoresi } from '../../models/companies/teoresi.js';
import { Hitachi } from '../../models/companies/hitachi.js';
import { SoftwareBusiness } from '../../models/companies/software_business.js';

const companies = [
    new Teoresi(), new Hitachi(),
    new Advise(),
    new SoftwareBusiness()
];

export function retrieveAll() {
    return companies;
}