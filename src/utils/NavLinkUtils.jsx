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

/**
 * Renders a horizontal list of navigation links separated by commas.
 * The component displays a title followed by the number of elements
 * and a list of links pointing to a specified page.
 *
 * Example output:
 * Technologies (3): React, NodeJS, PostgreSQL
 *
 * @component
 * @param {Object} props - Component properties.
 * @param {string} props.title - Title displayed before the list (e.g., "Technologies").
 * @param {Array<Object>} props.values - Array of elements to display. Each element must contain a `name` property.
 * @param {string} props.linkToPage - Target page used to build navigation links.
 * @param {string|number} props.parentName - Identifier used to generate unique React keys.
 *
 * @returns {JSX.Element|null} A paragraph containing the horizontal list of links, or null if the list is empty.
 */
export function HorizontalLinks({ title, values, linkToPage, parentName }) {
    if (!values?.length) return null;
    return (
        <p>
            <i>
                {title} ({values.length}):{" "}
                {values.map((element, index) => (
                    <span key={`${parentName}-${index}`}>
                        {buildNavLink(element.name, "/" + linkToPage)}
                        {index < values.length - 1 && ", "}
                    </span>
                ))}
            </i>
        </p>
    );
}