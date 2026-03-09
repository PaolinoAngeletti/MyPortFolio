import data from "../configuration/portfolio.json";
import { Technology } from "../models/technologies/technology";

class PortfolioRepository {

  constructor() {
    this.projects = new Map();
    this.technologies = new Map();
    this.build();
  }

  build() {

    // iterate over technologies.
    data.technologies.forEach(t => {
      const tech = new Technology(t.name, t.type, t.content);
      this.technologies.set(t.id, tech);
    });

    // iterate over projects.
    data.projects.forEach(p => {
      const project = {
        ...p,
        technologies: []
      };

      // mapping projects with technologies.
      p.technologies.forEach(tId => {
        const tech = this.technologies.get(tId);
        if (!tech) return;
        project.technologies.push(tech);
        tech.addProject(project);
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

  getTechnologiesGroupedByType() {
    const grouped = {};

    // grouping
    this.getTechnologies().forEach(tech => {
      if (!grouped[tech.type]) {
        grouped[tech.type] = [];
      }
      grouped[tech.type].push(tech);
    });

    // types ordering.
    const orderedTypes = data.technologyTypes.sort((a, b) => a.order - b.order);
    return orderedTypes
      .map(type => ({
        type: type.id,
        title: type.title,
        technologies: grouped[type.id] || []
      }))
      .filter(group => group.technologies.length > 0);
  }

}

export const portfolioRepository = new PortfolioRepository();