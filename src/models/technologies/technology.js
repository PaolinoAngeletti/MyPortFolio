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

  hasProjects(){
    return this.projects?.length > 0;
  }
}