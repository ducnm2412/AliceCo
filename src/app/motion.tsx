"use client";

import { useEffect } from "react";

// Drives the sticky header's scrolled state and the [data-reveal] scroll animations
export function Motion() {
  useEffect(() => {
    const root = document.documentElement;
    const header = document.querySelector(".site-header");
    const targets = document.querySelectorAll<HTMLElement>("[data-reveal]");

    const onScroll = () => {
      header?.classList.toggle("is-scrolled", window.scrollY > 40);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // Stagger siblings that reveal together
    targets.forEach((target) => {
      const siblings = Array.from(target.parentElement?.children ?? []).filter(
        (child) => child.hasAttribute("data-reveal"),
      );
      target.style.setProperty("--i", String(siblings.indexOf(target)));
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            target.classList.add("is-visible");
          } else {
            // Remember which edge it left by, so it comes back in from that side
            target.dataset.from =
              entry.boundingClientRect.top < 0 ? "above" : "below";
            target.classList.remove("is-visible");
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
    targets.forEach((target) => observer.observe(target));
    root.classList.add("reveal-on");

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
      root.classList.remove("reveal-on");
    };
  }, []);

  return null;
}
