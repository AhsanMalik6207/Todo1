import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";


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
const [todoItems, setTodoItems] = useState(multiTodoItem);
const handleNewItem=(todoName, todoDate) => {
  console.log(`New Item Added name: ${todoName} Date: ${todoDate}`);
  const newTodoItems=[
    ...todoItems, { todoName:todoName, todoDate:todoDate },
  ];
  console.log(newTodoItems)
  setTodoItems[newTodoItems]
}
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      
      <TodoItems todoItems={todoItems} />
      
    </center>
  );
}

export default App;