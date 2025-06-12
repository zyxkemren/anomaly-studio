"use client";

import { useEffect } from "react";

export default function customCursor({ children }) {
  useEffect(() => {
    const cursor = document.getElementById("custom-cursor");

    const move = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      cursor.style.left = `${x - 10}px`;
      cursor.style.top = `${y - 10}px`;
    };

    document.addEventListener("mousemove", move);
    return () => document.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="relative">
      <div
        id="custom-cursor"
        className="pointer-events-none fixed z-[9999] w-5 h-5 bg-white/80 rounded-full mix-blend-difference transition-transform duration-75 ease-linear"
        style={{ left: 0, top: 0 }}
      />
      <div className="cursor-none">{children}</div>
    </div>
  );
}
