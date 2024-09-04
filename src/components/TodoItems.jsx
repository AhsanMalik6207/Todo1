import TodoItem from "./TodoItem"

const TodoItems=({multiTodoItem})=>{
  return(
    <>
    <div className="items-container">
    {multiTodoItem.map(item=><TodoItem todoDate={item.todoDate} todoName={item.todoName}/>)}
    </div>
      
    </>
  )
}
export default TodoItems