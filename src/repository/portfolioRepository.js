import data from "../configuration/portfolio.json";

class PortfolioRepository {

  constructor() {
    this.projects = new Map();
    this.technologies = new Map();
    this.build();
  }

  build() {

    data.technologies.forEach(t => {
      this.technologies.set(t.id, {
        ...t,
        projects: []
      });
    });

    data.projects.forEach(p => {

      const project = {
        ...p,
        technologies: []
      };

      p.technologies.forEach(tId => {

        const tech = this.technologies.get(tId);

        project.technologies.push(tech);
        tech.projects.push(project);

      });

      this.projects.set(p.id, project);

    });

  }

  getProjects() {
    return [...this.projects.values()];
  }

  getTechnologies() {
    return [...this.technologies.values()];
  }

  getProject(id) {
    return this.projects.get(id);
  }

  getTechnology(id) {
    return this.technologies.get(id);
  }

}

export const portfolioRepository = new PortfolioRepository();