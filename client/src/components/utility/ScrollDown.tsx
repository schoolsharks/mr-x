import React from "react";

interface ScrollDownProps {
  children: React.ReactNode;
  scrollAmount?: number; // Custom scroll amount in pixels
  smooth?: boolean; // Whether to use smooth scrolling
  className?: string;
  onClick?: () => void; // Additional onClick handler
}

const ScrollDown: React.FC<ScrollDownProps> = ({
  children,
  scrollAmount = 500,
  smooth = true,
  className = "",
  onClick,
}) => {
  const handleScrollDown = () => {
    const currentScrollY = window.scrollY;
    const targetScrollY = currentScrollY + scrollAmount;

    if (smooth) {
      window.scrollTo({
        top: targetScrollY,
        behavior: "smooth",
      });
    } else {
      window.scrollTo(0, targetScrollY);
    }

    // Call additional onClick handler if provided
    if (onClick) {
      onClick();
    }
  };

  return (
    <button onClick={handleScrollDown} className={className} type="button">
      {children}
    </button>
  );
};

// Alternative: Export just the function if you want to use it with your own button
export const scrollDown = (
  scrollAmount: number = 500,
  smooth: boolean = true
) => {
  const currentScrollY = window.scrollY;
  const targetScrollY = currentScrollY + scrollAmount;

  if (smooth) {
    window.scrollTo({
      top: targetScrollY,
      behavior: "smooth",
    });
  } else {
    window.scrollTo(0, targetScrollY);
  }
};

export default ScrollDown;
