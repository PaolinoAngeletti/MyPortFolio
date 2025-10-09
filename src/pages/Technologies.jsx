import styles from './Home.module.css';
import useScrollToHash from '../utils/HookUtils';
import buildNavLink from '../utils/NavLinkUtils';
import { retrieveGroupedByType } from '../repository/technologies/technologiesRepository';

export default function Technologies() {

    useScrollToHash();
    const technologiesList = retrieveGroupedByType();

    return (
        <div>
            <h1>Stack tecnologico</h1>

            {Object.entries(technologiesList).map(([type, technologies]) => (
                <div className={styles.detail_title} key={type}>
                    <h2>{type}</h2>
                    {technologies.map((technology) => (
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
            ))}

        </div>
    );
}