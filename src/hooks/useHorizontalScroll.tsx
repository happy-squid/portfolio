
import { useEffect, useRef, RefObject } from "react";

export function useHorizontalScroll(): RefObject<HTMLDivElement> {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    
    const onWheel = (e: WheelEvent) => {
      if (e.deltaY === 0) return;
      
      // Prevent default vertical scrolling behavior
      e.preventDefault();
      
      // Apply multiplier to make horizontal scrolling feel natural
      const scrollMultiplier = 2.0; // Increased for more noticeable effect
      
      // Directly update scrollLeft to match scroll pace
      el.scrollLeft += e.deltaY * scrollMultiplier;
    };
    
    // Touch event handling for mobile devices
    let touchStartX = 0;
    let touchStartY = 0;
    
    const onTouchStart = (e: TouchEvent) => {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    };
    
    const onTouchMove = (e: TouchEvent) => {
      if (!touchStartX || !touchStartY) return;
      
      const touchEndX = e.touches[0].clientX;
      const touchEndY = e.touches[0].clientY;
      
      const xDiff = touchStartX - touchEndX;
      const yDiff = touchStartY - touchEndY;
      
      // If horizontal swipe is stronger than vertical, prevent default scrolling
      if (Math.abs(xDiff) > Math.abs(yDiff)) {
        e.preventDefault();
        el.scrollLeft += xDiff;
        touchStartX = touchEndX;
      }
      
      touchStartY = touchEndY;
    };
    
    // Make sure horizontal scrolling is the primary behavior
    document.body.style.overflowY = 'hidden';
    document.body.style.overflowX = 'hidden';
    
    // Add event listeners
    el.addEventListener('wheel', onWheel, { passive: false });
    el.addEventListener('touchstart', onTouchStart, { passive: true });
    el.addEventListener('touchmove', onTouchMove, { passive: false });
    
    return () => {
      el.removeEventListener('wheel', onWheel);
      el.removeEventListener('touchstart', onTouchStart);
      el.removeEventListener('touchmove', onTouchMove);
      document.body.style.overflowY = '';
      document.body.style.overflowX = '';
    };
  }, []);
  
  return scrollRef;
}
