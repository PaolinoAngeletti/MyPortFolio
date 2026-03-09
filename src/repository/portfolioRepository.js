import { Project } from "../models/project";
import { Company } from "../models/company";
import { Technology } from "../models/technology";
import data from "../configuration/portfolio.json";

class PortfolioRepository {

  constructor() {

    // work experiences.
    this.companies = new Map();

    // technologies.
    this.technologies = new Map();

    // project worked during work experiences.
    this.work_projects = new Map();

    // project worked during free time.
    this.freelance_projects = new Map();

    this.build();
  }

  build() {
    this.buildTechnologies();
    this.buildCompanies();
    this.buildProjects();
  }

  buildTechnologies() {
    data.technologies.forEach(t => {
      const tech = new Technology(t.name, t.type, t.content);
      this.technologies.set(t.id, tech);
    });
  }

  buildCompanies() {
    data.companies.forEach(json_company => {
      const company = new Company(json_company);
      this.companies.set(json_company.id, company);
    });
  }

  buildProjects() {
    data.projects.forEach(p => {
      const project = new Project(p.name, p.website, p.content);

      // mapping project with company.
      if (p.company) {
        const projectCompany = this.companies.get(p.company);
        if (projectCompany) {
          project.setCompany(projectCompany);
          projectCompany.addProject(project);
        } else {
          // companies over experiences branch. 
          // This companies will be managed as freelance companies.
          const otherCompany = new Company({ "name": p.company });
          otherCompany.setIfFreelance(true);
          project.setCompany(otherCompany);
        }
      }

      // mapping project with technologies.
      p.technologies.forEach(tId => {
        const tech = this.technologies.get(tId);
        if (!tech) return;
        project.addTechnology(tech);
        tech.addProject(project);
      });

      // put inside correct list.
      if (project.isFreelanceProject()) {
        this.freelance_projects.set(p.id, project);
      } else {
        this.work_projects.set(p.id, project);
      }
    });
  }

  getWorkProjects() {
    return [...this.work_projects.values()];
  }

  getWorkProject(id) {
    return this.work_projects.get(id);
  }

  getFreelanceProjects() {
    return [...this.freelance_projects.values()];
  }

  getTechnologies() {
    return [...this.technologies.values()];
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

  getCompanies() {
    return [...this.companies.values()];
  }

}

export const portfolioRepository = new PortfolioRepository();