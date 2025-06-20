"use client";

import { useState } from "react";

export default function Home() {
  const [hover, setHover] = useState(false);

  const catNormal = `
|\\---/|
| o_o |
\\_^_/
`;

  const catSad = `
   /\\_/\\  (
   ( ^.^ ) _)
   \\"/  (
( | | )
(__d b__)
`;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black">
      <pre
        className="text-white font-mono text-center cursor-pointer select-none"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        aria-label="Chat ASCII animé"
      >
        {hover ? catSad : catNormal}
      </pre>
    </main>
  );
}
