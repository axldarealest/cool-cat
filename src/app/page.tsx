import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black">
      <pre className="text-white font-mono text-center">
        {`
      _._
     /   \\
    (  ^  )
   /\`-----'\\
  //       \\\\
 //|  |||  |\\\\
'| |  |||  | | \`
 | |  |||  | |
 | |  |||  | |
 \` |  |||  | '
  ||  |||  ||
  ||  |||  ||
  ||       ||
  ||       ||
 / |       | \\
/ / \`-----' \\ \\
\`'           \`'
`}
      </pre>
    </main>
  );
}
