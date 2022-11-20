import React from "react";

const TodoList = ({ todos, handleDelete, handleEdit }) => {
  return (
    <ol >
      {todos.map((t) => (
        <li >
  
          <span  key={t.id}>{t.todo}</span>
          <div className="d-flex flex-row-reverse">
          <button type="button" class="btn btn-info mx-3 mt-1" onClick={() => handleEdit(t.id)}>Edit</button>
          <button  type="button" class="btn btn-danger mt-1" onClick={() => handleDelete(t.id)}>Delete</button>
          </div>
       
        </li>
      ))}
    </ol>
  );
};

export default TodoList;