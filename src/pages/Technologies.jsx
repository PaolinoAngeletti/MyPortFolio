import useScrollToHash from '../utils/HookUtils';
import { HorizontalLinks } from '../utils/NavLinkUtils';
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

                            <HorizontalLinks parentName={technology.id} title="Progetti" linkToPage="projects" values={technology.projects} />

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