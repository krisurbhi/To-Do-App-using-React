import React, { useState } from 'react';
import TodoItem from './TodoItem';

function TodoList({ tasks, removeTask, toggleTaskCompletion, updateTask }) {
  const [filter, setFilter] = useState('all');
  const [sortOrder, setSortOrder] = useState('asc');

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true;
  });

  const sortedTasks = filteredTasks.sort((a, b) => {
    if (sortOrder === 'asc') return a.text.localeCompare(b.text);
    return b.text.localeCompare(a.text);
  });

  return (
    <div>
      <div>
        <label>Filter: </label>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
        </select>
      </div>
      <div>
        <label>Sort: </label>
        <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
      <ul>
        {sortedTasks.map((task, index) => (
          <TodoItem
            key={index}
            task={task}
            index={index}
            removeTask={removeTask}
            toggleTaskCompletion={toggleTaskCompletion}
            updateTask={updateTask}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
