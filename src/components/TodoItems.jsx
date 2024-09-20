import TodoItem from "./TodoItem"

const TodoItems=({todoItems})=>{
  console.log("this is TodoItems",todoItems)
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