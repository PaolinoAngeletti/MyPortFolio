import { NavLink } from "react-router-dom";

export default function buildNavLink(title, linkPath, callback) {
    return (
        <NavLink
            to={`${linkPath}?filter=${title}`}
            key={title}
            className={({ isActive }) =>
                isActive ? "selected" : ""
            }
            onClick={callback}
        >
            {title}
        </NavLink>
    );
}