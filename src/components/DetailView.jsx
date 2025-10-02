import Home from "./sections/Home";

export default function DetailView({ section }) {
  switch (section) {
    case "Home":
      return <Home />;
  }
}
