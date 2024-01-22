// LocomotiveScrollContainer.js
import React, { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
const LocomotiveScrollContainer = ({ children }) => {
  const scrollRef = useRef(null);
  useEffect(() => {
    if (scrollRef.current) {
      const scroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
      });
      return () => scroll.destroy();
    }
  }, []);

  return (
    <div data-scroll-container ref={scrollRef}>
      {children}
    </div>
  );
};

export default LocomotiveScrollContainer;
