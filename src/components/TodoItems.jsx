import { useContext } from "react"
import TodoItem from "./TodoItem"
import { TodoItemsContext } from "../store/todoItem-store"

const TodoItems=()=>{
  const {todoItems} =useContext(TodoItemsContext)
  // console.log("this is TodoItems",todoItems)
  return(
    <>
    <div className="items-container">
    { 
    todoItems.map(item=><TodoItem todoDate={item.todoDate} todoName={item.todoName}/>)}
    </div>
      
    </>
  )
}
export default TodoItems