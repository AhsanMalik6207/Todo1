import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";
import Message from "./components/Message";
import { TodoItemsContext } from "./store/todoItem-store";


function App() {

  let initialTodoItems=[{
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
const [todoItems, setTodoItems] = useState(initialTodoItems);
const handleNewItem=(todoName, todoDate) => {
  console.log(`New Item Added name: ${todoName} Date: ${todoDate}`);
  setTodoItems((initial)=>[
   ...initial, {
  todoName:todoName,
   todoDate:todoDate
},
  ])
}
const handleDeleteChange= (todoName)=>{
  const newItem= todoItems.filter((item)=> item.todoName !==  todoName);
  setTodoItems(newItem)
}
  return (
    <TodoItemsContext.Provider value={{todoItems,handleNewItem,handleDeleteChange }}>
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <Message></Message>
      <TodoItems/>
    </center>
    </TodoItemsContext.Provider>
  );
}

export default App;