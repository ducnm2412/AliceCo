"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { PHONE_HREF, ZALO_URL } from "./site";

// Listed after Services, which gets its own group
const SECTIONS = [
  { href: "/#clients", label: "Clients" },
  { href: "/#process", label: "Process" },
  { href: "/#faq", label: "FAQ" },
];

// Phone and tablet navigation. The panel is portalled to <body> because the
// header's entrance animation gives it a transform, which would otherwise
// trap a fixed panel inside the header bar.
export function MobileMenu({
  items,
}: {
  items: { slug: string; name: string }[];
}) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const root = document.documentElement;
    root.classList.add("menu-open");
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      root.classList.remove("menu-open");
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <button
        type="button"
        className={`menu-toggle${open ? " is-open" : ""}`}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((value) => !value)}
      >
        <span />
        <span />
        <span />
      </button>
      {/* Only rendered while open, which can only happen in the browser */}
      {open &&
        createPortal(
          <div id="mobile-menu" className="mobile-menu">
            <nav className="mobile-menu__nav" aria-label="Mobile">
              <Link href="/#about" onClick={close}>
                About
              </Link>
              <ServicesGroup items={items} onNavigate={close} />
              {SECTIONS.map((section) => (
                <Link key={section.href} href={section.href} onClick={close}>
                  {section.label}
                </Link>
              ))}
            </nav>
            <div className="mobile-menu__actions">
              <a href={PHONE_HREF} className="btn btn--gold">
                Call 033 409 5326
              </a>
              <a
                href={ZALO_URL}
                target="_blank"
                rel="noopener"
                className="btn btn--ghost"
              >
                Chat on Zalo
              </a>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}

// Collapsed by default; lives inside the panel so it resets each time the
// menu opens
function ServicesGroup({
  items,
  onNavigate,
}: {
  items: { slug: string; name: string }[];
  onNavigate: () => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`mobile-menu__group${open ? " is-open" : ""}`}>
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu-services"
        onClick={() => setOpen((value) => !value)}
      >
        Services
        <svg
          width="16"
          height="16"
          viewBox="0 0 10 10"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          aria-hidden="true"
        >
          <path d="M2 3.5l3 3 3-3" />
        </svg>
      </button>
      <ul id="mobile-menu-services" hidden={!open}>
        {items.map((item, index) => (
          <li key={item.slug}>
            <Link href={`/services/${item.slug}`} onClick={onNavigate}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
