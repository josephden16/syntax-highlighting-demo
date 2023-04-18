import { Code } from "bright";

const code = `
const randomPassword = () => {
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
`.trim();

export default function Home() {
  return (
    <main className="p-5">
      <h1 className="text-3xl font-bold">Bright Demo</h1>
      <div className="max-w-[500px]">
        <Code theme={"one-dark-pro"} lang="js" title="code.js">
          {code}
        </Code>
      </div>
    </main>
  );
}
