import { Code } from "bright";

const code = `
for (let i = 0; i < 10; i++) {
  console.log('I love JavaScript!');
}

function exampleFunc() {
  return exampleFunc(); // This won't end well :(
}

exmpleFunc();
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
