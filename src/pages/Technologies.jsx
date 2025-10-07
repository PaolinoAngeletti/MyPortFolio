import useScrollToHash from '../utils/HookUtils';
import buildNavLink from '../utils/NavLinkUtils';
import { retrieveAll } from '../repository/technologies/technologiesRepository';
import styles from './Home.module.css';

export default function Technologies() {

    useScrollToHash();
    const technologiesList = retrieveAll();

    return (
        <div>
            <h1>Stack tecnologico</h1>

            {technologiesList.map((technology) => (
                <div id={technology.name} key={technology.name} className={styles.detail_title}>
                    <h2>{technology.name}</h2>

                    {technology.hasProjects() && (
                        <p>
                            <i>
                                Progetti ({technology.retrieveProjectsNumber()}):{" "}
                                {technology.projects.map((project, index) => (
                                    <span key={project.name}>
                                        {buildNavLink(project.name, "/projects")}
                                        {index < technology.projects.length - 1 && ", "}
                                    </span>
                                ))}
                            </i>
                        </p>
                    )}

                    <p className={styles.information}>{technology.content}</p>
                </div>
            ))}
        </div>
    );
}