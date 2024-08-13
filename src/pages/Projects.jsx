import React, { useState, useReducer, useCallback, useEffect } from 'react';
import ModalForm from '../components/ModalForm';
import ProjectForm from '../components/ProjectForm';
import ProjectList from '../components/ProjectList';

const ACTIONS = {
  ADD_PROJECT: 'add-project',
  EDIT_PROJECT: 'edit-project',
  DELETE_PROJECT: 'delete-project',
};

function reducer(projects, action) {
  switch (action.type) {
    case ACTIONS.ADD_PROJECT:
      const updatedProjectsAdd = [...projects, action.payload];
      localStorage.setItem('projects', JSON.stringify(updatedProjectsAdd));
      return updatedProjectsAdd;
    case ACTIONS.EDIT_PROJECT:
      const updatedProjectsEdit = projects.map(project =>
        project.id === action.payload.id ? action.payload : project
      );
      localStorage.setItem('projects', JSON.stringify(updatedProjectsEdit));
      return updatedProjectsEdit;
    case ACTIONS.DELETE_PROJECT:
      const updatedProjectsDelete = projects.filter(project => project.id !== action.payload.id);
      localStorage.setItem('projects', JSON.stringify(updatedProjectsDelete));
      return updatedProjectsDelete;
    default:
      return projects;
  }
}

const Projects = () => {
  const [show, setShow] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);
  const [projects, dispatch] = useReducer(reducer, [], () => {
    const storedProjects = localStorage.getItem('projects');
    return storedProjects ? JSON.parse(storedProjects) : [];
  });

  const showModal = () => setShow(true);
  const hideModal = () => {
    setCurrentProject(null);
    setShow(false);
  };

  const handleFormSubmit = (e, name, description) => {
    e.preventDefault();
    const newProject = {
      id: currentProject?.id || Date.now(),
      name,
      description,
    };
    dispatch({
      type: currentProject ? ACTIONS.EDIT_PROJECT : ACTIONS.ADD_PROJECT,
      payload: newProject
    });
    hideModal();
  };

  const handleEdit = useCallback((project) => {
    setCurrentProject(project);
    showModal();
  }, []);

  const handleDelete = useCallback((project) => {
    dispatch({ type: ACTIONS.DELETE_PROJECT, payload: project });
  }, []);

  return (
    <>
      <p className="text-3xl font-semibold text-center mb-6">Projects</p>
      <div className="flex flex-col items-center">
        <button
          className="bg-blue-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out"
          onClick={showModal}
        >
          {currentProject ? 'Edit Project' : 'Create Project'}
        </button>
        <ModalForm show={show} handleClose={hideModal}>
          <ProjectForm
            handleSubmit={handleFormSubmit}
            formTitle={currentProject ? "Edit Project" : "Add Project"}
            formName="Project Name"
            hideModal={hideModal}
            project={currentProject}
          />
        </ModalForm>
        <ProjectList
          projects={projects}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </>
  );
};

export default Projects;
