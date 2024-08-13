import React, { useState, useReducer, useCallback, useEffect } from 'react';
import ModalForm from '../components/ModalForm';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

const ACTIONS = {
  ADD_TASK: 'add-task',
  EDIT_TASK: 'edit-task',
  DELETE_TASK: 'delete-task',
};

function reducer(tasks, action) {
  switch (action.type) {
    case ACTIONS.ADD_TASK:
      const updatedTasksAdd = [...tasks, action.payload];
      localStorage.setItem('tasks', JSON.stringify(updatedTasksAdd));
      return updatedTasksAdd;
    case ACTIONS.EDIT_TASK:
      const updatedTasksEdit = tasks.map(task =>
        task.id === action.payload.id ? action.payload : task
      );
      localStorage.setItem('tasks', JSON.stringify(updatedTasksEdit));
      return updatedTasksEdit;
    case ACTIONS.DELETE_TASK:
      const updatedTasksDelete = tasks.filter(task => task.id !== action.payload.id);
      localStorage.setItem('tasks', JSON.stringify(updatedTasksDelete));
      return updatedTasksDelete;
    default:
      return tasks;
  }
}

const TaskPage = () => {
  const [show, setShow] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);
  const [tasks, dispatch] = useReducer(reducer, [], () => {
    const storedTasks = localStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  const showModal = () => setShow(true);
  const hideModal = () => {
    setCurrentTask(null);
    setShow(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: currentTask?.id || Date.now(),
      name: e.target.name.value,
      description: e.target.description.value,
      dueDate: e.target.dueDate.value,
      priority: e.target.priority.value,
      status: e.target.status.value,
    };
    dispatch({ type: currentTask ? ACTIONS.EDIT_TASK : ACTIONS.ADD_TASK, payload: newTask });
    hideModal();
  };

  const handleEdit = useCallback((task) => {
    setCurrentTask(task);
    showModal();
  }, []);

  const handleDelete = useCallback((task) => {
    dispatch({ type: ACTIONS.DELETE_TASK, payload: task });
  }, []);

  return (
    <>
      <p className="text-3xl font-semibold text-center mb-6">Your Tasks</p>
      <div className="flex flex-col items-center">
        <button
          className="bg-blue-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out"
          onClick={showModal}
        >
          {currentTask ? 'Edit Task' : 'Add Task'}
        </button>
        <ModalForm show={show} handleClose={hideModal}>
          <TaskForm
            handleSubmit={handleFormSubmit}
            formTitle={currentTask ? "Edit Task" : "Add Task"}
            formName="Task Name"
            hideModal={hideModal}
            task={currentTask}
          />
        </ModalForm>
        <TaskList 
          tasks = {tasks}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </>
  );
};

export default TaskPage;
