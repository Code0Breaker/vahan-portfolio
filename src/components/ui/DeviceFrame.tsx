"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { ExternalLink, RefreshCw } from "lucide-react";

// Desktop viewport width
const VIEWPORT_WIDTH = 1440;

interface DeviceFrameProps {
  url: string;
  title: string;
  /** When false the site blocks framing, so a static screenshot is shown instead. */
  embeddable?: boolean;
  previewImage?: string;
}

export default function DeviceFrame({ url, title, embeddable = true, previewImage }: DeviceFrameProps) {
  const [isLoading, setIsLoading] = useState(embeddable);
  const [hasError, setHasError] = useState(false);
  const [scale, setScale] = useState(0.5);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Calculate scale based on container width
  const updateScale = useCallback(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const newScale = containerWidth / VIEWPORT_WIDTH;
      setScale(Math.min(newScale, 1));
    }
  }, []);

  // Update scale on mount and resize
  useEffect(() => {
    updateScale();

    const handleResize = () => updateScale();
    window.addEventListener("resize", handleResize);

    const timer = setTimeout(updateScale, 100);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timer);
    };
  }, [updateScale]);

  const handleRefresh = () => {
    if (!embeddable) return;
    setIsLoading(true);
    setHasError(false);
    if (iframeRef.current) {
      iframeRef.current.src = url;
    }
  };

  return (
    <div className="relative w-full max-w-full overflow-hidden">
      {/* Browser Chrome */}
      <div className="bg-[#1a1a24] rounded-t-xl border border-border border-b-0">
        <div className="flex items-center justify-between px-2 sm:px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <div className="flex-1 mx-2 sm:mx-4 min-w-0">
            <div className="flex items-center gap-2 px-2 sm:px-4 py-1.5 bg-muted rounded-lg">
              <div className="w-3 h-3 sm:w-4 sm:h-4 rounded bg-primary/20 flex-shrink-0" />
              <span className="text-[10px] sm:text-xs text-muted-foreground font-mono truncate">{url}</span>
            </div>
          </div>
          <button
            onClick={handleRefresh}
            className="p-1.5 hover:bg-muted rounded-lg transition-colors"
            title="Refresh"
          >
            <RefreshCw size={14} className={`text-muted-foreground ${isLoading ? "animate-spin" : ""}`} />
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div
        ref={containerRef}
        className="relative bg-white rounded-b-xl border border-border border-t-0 overflow-hidden w-full max-w-full"
        style={{ height: "300px" }}
      >
        {!embeddable ? (
          /* Static screenshot for sites that block iframe embedding */
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="group/preview absolute inset-0 block"
            title={`Visit ${title}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={previewImage}
              alt={`${title} preview`}
              className="absolute inset-0 w-full h-full object-cover object-top"
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-background/60 opacity-0 group-hover/preview:opacity-100 transition-opacity duration-300">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-background rounded-lg font-mono text-sm">
                <ExternalLink size={16} />
                Visit Live Site
              </span>
            </div>
          </a>
        ) : (
          <>
            {/* Loading State */}
            {isLoading && !hasError && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-muted z-10">
                <div className="relative">
                  <div className="w-12 h-12 border-2 border-primary/30 rounded-full animate-spin border-t-primary" />
                </div>
                <p className="mt-4 text-sm text-muted-foreground font-mono">Loading {title}...</p>
              </div>
            )}

            {/* Error State */}
            {hasError && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-muted z-10">
                <p className="text-muted-foreground mb-4">Unable to load preview</p>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-background rounded-lg font-mono text-sm"
                >
                  <ExternalLink size={16} />
                  Visit Site Directly
                </a>
              </div>
            )}

            {/* Iframe */}
            <iframe
              ref={iframeRef}
              src={url}
              title={title}
              className="absolute top-0 left-0 border-0 origin-top-left"
              style={{
                width: `${VIEWPORT_WIDTH}px`,
                height: "1000px",
                transform: `scale(${scale})`,
              }}
              onLoad={() => {
                setIsLoading(false);
                updateScale();
              }}
              onError={() => {
                setIsLoading(false);
                setHasError(true);
              }}
              sandbox="allow-scripts allow-same-origin allow-popups"
              loading="lazy"
            />
          </>
        )}
      </div>
    </div>
  );
}
