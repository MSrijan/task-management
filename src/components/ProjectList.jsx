import React from 'react';
import ProjectView from './ProjectView';

const ProjectList = ({ projects, onEdit, onDelete }) => {
  return (
    <div className="flex flex-wrap gap-4 mt-6 w-[96%] sm:w-1/2">
      {projects.map(project => (
        <ProjectView
          key={project.id}
          project={project}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default ProjectList;
