"use client";

import dynamic from "next/dynamic";

const MatrixRain = dynamic(() => import("./MatrixRain"), { ssr: false });
const Preloader = dynamic(() => import("./Preloader"), { ssr: false });
const ScrollProgress = dynamic(() => import("./ScrollProgress"), { ssr: false });
const BackToTop = dynamic(() => import("./BackToTop"), { ssr: false });
const CustomCursor = dynamic(() => import("./CustomCursor"), { ssr: false });
const LiveChat = dynamic(() => import("./LiveChat"), { ssr: false });

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Preloader />
      <MatrixRain />
      <ScrollProgress />
      <CustomCursor />
      <BackToTop />
      <LiveChat 
        provider="tawk"
        // Replace these with your actual Tawk.to credentials:
        // tawkPropertyId="YOUR_PROPERTY_ID"
        // tawkWidgetId="YOUR_WIDGET_ID"
        // Or use Crisp:
        // provider="crisp"
        // crispWebsiteId="YOUR_CRISP_ID"
      />
      {children}
    </>
  );
}
