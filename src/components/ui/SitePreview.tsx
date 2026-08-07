"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowUpRight, RotateCw } from "lucide-react";
import { useLanguage } from "@/lib/i18n/context";

/** Desktop viewport the embedded site is rendered at before scaling down. */
const VIEWPORT_WIDTH = 1440;
const VIEWPORT_HEIGHT = 1000;

interface SitePreviewProps {
  url: string;
  title: string;
  index: number;
  /** False when the site sends X-Frame-Options or CSP frame-ancestors. */
  embeddable?: boolean;
  previewImage?: string;
}

export default function SitePreview({
  url,
  title,
  index,
  embeddable = true,
  previewImage,
}: SitePreviewProps) {
  const { t } = useLanguage();
  const [loading, setLoading] = useState(embeddable);
  const [failed, setFailed] = useState(false);
  const [scale, setScale] = useState(0.25);
  const frameRef = useRef<HTMLIFrameElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  const host = url.replace(/^https?:\/\//, "").replace(/\/$/, "");

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const observer = new ResizeObserver(([entry]) => {
      setScale(Math.min(entry.contentRect.width / VIEWPORT_WIDTH, 1));
    });
    observer.observe(stage);
    return () => observer.disconnect();
  }, []);

  const reload = useCallback(() => {
    if (!embeddable || !frameRef.current) return;
    setLoading(true);
    setFailed(false);
    frameRef.current.src = url;
  }, [embeddable, url]);

  return (
    <div className="border border-rule-dark bg-panel-hi">
      <div className="flex items-center gap-3 border-b border-rule-dark px-3 py-2">
        <span className="t-meta text-muted-dark" aria-hidden="true">
          {String(index).padStart(2, "0")}
        </span>
        <span className="t-meta flex-1 truncate text-surface">{host}</span>

        {embeddable && (
          <button
            type="button"
            onClick={reload}
            aria-label={t.ui.reloadPreview}
            className="p-1 text-muted-dark transition-colors hover:text-surface"
          >
            <RotateCw
              size={12}
              strokeWidth={2}
              className={loading ? "animate-spin" : undefined}
            />
          </button>
        )}

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${t.ui.openSite}: ${title}`}
          className="p-1 text-muted-dark transition-colors hover:text-surface"
        >
          <ArrowUpRight size={13} strokeWidth={2} />
        </a>
      </div>

      <div
        ref={stageRef}
        className="relative h-[220px] overflow-hidden bg-white sm:h-[280px]"
      >
        {!embeddable ? (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="group/preview absolute inset-0 block"
          >
            {previewImage ? (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                src={previewImage}
                alt={title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover object-top"
              />
            ) : null}
            <span className="absolute inset-0 flex items-end bg-panel/70 p-3 opacity-0 transition-opacity duration-200 group-hover/preview:opacity-100">
              <span className="t-meta inline-flex items-center gap-1.5 bg-surface px-2.5 py-1.5 text-paper">
                <ArrowUpRight size={12} strokeWidth={2} />
                {t.ui.openSite}
              </span>
            </span>
            <span className="sr-only">{t.ui.previewBlocked}</span>
          </a>
        ) : (
          <>
            {(loading || failed) && (
              <p className="absolute inset-0 z-10 flex items-center justify-center bg-panel-hi text-[0.6875rem] text-muted-dark">
                {failed ? t.ui.previewBlocked : `${t.ui.loadingPreview}…`}
              </p>
            )}
            <iframe
              ref={frameRef}
              src={url}
              title={title}
              loading="lazy"
              tabIndex={-1}
              sandbox="allow-scripts allow-same-origin allow-popups"
              onLoad={() => setLoading(false)}
              onError={() => {
                setLoading(false);
                setFailed(true);
              }}
              className="absolute left-0 top-0 origin-top-left border-0"
              style={{
                width: VIEWPORT_WIDTH,
                height: VIEWPORT_HEIGHT,
                transform: `scale(${scale})`,
              }}
            />
            {/* The preview is decoration for a link, not an interactive
                surface — swallow pointer events so scrolling never traps. */}
            <span className="absolute inset-0" aria-hidden="true" />
          </>
        )}
      </div>
    </div>
  );
}
