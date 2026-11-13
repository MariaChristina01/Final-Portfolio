import { useEffect, useState } from "react";

const STEPS = [
  "Reproduce the problem",
  "Check logs and recent changes",
  "Isolate the root cause",
  "Apply and test the fix",
  "Document it for the team",
];

export default function Diagnostic() {
  const [n, setN] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setN((v) => (v >= STEPS.length ? 0 : v + 1)), 1400);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="panel" aria-label="How I troubleshoot">
      <h3>How I troubleshoot</h3>
      <small>{n >= STEPS.length ? "Resolved" : "In progress"}</small>
      <ul className="steps">
        {STEPS.map((s, i) => (
          <li key={s} className={i < n ? "done" : ""}>
            <i>{i < n ? "✓" : ""}</i>
            {s}
          </li>
        ))}
      </ul>
    </div>
  );
}
