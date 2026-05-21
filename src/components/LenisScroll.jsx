"use client";
import { ReactLenis } from 'lenis/react';

export default function LenisScroll({ children }) {
  return (
   <ReactLenis options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}