import Home from "./sections/Home";
import Download from "./sections/Download";

export default function DetailView({ section }) {
  switch (section) {
    case "Home":
      return <Home />;
    case "Scarica CV":
      return <Download />;
  }
}
