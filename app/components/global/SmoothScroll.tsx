"use client";
import { ReactLenis } from "lenis/react";

function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 3, syncTouch: true }}>
      {children}
    </ReactLenis>
  );
}

export default SmoothScroll;
