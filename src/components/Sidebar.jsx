const sections = ["Home", "Scarica CV"];

export default function Sidebar({ selected, setSelected }) {
  return (
    <div className="sidebar">
      {sections.map((sec) => (
        <div
          key={sec}
          onClick={() => setSelected(sec)}
          className={selected === sec ? "selected" : ""}
        >
          {sec}
        </div>
      ))}
    </div>
  );
}
