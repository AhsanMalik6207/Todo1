import { useContext, useRef } from "react";
import { IoMdAddCircle  } from "react-icons/io";
import { TodoItemsContext } from "../store/todoItem-store";
function AddTodo() {
  const {handleNewItem} =useContext(TodoItemsContext)
  const todoNameRefere= useRef(); 
    const dueDateRefere= useRef(); 

//   const[todoName, setTodoName]= useState()
//     const[todoDate, setDate]= useState()
//     const handleNameChange = (event) =>{
//    setTodoName(event.target.value)
//     }
// const handleDateChange = (event) =>{
// setDate(event.target.value)
//     }
    const handleAddButtonClicked = (event)=> {
       event.preventDefault();
       const todoName=todoNameRefere.current.value;
       const todoDate=dueDateRefere.current.value;
      handleNewItem(todoName, todoDate)
      todoNameRefere.current.value = ""
      dueDateRefere.current.value = ""
      // setDate("")
      // setTodoName("")

    }
  return (
    <div class="container text-center">
      <form onSubmit={handleAddButtonClicked} class="row kg-row">
        <div class="col-6">
          <input type="text" ref={todoNameRefere} placeholder="Enter Todo Here"  />
        </div>
        <div class="col-4">
          <input type="date" ref={dueDateRefere}  />
        </div>
        <div class="col-2">
          <button type="submit" class="btn btn-success kg-button" >
            <IoMdAddCircle  />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;