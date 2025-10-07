import buildNavLink from '../utils/NavLinkUtils';
import useScrollToHash from '../utils/HookUtils';
import { retrieveAll, retrieveFreelance } from '../repository/projects/projectsRepository';
import styles from './Home.module.css';

export default function Projects() {

    useScrollToHash();
    const projectsList = retrieveAll();
    const freelanceList = retrieveFreelance();

    function manageProjectList(projectsList) {
        return (
            <div>
                {projectsList.map((project) => (
                    <div id={project.name} key={project.name} className={styles.detail_title}>
                        <h2>{project.name}</h2>

                        <div className={styles.detail_title}>
                            <h3>🏢 Azienda</h3>
                            {project.isFreelanceProject()
                                ? <p>{project.company.name}</p>
                                : buildNavLink(project.company.name, "/companies")
                            }
                        </div>

                        <div className={styles.detail_title}>
                            <h3>🌐 Sito Web</h3>
                            <p className={styles.information}>
                                <a href={project.retrieveWebSite()} target="_blank" >
                                    {project.retrieveWebSite()}
                                </a>
                            </p>

                            {project.hasGooglePlayStoreUrl() && (
                                <p className={styles.information}>
                                    <a href={project.googlePlayStore} target="_blank" >
                                        Pagina Google Play Store
                                    </a>
                                </p>
                            )}
                        </div>

                        <p className={styles.information}>{project.content}</p>
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