import { NavLink } from "react-router-dom";

export default function buildNavLink(linkTitle, linkPath, callback) {
    return (
        <NavLink
            to={`${linkPath}?filter=${linkTitle}`}
            key={linkTitle}
            className={({ isActive }) =>
                isActive ? "selected" : ""
            }
            onClick={callback}
        >
            {linkTitle}
        </NavLink>
    );
}