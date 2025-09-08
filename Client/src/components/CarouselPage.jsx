import React, { useEffect, useRef, useState } from "react";
import Card from "./Card"; // your Card component
import { ChevronLeft, ChevronRight } from "lucide-react"; // icons

const CarouselPage = () => {
  const scrollRef = useRef(null);
  const itemRef = useRef(null);
  const autoplayRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const totalItems = 8; 
  const visibleItems = 3; // show 3 cards on screen
  const gapPx = 24; // gap-6 = 24px
  const paddingX = 32; // px-4 (left+right) on the scroller = 32px total
  const [itemWidth, setItemWidth] = useState(300);

  // Measure item width so that exactly 3 items fit in the viewport area
  useEffect(() => {
    const measure = () => {
      const scroller = scrollRef.current;
      if (!scroller) return;
      const innerWidth = scroller.clientWidth - paddingX; // subtract scroller horizontal padding
      const width = Math.max(180, (innerWidth - gapPx * (visibleItems - 1)) / visibleItems);
      setItemWidth(Math.floor(width));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const getItemWidth = () => itemWidth + gapPx;

  // Scroll by one item to the left/right
  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const delta = direction === "left" ? -getItemWidth() : getItemWidth();
    scrollRef.current.scrollBy({ left: delta, behavior: "smooth" });
  };

  // Go to a specific index
  const goToIndex = (index) => {
    if (!scrollRef.current) return;
    const clamped = ((index % totalItems) + totalItems) % totalItems; // safe modulo
    const left = clamped * getItemWidth();
    scrollRef.current.scrollTo({ left, behavior: "smooth" });
    setCurrentIndex(clamped);
  };

  // Sync current index on scroll
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const handleScroll = () => {
      const idx = Math.round(el.scrollLeft / getItemWidth());
      setCurrentIndex(Math.max(0, Math.min(totalItems - 1, idx)));
    };
    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  // Autoplay
  useEffect(() => {
    if (isPaused) return;
    autoplayRef.current = setInterval(() => {
      goToIndex(currentIndex + 1);
    }, 3000);
    return () => clearInterval(autoplayRef.current);
  }, [currentIndex, isPaused]);

  // Keyboard navigation
  const onKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      scroll("left");
    }
    if (e.key === "ArrowRight") {
      e.preventDefault();
      scroll("right");
    }
  };

  return (
    <div className="w-screen h-auto bg-transparent px-5 py-5 relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      

      {/* Buttons */}
      <div className="absolute top-50 left-4 -translate-y-1/2 z-20">
        <button
          onClick={() => scroll("left")}
          className="bg-amber-200 border border-red-800 shadow-md p-3 rounded-full hover:bg-amber-300 transition duration-300 cursor-pointer text-red-800"
        >
          <ChevronLeft size={28} />
        </button>
      </div>

      <div className="absolute top-50 right-6 -translate-y-1/2 z-20">
        <button
          onClick={() => scroll("right")}
          className="bg-amber-200 border border-red-800 shadow-md p-3 rounded-full hover:bg-amber-300 transition duration-300 cursor-pointer text-red-800"
        >
          <ChevronRight size={28} />
        </button>
      </div>

      {/* Carousel */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-scroll no-scrollbar scroll-smooth px-4 snap-x snap-mandatory focus:outline-none"
        tabIndex={0}
        onKeyDown={onKeyDown}
      >
        {Array.from({ length: totalItems }).map((_, index) => (
          <div
            key={index}
            ref={index === 0 ? itemRef : null}
            className="snap-start shrink-0"
            style={{ width: itemWidth }}
          >
            <Card />
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="w-full flex items-center justify-center gap-2 mt-8">
        {Array.from({ length: totalItems }).map((_, index) => (
          <button
            key={index}
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => goToIndex(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              currentIndex === index ? "w-8 bg-red-800" : "w-2.5 bg-red-300 hover:bg-red-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselPage;
