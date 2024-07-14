import React, { useState } from 'react';

function TodoItem({ task, index, removeTask, toggleTaskCompletion, updateTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleUpdate = () => {
    updateTask(index, newText);
    setIsEditing(false);
  };

  return (
    <li style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          onBlur={handleUpdate}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleUpdate();
          }}
        />
      ) : (
        <span>{task.text}</span>
      )}
      <button onClick={() => toggleTaskCompletion(index)}>
        {task.completed ? 'Undo' : 'Complete'}
      </button>
      <button onClick={() => removeTask(index)}>Remove</button>
      <button onClick={() => setIsEditing(!isEditing)}>Edit</button>
    </li>
  );
}

export default TodoItem;
