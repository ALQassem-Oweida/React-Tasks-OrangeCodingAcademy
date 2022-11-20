import React from "react";

const TodoForm = ({ handleSubmit, todo, editId, setTodo }) => {
  return (
    <form class="input-group mb-3" onSubmit={handleSubmit}>
      <input class="form-control"
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button  class="btn btn-success" type="submit"> {editId ? "Applay Edit" : "Add"}</button>
    </form>
  );
};

export default TodoForm;