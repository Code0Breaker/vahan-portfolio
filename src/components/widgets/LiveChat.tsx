"use client";

import { useEffect } from "react";

// You can choose between Tawk.to, Crisp, or other providers
// This implementation supports multiple providers

type ChatProvider = "tawk" | "crisp";

interface LiveChatProps {
  provider?: ChatProvider;
  // Tawk.to configuration
  tawkPropertyId?: string;
  tawkWidgetId?: string;
  // Crisp configuration
  crispWebsiteId?: string;
}

export default function LiveChat({
  provider = "tawk",
  tawkPropertyId = "YOUR_TAWK_PROPERTY_ID", // Replace with your Tawk.to Property ID
  tawkWidgetId = "YOUR_TAWK_WIDGET_ID", // Replace with your Tawk.to Widget ID
  crispWebsiteId = "YOUR_CRISP_WEBSITE_ID", // Replace with your Crisp Website ID
}: LiveChatProps) {
  useEffect(() => {
    // Don't load in development if IDs are not configured
    const isConfigured =
      (provider === "tawk" && !tawkPropertyId.includes("YOUR_")) ||
      (provider === "crisp" && !crispWebsiteId.includes("YOUR_"));

    if (!isConfigured) {
      console.log(
        `LiveChat: ${provider} is not configured. Please add your ${provider === "tawk" ? "Tawk.to Property ID and Widget ID" : "Crisp Website ID"}.`
      );
      return;
    }

    if (provider === "tawk") {
      // Tawk.to integration
      const script = document.createElement("script");
      script.async = true;
      script.src = `https://embed.tawk.to/${tawkPropertyId}/${tawkWidgetId}`;
      script.charset = "UTF-8";
      script.setAttribute("crossorigin", "*");
      document.head.appendChild(script);

      // Customize Tawk.to appearance
      (window as unknown as { Tawk_API?: { customStyle?: { zIndex?: number } } }).Tawk_API = (window as unknown as { Tawk_API?: { customStyle?: { zIndex?: number } } }).Tawk_API || {};
      (window as unknown as { Tawk_API: { customStyle: { zIndex: number } } }).Tawk_API.customStyle = {
        zIndex: 99,
      };

      return () => {
        document.head.removeChild(script);
      };
    } else if (provider === "crisp") {
      // Crisp integration
      (window as unknown as { $crisp?: unknown[]; CRISP_WEBSITE_ID?: string }).$crisp = [];
      (window as unknown as { CRISP_WEBSITE_ID: string }).CRISP_WEBSITE_ID = crispWebsiteId;

      const script = document.createElement("script");
      script.src = "https://client.crisp.chat/l.js";
      script.async = true;
      document.head.appendChild(script);

      return () => {
        document.head.removeChild(script);
      };
    }
  }, [provider, tawkPropertyId, tawkWidgetId, crispWebsiteId]);

  return null;
}

