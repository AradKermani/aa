"use client";

import React, { useEffect, useState } from "react";

const ProgressBar: React.FC = () => {
  const [scrollWidth, setScrollWidth] = useState<number>(0);

  const updateScrollProgress = (): void => {
    const scrollTop: number = window.scrollY;
    const scrollHeight: number = document.documentElement.scrollHeight;
    const clientHeight: number = document.documentElement.clientHeight;

    const scrolled: number = (scrollTop / (scrollHeight - clientHeight)) * 100;
    setScrollWidth(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScrollProgress);
    updateScrollProgress();

    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
    };
  }, []);

  return (
    <div className="progress-bar-container">
      <div className="progress-bar" style={{ width: `${scrollWidth}%` }}></div>
    </div>
  );
};

export default ProgressBar;
