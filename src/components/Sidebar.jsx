import { NavLink } from "react-router-dom";

const sections = [
  { label: "Home", to: "/" },
  { label: "Esperienze", to: "/companies" },
  { label: "Tecnologie", to: "/technologies" },
  { label: "Progetti", to: "/projects" },
  { label: "Curriculum", to: "/download" },
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
