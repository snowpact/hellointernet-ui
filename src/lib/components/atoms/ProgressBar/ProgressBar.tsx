import React, { useEffect, useState } from 'react';

function getDocHeight(document: Document) {
  return Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,

    document.body.offsetHeight,
    document.documentElement.offsetHeight,

    document.body.clientHeight,
    document.documentElement.clientHeight
  );
}

interface ProgressBarProps {
  color?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ color }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    function calculateScrollDistance() {
      const scrollTop = window.pageYOffset;
      const winHeight = window.innerHeight;
      const docHeight = getDocHeight(document);

      const totalDocScrollLength = docHeight - winHeight;
      const scrollPosition = Math.floor((scrollTop / totalDocScrollLength) * 100);

      setScrollPosition(scrollPosition);
    }

    function handleScroll() {
      calculateScrollDistance();
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="fixed top-0 z-[1001] h-[4px] bg-blue-100 transition-all duration-300 ease-out"
      style={{
        width: `${scrollPosition}%`,
        backgroundColor: color
      }}
    />
  );
};
