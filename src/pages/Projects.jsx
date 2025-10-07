import { NavLink } from "react-router-dom";
import useScrollToHash from '../utils/HookUtils';
import { retrieveAll } from '../repository/projects/projectsRepository';
import styles from './Home.module.css';

export default function Projects() {

    useScrollToHash();
    const projectsList = retrieveAll();

    return (
        <div>
            <h1>Progetti</h1>

            {projectsList.map((project) => (
                <div id={project.name} key={project.name} className={styles.detail_title}>
                    <h2>{project.name}</h2>

                    <div className={styles.detail_title}>
                        <h3>🏢 Azienda</h3>
                        <p className={styles.information}>{project.start}</p>
                        <NavLink
                            to={`/companies#${project.company.name}`}
                            key={project.name}
                            className={({ isActive }) =>
                                isActive
                                    ? "selected"
                                    : ""
                            }
                        >
                            {project.company.name}
                        </NavLink>
                    </div>

                    <div className={styles.detail_title}>
                        <h3>🌐 Sito Web</h3>
                        <p className={styles.information}>
                            <a href={project.retrieveWebSite()} target="_blank" >
                                {project.retrieveWebSite()}
                            </a>
                        </p>
                    </div>

                    <p className={styles.information}>{project.content}</p>
                </div>
            ))}
        </div>
    );
}