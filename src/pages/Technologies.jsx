import useScrollToHash from '../utils/HookUtils';
import buildNavLink from '../utils/NavLinkUtils';
import { portfolioRepository } from '../repository/portfolioRepository';

export default function Technologies() {

    // if user clicked some link, will be opened the correct section directly.
    useScrollToHash();

    // retrieving technologies grouped by type.
    const technologiesByType = portfolioRepository.getTechnologiesGroupedByType();
    return (
        <div>
            <h1>Stack tecnologico</h1>
            {technologiesByType.map(group => (
                <div className="detail_title" key={group.type}>
                    <h2>{group.title}</h2>
                    {group.technologies.map(technology => (
                        <div
                            id={technology.name}
                            key={technology.name}
                            className="detail_title"
                        >
                            <h2>{technology.name}</h2>
                            {technology.projects.length > 0 && (
                                <p>
                                    <i>
                                        Progetti ({technology.projects.length}):{" "}
                                        {technology.projects.map((project, index) => (
                                            <span key={project.id}>
                                                {buildNavLink(project.name, "/projects")}
                                                {index < technology.projects.length - 1 && ", "}
                                            </span>
                                        ))}
                                    </i>
                                </p>
                            )}
                            <p className="information">
                                {technology.content}
                            </p>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}