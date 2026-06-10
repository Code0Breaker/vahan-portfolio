"use client";

import dynamic from "next/dynamic";
import { LanguageProvider } from "@/lib/i18n/context";

const MatrixRain = dynamic(() => import("@/components/effects/MatrixRain"), { ssr: false });
const Preloader = dynamic(() => import("@/components/effects/Preloader"), { ssr: false });
const ScrollProgress = dynamic(() => import("@/components/effects/ScrollProgress"), { ssr: false });
const BackToTop = dynamic(() => import("@/components/effects/BackToTop"), { ssr: false });
const CustomCursor = dynamic(() => import("@/components/effects/CustomCursor"), { ssr: false });
const LiveChat = dynamic(() => import("@/components/widgets/LiveChat"), { ssr: false });

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
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
    </LanguageProvider>
  );
}
