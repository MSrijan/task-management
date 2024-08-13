import React from 'react';
import TaskView from './TaskView';

const TaskList = ({ tasks, onEdit, onDelete }) => {
  return (
    <div className="flex flex-wrap gap-4 mt-6 w-[96%] sm:w-1/2">
      {tasks.map((task) => (
        <TaskView
          key={task.id}
          task={task}
          onEdit={() => onEdit(task)}
          onDelete={() => onDelete(task.id)}
        />
      ))}
    </div>
  );
};

export default TaskList;
