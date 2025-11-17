"use client";

import { useState } from "react";

export default function CopyIPButton({ ip }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(ip);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <button className="btn btn-primary" onClick={copy}>
      {copied ? "Copied!" : ip}
    </button>
  );
}
