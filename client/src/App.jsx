import './App.css';
import Header from './Components/Header';
import Todo from './Components/Todo';
import TodoForm from './Components/TodoForm';

function App() {
  return (
    <div>
      <Header/>
      <TodoForm/>
      <Todo/>
    </div>
  );
}

export default App;
