import { Counter } from "./Counter.js";
import { container } from "./App.css.js";

const App = ({ name }: { name: string }) => {
  return (
    <div className={container}>
      <h1>Hello {name}!!</h1>
      <h3>This is a server component.</h3>
      <Counter />
    </div>
  );
};

export default App;
