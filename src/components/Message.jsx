import { useContext } from "react";
import { TodoItemsContext } from "../store/todoItem-store";

const Message=()=>{
  const {todoItems} =useContext(TodoItemsContext)
  return(
    
    todoItems.length === 0 && <p>This is Todo</p>
  )
}
export default Message;