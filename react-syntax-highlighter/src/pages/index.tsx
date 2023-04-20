import { Inter } from "next/font/google";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import docco from "react-syntax-highlighter/dist/cjs/styles/hljs";

const inter = Inter({ subsets: ["latin"] });

const codeSnippet = `const randomPassword = () => {
  const symbols = '!@#$%^&*()_-+={}[];:<>,.?/~';
  const allChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890' + symbols;
  let password = '';
  for (let i = 0; i < 10; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars[randomIndex];
  }
  return password;
}

console.log(randomPassword());
`;

export default function Home() {
  return (
    <main className="m-3">
      <h1 className="text-3xl font-bold mb-4">react-syntax-highlighter demo</h1>
      <div className="max-w-[900px]">
        <SyntaxHighlighter language="javascript" style={docco}>
          {codeSnippet}
        </SyntaxHighlighter>
      </div>
    </main>
  );
}
