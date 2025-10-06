import { NavLink } from "react-router-dom";

const sections = [
  { label: "Home", to: "/" },
  { label: "Technologies", to: "/technologies" },
  { label: "Download", to: "/download" },
];

export default function Sidebar() {
  return (
    <nav>
        {sections.map(section => (
          <NavLink
            to={section.to}
            key={section.to}
            className={({ isActive }) =>
              isActive
                ? "selected"
                : ""
            }
          >
            {section.label}
          </NavLink>
        ))}
      </nav>
  );
}
