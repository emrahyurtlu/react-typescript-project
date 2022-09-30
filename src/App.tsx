import "./App.css";
import Todos from "./components/Todo";
import Todo from "./models/todo";

function App() {
  const todo = [new Todo("Learn React"), new Todo("Learn Typescript")];
  return (
    <div>
      <Todos items={todo} />
    </div>
  );
}

export default App;
