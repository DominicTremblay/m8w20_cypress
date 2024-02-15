import React from 'react';

import './TodoListItem.scss';

const TodoListItem = ({ id, task, completed, deleteTodo, checkTodo }) => {
  return (
    <li className="list-group-item new-todo">
      <div className="task-group">
        <input
          type="checkbox"
          value={task}
          checked={completed}
          onChange={() => checkTodo(id)}
        />{' '}
        <label>{task}</label>
      </div>
      <button onClick={(event) => deleteTodo(id)} className="remove-todo">
        X
      </button>
    </li>
  );
};

export default TodoListItem;
