import Home from "../sections/Home";
import Download from "../sections/Download";
import Technologies from "../sections/Technologies";

export default function DetailView({ section,handleCardClick }) {
  switch (section) {
    case "Home":
      return <Home handleCardClick={handleCardClick} />
    case "Tecnologie":
      return <Technologies />;
    case "Scarica CV":
      return <Download />;
  }
}
