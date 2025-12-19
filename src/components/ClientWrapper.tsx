"use client";

import dynamic from "next/dynamic";

const MatrixRain = dynamic(() => import("./MatrixRain"), { 
  ssr: false 
});

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MatrixRain />
      {children}
    </>
  );
}

