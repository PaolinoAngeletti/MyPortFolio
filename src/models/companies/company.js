export class Company {
    constructor(name, start, end, location, webSite, content) {
        this.name = name;
        this.start = start;
        this.end = end;
        this.location = location;
        this.webSite = webSite;
        this.content = content;
        this.freelance = false;
    }

    setIfFreelance(boolean){
        this.freelance = boolean;
    }
}