export class Project {

    constructor(json) {
        this.name = json.name;
        this.content = json.content;
        this.projectWebSite = json.website;
        this.googlePlayStore = json.googlePlayStore;
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

    hasCompany() {
        return this.company != null;
    }

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
            return true;
        }
        return this.company.freelance;
    }
}