export default function Monogram({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-flex h-6 w-6 shrink-0 items-center justify-center bg-ink text-[10px] font-semibold leading-none tracking-tight text-paper ${className}`}
      style={{ fontFamily: "var(--font-display)" }}
    >
      VM
    </span>
  );
}
