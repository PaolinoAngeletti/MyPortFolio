import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function useScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const paragraphId = params.get("filter");
    if (paragraphId) {
      const el = document.getElementById(paragraphId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
}
