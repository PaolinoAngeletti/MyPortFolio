export class Company {

    constructor(jsonCompany) {
        this.name = jsonCompany.name;
        this.start = jsonCompany.start;
        this.end = jsonCompany.end;
        this.location = jsonCompany.city;
        this.webSite = jsonCompany.website;
        this.content = jsonCompany.content;
        this.freelance = false;
        this.projects = [];
    }

    addProject(project) {
        this.projects.push(project);
    }

    setIfFreelance(boolean) {
        this.freelance = boolean;
    }
}