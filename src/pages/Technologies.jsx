import useScrollToHash from '../utils/HookUtils';
import buildNavLink from '../utils/NavLinkUtils';

import { portfolioRepository } from '../repository/portfolioRepository';

export default function Technologies() {

    useScrollToHash();

    const technologies = portfolioRepository.getTechnologies();

    // raggruppa per type -> spostare nel repository!!
    const technologiesByType = technologies.reduce((acc, tech) => {

        if (!acc[tech.type]) {
            acc[tech.type] = [];
        }

        acc[tech.type].push(tech);

        return acc;

    }, {});

    return (
        <div>

            <h1>Stack tecnologico</h1>

            {Object.entries(technologiesByType).map(([type, technologies]) => (

                <div className="detail_title" key={type}>

                    <h2>{type}</h2>

                    {technologies.map((technology) => (

                        <div id={technology.id} key={technology.id} className="detail_title">

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

                            <p className="information">{technology.content}</p>

                        </div>

                    ))}

                </div>

            ))}

        </div>
    );

}