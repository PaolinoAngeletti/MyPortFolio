const sections = ["Home", "Scarica CV"];

export default function Sidebar({ selected, setSelected, open }) {
  return (
    <div className={`sidebar ${open ? "open" : "closed"}`}>
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
