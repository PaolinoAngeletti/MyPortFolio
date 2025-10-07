import { NavLink } from "react-router-dom";

export default function buildNavLink(title, linkPath) {
    return (
        <NavLink
            to={`${linkPath}#${title}`}
            key={title}
            className={({ isActive }) =>
                isActive ? "selected" : ""
            }
        >
            {title}
        </NavLink>
    );
}