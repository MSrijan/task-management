import React from 'react';
import { MdOutlineEdit } from "react-icons/md";
import { FaTrash } from "react-icons/fa";

const ProjectView = ({ project, onEdit, onDelete }) => {
  return (
    <div className="bg-gray-400 p-5 rounded-xl w-full">
      <div className="flex justify-between items-center mb-3">
        <p className='text-2xl'>{project.name}</p>
        <div className="flex space-x-4">
          <MdOutlineEdit
            size={30}
            className="hover:text-blue-500 cursor-pointer"
            onClick={() => onEdit(project)}
          />
          <FaTrash
            size={20}
            className='hover:text-red-500 cursor-pointer'
            onClick={() => onDelete(project)}
          />
        </div>
      </div>
      <p className='text-lg'>{project.description}</p>
    </div>
  );
};

export default ProjectView;
