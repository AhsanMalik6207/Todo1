function Todo(){
  return (<>
  <div class="container text-center">
    <h1>Todo App</h1>
  <div class="row">
    <div class="col-6"><input type="text" placeholder="Enter Todo Here" /></div>
    <div class="col-4"><input type="date" /></div>
    <div class="col-2"><button type="button" class="btn btn-success">Add</button>
</div>

  </div>
  <div class="row">
    <div class="col-6">Buy milk</div>
    <div class="col-4">10/4/2023</div>
    <div class="col-2"><button type="button" class="btn btn-danger">Delete</button>
</div>
  </div>
</div>
  </>)
}
export default Todo;