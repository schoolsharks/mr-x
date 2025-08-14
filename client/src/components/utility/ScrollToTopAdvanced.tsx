import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface ScrollToTopProps {
  behavior?: "smooth" | "instant" | "auto";
  excludePaths?: string[]; // Paths where you don't want to scroll to top
  scrollDelay?: number; // Delay before scrolling (in milliseconds)
}

const ScrollToTop = ({
  behavior = "instant",
  excludePaths = [],
  scrollDelay = 0,
}: ScrollToTopProps) => {
  const location = useLocation();

  useEffect(() => {
    // Check if current path should be excluded
    const shouldExclude = excludePaths.some((path) =>
      location.pathname.includes(path)
    );

    if (!shouldExclude) {
      const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: behavior,
        });
      };

      if (scrollDelay > 0) {
        const timer = setTimeout(scrollToTop, scrollDelay);
        return () => clearTimeout(timer);
      } else {
        scrollToTop();
      }
    }
  }, [location.pathname, behavior, excludePaths, scrollDelay]);

  return null;
};

export default ScrollToTop;
