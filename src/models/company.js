import ProjectUtils from "../utils/ProjectUtils";

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

        // when new element are added, then the list is automatically ordered.
        this.projects = ProjectUtils.sortByStartDesc(this.projects);
    }

    setIfFreelance(boolean) {
        this.freelance = boolean;
    }
}