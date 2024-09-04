import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";


function App() {
  let multiTodoItem=[{
    todoName:"Buy Milk",
    todoDate:"4/10/2023"
  },
{
todoName:"Go to College",
 todoDate:"4/11/2023"
},{
  todoName:"Welcome to Map method",
 todoDate:"4/11/2023"
},{
  todoName:"Good Morning",
   todoDate:"4/10/2024"
}]
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      
      <TodoItems multiTodoItem={multiTodoItem} />
      
    </center>
  );
}

export default App;