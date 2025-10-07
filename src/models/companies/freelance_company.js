import { Company } from './company.js';

export class FreelanceCompany extends Company {
    constructor(name, start, end, location, webSite, content) {
        super(name, start, end, location, webSite, content);
        this.setIfFreelance(true);
    }
}