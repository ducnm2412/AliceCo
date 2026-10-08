"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

// Show the back-to-top button once the reader is past the first screen
const SHOW_AFTER = 600;

// Scrolls smoothly unless the reader prefers reduced motion (the html
// element's scroll-behavior already follows that preference)
function scrollToTop() {
  window.scrollTo({ top: 0 });
  if (window.location.hash) {
    window.history.replaceState(window.history.state, "", "/");
  }
}

// Logo link: on the home page it scrolls back up instead of reloading the
// same route; elsewhere it navigates home, which lands at the top
export function BrandLink({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <Link
      href="/"
      className="brand"
      aria-label="ALICE & CO. home"
      onClick={(event) => {
        if (pathname !== "/") return;
        event.preventDefault();
        scrollToTop();
      }}
    >
      {children}
    </Link>
  );
}

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SHOW_AFTER);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      className={`to-top${visible ? " is-visible" : ""}`}
      aria-label="Back to top"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      onClick={scrollToTop}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        aria-hidden="true"
      >
        <path d="M12 20V4M6 10l6-6 6 6" />
      </svg>
    </button>
  );
}
