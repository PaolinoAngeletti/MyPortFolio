export class Project {

    constructor(name, projectWebSite, content) {
        this.name = name;
        this.content = content;
        this.projectWebSite = projectWebSite;
        this.technologies = [];
    }

    // SETTER

    setCompany(company) {
        this.company = company;
    }

    addTechnology(technology) {
        this.technologies.push(technology);
    }

    setGooglePlayStoreUrl(url) {
        this.googlePlayStore = url;
    }

    // GETTER

    retrieveCompanyName() {
        if (!this.company) {
            return "No company";
        }
        return this.company.name;
    }

    retrieveWebSite() {
        var result = this.projectWebSite;
        if (!result && this.company) {
            result = this.company.webSite;
        }
        return result;
    }

    getTechnologies() {
        return this.technologies;
    }

    hasTechnologies() {
        return this.technologies && this.technologies.length > 0;
    }

    hasGooglePlayStoreUrl() {
        return this.googlePlayStore ? true : false;
    }

    isFreelanceProject() {
        if (!this.company) {
            return false;
        }
        return this.company.freelance;
    }
}