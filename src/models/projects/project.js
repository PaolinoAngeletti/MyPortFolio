export class Project {
    constructor(name, company, projectWebSite, content) {
        this.name = name;
        this.company = company;
        this.content = content;
        this.projectWebSite = projectWebSite;
    }

    retrieveWebSite() {
        var result = this.projectWebSite;
        if (!result) {
            result = this.company.webSite;
        }
        return result;
    }

    setGooglePlayStoreUrl(url) {
        this.googlePlayStore = url;
    }

    hasGooglePlayStoreUrl() {
        return this.googlePlayStore ? true : false;
    }

    isFreelanceProject() {
        return this.company.freelance;
    }
}