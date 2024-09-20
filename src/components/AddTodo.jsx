import { useState } from "react";

function AddTodo({ onNewItem }) {
  const[todoName, setTodoName]= useState( )
    const[todoDate, setDate]= useState( )
    const handleNameChange = (event) =>{
   setTodoName(event.target.value)
    }
const handleDateChange = (event) =>{
setDate(event.target.value)
    }
    const handleAddButtonClicked = ()=> {
      onNewItem(todoName, todoDate)

    }
  return (
    <div class="container text-center">
      <div class="row kg-row">
        <div class="col-6">
          <input type="text" value={todoName} placeholder="Enter Todo Here" onChange={handleNameChange} />
        </div>
        <div class="col-4">
          <input type="date" value={todoDate} onChange={handleDateChange} />
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-success kg-button" onClick={handleAddButtonClicked}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;