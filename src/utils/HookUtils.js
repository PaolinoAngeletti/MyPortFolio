import { useEffect } from "react";

export default function useScrollToHash() {
  useEffect(() => {
    if (window.location.hash) {
      const id = decodeURIComponent(window.location.hash.replace("#", ""));
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);
}