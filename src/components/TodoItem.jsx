import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { TodoItemsContext } from "../store/todoItem-store";

function TodoItem({todoName, todoDate}) {
const {handleDeleteChange} =useContext(TodoItemsContext)
  return (
    <div class="container">
      <div class="row kg-row">
        <div class="col-6">{todoName}</div>
        <div class="col-4">{todoDate}</div>
        <div class="col-2">
          <button type="button" onClick={()=> handleDeleteChange(todoName)} class="btn btn-danger kg-button">
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;