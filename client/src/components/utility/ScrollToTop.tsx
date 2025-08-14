import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = ({
  behavior,
}: {
  behavior?: "smooth" | "instant" | "auto";
}) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: behavior });
  }, [location.pathname, behavior]); // Trigger on route change

  return null;
};

export default ScrollToTop;
