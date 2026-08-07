/**
 * Every section opens the same way: a rule, the section's own label, and its
 * index in the document — the same index the status bar reports.
 */
export default function SectionHeader({
  index,
  eyebrow,
  heading,
  description,
  onPanel = false,
}: {
  index: number;
  eyebrow: string;
  heading: string;
  description?: string;
  onPanel?: boolean;
}) {
  const rule = onPanel ? "border-rule-dark" : "border-rule";
  const label = onPanel ? "text-muted-dark" : "text-muted";
  const body = onPanel ? "text-muted-dark" : "text-muted";

  return (
    <div className={`reveal border-t ${rule} pt-4`}>
      <div className="flex items-baseline justify-between gap-4">
        <span className={`t-eyebrow ${label}`}>{eyebrow}</span>
        <span className={`t-meta ${label}`} aria-hidden="true">
          {String(index).padStart(2, "0")}
        </span>
      </div>

      <h2 className="t-section mt-7 max-w-3xl text-balance">{heading}</h2>

      {description && (
        <p className={`t-lead mt-5 max-w-2xl ${body}`}>{description}</p>
      )}
    </div>
  );
}
