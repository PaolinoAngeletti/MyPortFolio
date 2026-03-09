import buildNavLink from '../utils/NavLinkUtils';
import useScrollToHash from '../utils/HookUtils';
import { portfolioRepository } from '../repository/portfolioRepository';
import { HorizontalLinks } from '../utils/NavLinkUtils';

export default function Projects() {

    useScrollToHash();
    const projectsList = portfolioRepository.getWorkProjects();
    const freelanceList = portfolioRepository.getFreelanceProjects();

    function manageProjectList(projectsList) {
        return (
            <div>
                {projectsList.map((project) => (
                    <div id={project.name} key={project.name} className="detail_title">
                        <h2>{project.name}</h2>

                        {project.hasCompany() && (
                            <div className="detail_title">
                                <h3>🏢 Azienda</h3>
                                {project.isFreelanceProject()
                                    ? <p>{project.retrieveCompanyName()}</p>
                                    : buildNavLink(project.retrieveCompanyName(), "/companies")
                                }
                            </div>
                        )}

                        <div className="detail_title">
                            <h3>🌐 Sito Web</h3>
                            <p className="information">
                                <a href={project.retrieveWebSite()} target="_blank" >
                                    {project.retrieveWebSite()}
                                </a>
                            </p>

                            {project.hasGooglePlayStoreUrl() && (
                                <p className="information">
                                    <a href={project.googlePlayStore} target="_blank" >
                                        Pagina Google Play Store
                                    </a>
                                </p>
                            )}
                        </div>

                        <p className="information">{project.content}</p>

                        <HorizontalLinks parentName={project.id} title="Tecnologie" linkToPage="technologies" values={project.getTechnologies()} />
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div>
            <h1>Progetti</h1>

            {manageProjectList(projectsList)}

            <h1>Progetti personali e freelance</h1>
            <p>Nella mia esperienza ho anche lavorato su progetti al di fuori dell’azienda in cui ero impegnato.
                Alcuni erano commissioni da clienti terzi, mentre altri erano idee personali che ho sviluppato autonomamente.
            </p>

            {manageProjectList(freelanceList)}

        </div>
    );
}