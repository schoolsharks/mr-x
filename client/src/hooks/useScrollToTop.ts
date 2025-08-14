import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface UseScrollToTopOptions {
  behavior?: "smooth" | "instant" | "auto";
  trigger?: boolean; // Manual trigger control
  dependencies?: any[]; // Additional dependencies to trigger scroll
}

/**
 * Custom hook to scroll to top on route changes or manual trigger
 * Usage:
 * - useScrollToTop() - Scrolls to top on every route change
 * - useScrollToTop({ behavior: "smooth" }) - Smooth scroll on route change
 * - useScrollToTop({ trigger: someCondition }) - Scroll when trigger becomes true
 * - useScrollToTop({ dependencies: [someValue] }) - Scroll when dependencies change
 */
export const useScrollToTop = ({
  behavior = "instant",
  trigger = true,
  dependencies = []
}: UseScrollToTopOptions = {}) => {
  const location = useLocation();

  useEffect(() => {
    if (trigger) {
      window.scrollTo({
        top: 0,
        behavior: behavior
      });
    }
  }, [location.pathname, trigger, behavior, ...dependencies]);

  // Return a manual scroll function
  const scrollToTop = (customBehavior?: "smooth" | "instant" | "auto") => {
    window.scrollTo({
      top: 0,
      behavior: customBehavior || behavior
    });
  };

  return scrollToTop;
};

export default useScrollToTop;
