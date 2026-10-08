"use client";

import { useEffect, useState } from "react";

// Numbered pager for the services row, which becomes a swipeable carousel on
// phones. Tracks the card nearest the left edge and scrolls to a card on tap.

// The track is positioned, so card offsets are measured from its padding box
function cardStart(track: HTMLElement, card: HTMLElement) {
  return card.offsetLeft - parseFloat(getComputedStyle(track).paddingLeft);
}

export function ServicesPager({
  trackId,
  count,
}: {
  trackId: string;
  count: number;
}) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const track = document.getElementById(trackId);
    if (!track) return;
    const onScroll = () => {
      const cards = Array.from(track.children).slice(0, count) as HTMLElement[];
      const gap = (card: HTMLElement) =>
        Math.abs(cardStart(track, card) - track.scrollLeft);
      let nearest = 0;
      cards.forEach((card, index) => {
        if (gap(card) < gap(cards[nearest])) nearest = index;
      });
      setActive(nearest);
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, [trackId, count]);

  const show = (index: number) => {
    const track = document.getElementById(trackId);
    const card = track?.children[index] as HTMLElement | undefined;
    if (!track || !card) return;
    track.scrollTo({ left: cardStart(track, card) });
  };

  return (
    <div className="pager" aria-label="Choose a service">
      {Array.from({ length: count }, (_, index) => (
        <button
          key={index}
          type="button"
          className={index === active ? "is-active" : undefined}
          aria-label={`Show service ${index + 1}`}
          aria-current={index === active || undefined}
          onClick={() => show(index)}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
}
