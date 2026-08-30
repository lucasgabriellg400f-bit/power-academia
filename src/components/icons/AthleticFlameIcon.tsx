import React from "react";

export function AthleticFlameIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      {/* Geometric, angular athletic flame mark */}
      <path d="M12 2L14.5 7.5L18 9L15 13L16.5 19L12 16L7.5 19L9 13L6 9L9.5 7.5L12 2Z" />
    </svg>
  );
}
