export class Technology {
  constructor(name, type, content) {
    this.name = name;
    this.type = type;
    this.content = content;
    this.projects = [];
  }

  setProjects(...projects) {
    this.projects = projects;
  }

  retrieveProjectsNumber() {
    return this.projects?.length;
  }

  hasProjects() {
    return this.retrieveProjectsNumber() > 0;
  }
}