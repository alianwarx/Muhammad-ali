import { useState, useEffect, useRef } from "react";

interface PhotoPosition {
  id: number;
  src: string;
  x: string;
  y: string;
  rotation: number;
  zIndex: number;
}

export default function Temp() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Define photo positions for different screen sizes
  const getPhotoPositions = (isMobile: boolean, isTablet: boolean): PhotoPosition[] => {
    // Single-line horizontal layout: positions chosen to be visually balanced
    if (isMobile) {
      return [
        { id: 1, src: "data/path-01.jpeg", x: "1%", y: "55%", rotation: -8, zIndex: 4 },
        { id: 2, src: "data/path-02.jpeg", x: "12%", y: "-8%", rotation: 4, zIndex: 1 },
        { id: 3, src: "data/path-03.jpeg", x: "30%", y: "45%", rotation: 7, zIndex: 2 },
        { id: 4, src: "data/path-04.jpeg", x: "50%", y: "-10%", rotation: -99, zIndex: -1 },
        { id: 5, src: "data/path-05.jpeg", x: "65%", y: "55%", rotation: -17, zIndex: 2 },
        { id: 6, src: "data/path-06.jpeg", x: "80%", y: "05%", rotation: 3, zIndex: 1 },
      ];
    }

    if (isTablet) {
      return [
        { id: 1, src: "data/path-01.jpeg", x: "1%", y: "55%", rotation: -8, zIndex: 4 },
        { id: 2, src: "data/path-02.jpeg", x: "12%", y: "-8%", rotation: 4, zIndex: 1 },
        { id: 3, src: "data/path-03.jpeg", x: "30%", y: "45%", rotation: 7, zIndex: 2 },
        { id: 4, src: "data/path-04.jpeg", x: "50%", y: "-10%", rotation: -99, zIndex: -1 },
        { id: 5, src: "data/path-05.jpeg", x: "65%", y: "55%", rotation: -17, zIndex: 2 },
        { id: 6, src: "data/path-06.jpeg", x: "80%", y: "05%", rotation: 3, zIndex: 1 },
      ];
    }

    // Desktop
    return [
      { id: 1, src: "data/path-01.jpeg", x: "1%", y: "55%", rotation: -8, zIndex: 4 },
      { id: 2, src: "data/path-02.jpeg", x: "12%", y: "-8%", rotation: 4, zIndex: 1 },
      { id: 3, src: "data/path-03.jpeg", x: "30%", y: "45%", rotation: 7, zIndex: 2 },
      { id: 4, src: "data/path-04.jpeg", x: "50%", y: "-10%", rotation: -99, zIndex: -1 },
      { id: 5, src: "data/path-05.jpeg", x: "65%", y: "55%", rotation: -17, zIndex: 2 },
      { id: 6, src: "data/path-06.jpeg", x: "80%", y: "05%", rotation: 3, zIndex: 1 },
    ];
  };

  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    // Intersection Observer for fade-in on scroll
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Handle responsive breakpoints
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const photoPositions = getPhotoPositions(isMobile, isTablet);
  // Hide photos on screens smaller than iPad
  if (isMobile) return null;

  return (
    <div
      ref={containerRef}
      className="journey-photos-container relative w-full"
      style={{
        minHeight: isMobile ? "200px" : isTablet ? "240px" : "280px",
      }}
    >
      {photoPositions.map((photo, idx) => (
        <div
          key={photo.id}
          className="journey-photo-wrapper absolute"
          style={{
            left: photo.x,
            top: photo.y,
            zIndex: photo.zIndex,
            width: isMobile ? "160px" : isTablet ? "200px" : "240px",
            height: isMobile ? "160px" : isTablet ? "200px" : "240px",
          }}
        >
          <img
            src={photo.src}
            alt={`Journey milestone ${photo.id}`}
            className={`journey-photo ${isVisible ? "visible" : ""}`}
            style={{
              "--rotation": `${photo.rotation}deg`,
              "--animation-delay": `${idx * 150}ms`,
            } as React.CSSProperties & { "--rotation": string; "--animation-delay": string }}
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
}
