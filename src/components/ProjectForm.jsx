import React, { useState } from 'react';
import { RxCross2 } from "react-icons/rx";

const ProjectForm = ({ handleSubmit, formTitle, formName, hideModal, project }) => {
  const [name, setName] = useState(project ? project.name : '');
  const [description, setDescription] = useState(project ? project.description : '');

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(e, name, description);
  };

  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg max-w-md w-full">
      <div className="flex justify-between items-center w-full mb-4">
        <p className="text-2xl font-semibold">{formTitle}</p>
        <RxCross2
          className="text-gray-500 cursor-pointer hover:text-gray-700"
          size={24}
          onClick={hideModal}
        />
      </div>
      <form onSubmit={onSubmit}>
        <div className="flex flex-col space-y-4">
          <div>
            <label htmlFor="name" className="block text-lg font-medium text-gray-700">
              {formName}
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 p-2 w-full border text-black rounded-lg focus:ring-blue-500 focus:border-blue-500"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-lg font-medium text-gray-700">
              Description
            </label>
            <textarea
              name="description"
              id="description"
              className="mt-1 p-2 w-full border text-black rounded-lg focus:ring-blue-500 focus:border-blue-500"
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <button
            type="submit"
            className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out"
          >
            {formTitle}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProjectForm;
