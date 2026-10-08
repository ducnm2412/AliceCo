"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

// Grace period so the menu survives the pointer crossing small gaps
const CLOSE_DELAY = 150;

// "Services" nav entry: hovering opens a menu of the service pages, the arrow
// toggles it for touch and keyboard. Closes on outside click or Escape.
export function NavServices({
  items,
}: {
  items: { slug: string; name: string }[];
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  const show = () => {
    clearTimeout(closeTimer.current);
    setOpen(true);
  };
  const hide = () => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpen(false), CLOSE_DELAY);
  };

  useEffect(() => () => clearTimeout(closeTimer.current), []);

  useEffect(() => {
    if (!open) return;
    const onPointer = (event: PointerEvent) => {
      if (!ref.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div
      ref={ref}
      className={`nav__item${open ? " is-open" : ""}`}
      onPointerEnter={(event) => event.pointerType === "mouse" && show()}
      onPointerLeave={(event) => event.pointerType === "mouse" && hide()}
    >
      <Link href="/#services">Services</Link>
      <button
        type="button"
        className="nav__toggle"
        aria-expanded={open}
        aria-controls="nav-services-menu"
        aria-label={open ? "Close services menu" : "Open services menu"}
        onClick={(event) => {
          // A mouse has already opened it by hovering, so only touch and
          // keyboard toggle here
          const mouse =
            (event.nativeEvent as PointerEvent).pointerType === "mouse";
          setOpen((value) => (mouse ? true : !value));
        }}
      >
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          aria-hidden="true"
        >
          <path d="M2 3.5l3 3 3-3" />
        </svg>
      </button>
      <div id="nav-services-menu" className="nav__menu" hidden={!open}>
        <ul>
          {items.map((item, index) => (
            <li key={item.slug}>
              <Link
                href={`/services/${item.slug}`}
                onClick={() => setOpen(false)}
              >
                <span className="nav__menu-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
