const sections = ["Home", "Scarica CV"];

export default function Sidebar({ selected, setSelected }) {
  return (
    <div style={{ width: "200px", borderRight: "1px solid #ccc", padding: "20px" }}>
      {sections.map((sec) => (
        <div
          key={sec}
          onClick={() => setSelected(sec)}
          style={{
            padding: "10px",
            cursor: "pointer",
            backgroundColor: selected === sec ? "rgba(0, 0, 0, 0.2)" : "transparent",
          }}
        >
          {sec}
        </div>
      ))}
    </div>
  );
}
