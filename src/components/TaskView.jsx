import React from 'react';
import { MdOutlineEdit } from "react-icons/md";
import { FaTrash } from "react-icons/fa";

const TaskView = ({ task, onEdit, onDelete }) => {
  return (
    <div className="bg-gray-400 p-5 rounded-xl w-full">
      <div className="flex justify-between items-center mb-3">
        <p className="text-xl font-semibold">{task.name}</p>
        <div className="flex space-x-4">
          <MdOutlineEdit size={24} className="cursor-pointer hover:text-blue-500" onClick={() => onEdit(task)} />
          <FaTrash size={20} className="cursor-pointer hover:text-red-600" onClick={() => onDelete(task)} />
        </div>
      </div>
      <div className="flex justify-between">
        <p className="text-lg">Priority: {task.priority}</p>
        <p className="text-lg">Status: {task.status}</p>
      </div>
      <p className="text-sm mt-2">Due: {task.dueDate}</p>
      <p className="text-sm mt-2">{task.description }</p>
    </div>
  );
};

export default TaskView;
