import React, { useState } from 'react';

const TodoItem = ({ todo, toggleTodo, deleteTodo, editTodo }) => {
  const [editMode, setEditMode] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = () => {
    if (editedText.trim() === '') {
      return; // Don't save empty edits
    }

    editTodo(todo.id, editedText);
    setEditMode(false);
  };

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      {editMode ? (
        <input
          type="text"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
        />
      ) : (
        <p>{todo.text}</p>
      )}
      <button className="edit-button" onClick={handleEdit}>
        Edit
      </button>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      {editMode && <button onClick={handleSave}>Save</button>}
    </div>
  );
};

export default TodoItem;
