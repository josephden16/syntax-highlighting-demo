import "./App.css";
import microlight from "microlight";

function App() {
  // eslint-disable-next-line no-undef
  console.log(microlight);

  return (
    <div className="App">
      <h1>Microlight.js Demo</h1>
      <div className="code-block">
        <pre>
          <code className="microlight">
            {`
            for (let i = 0; i < 10; i++) {
              console.log('I love JavaScript!');
            }
        
            function exampleFunc() {
              return exampleFunc(); // This won't end well :(
            }
        
            exmpleFunc();
            `}
          </code>
        </pre>
      </div>
    </div>
  );
}

export default App;
