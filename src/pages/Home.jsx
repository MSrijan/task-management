import React, { useState, useEffect } from 'react';
import TaskView from '../components/TaskView';

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  const taskCounts = tasks.reduce((counts, task) => {
    counts[task.status] = (counts[task.status] || 0) + 1;
    return counts;
  }, {});

  const upcomingTasks = tasks
    .filter(task => new Date(task.dueDate) > new Date())
    .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate))

  const missedTasks = tasks
    .filter(task => new Date(task.dueDate) < new Date)
    .sort((a,b) => new Date(a.dueDate)- new Date(b.dueDate)) 

  return (
    <div className="container flex flex-col items-center min-w-full gap-4 p-4">
      <div className="w-full max-w-lg mb-6">
        <input
          type="search"
          placeholder="Search tasks..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded text-black"
        />
      </div>
      <div className="w-full max-w-4xl mb-6 ">
        <h2 className="text-2xl font-semibold mb-4">Task Summary</h2>
        <div className=" sm:flex sm:flex-wrap gap-4">
          <div className="p-4 bg-gray-100 rounded shadow flex-1 sm:w-1/3 text-black">
            <h3 className="text-lg font-medium">To Do</h3>
            <p className="text-xl font-bold">{taskCounts['To Do'] || 0}</p>
          </div>
          <div className="p-4 bg-gray-100 rounded shadow flex-1 sm:w-1/3 text-black">
            <h3 className="text-lg font-medium">In Progress</h3>
            <p className="text-xl font-bold">{taskCounts['In Progress'] || 0}</p>
          </div>
          <div className="p-4 bg-gray-100 rounded shadow flex-1 sm:w-1/3 text-black">
            <h3 className="text-lg font-medium">Completed</h3>
            <p className="text-xl font-bold">{taskCounts['Completed'] || 0}</p>
          </div>
        </div>
      </div>
      <div className="w-full max-w-4xl sm:flex lg:justify-between sm:justify-center sm:flex-wrap sm:items-center">
        <div className="col basis-2/5">
          <h2 className="text-2xl font-semibold mb-4">Upcoming Deadlines</h2>
          <div className="flex flex-col gap-4">
            {upcomingTasks.length > 0 ? (
              upcomingTasks.map(task => (
                <TaskView
                  key={task.id}
                  task={task}
                />
              ))
            ) : (
              <p>No upcoming tasks.</p>
            )}
          </div>
        </div>
        <div className="col basis-2/5">
          <h2 className="text-2xl font-semibold mb-4">Missed Deadlines</h2>
          <div className="flex flex-col gap-4">
            {missedTasks.length > 0 ? (
              missedTasks.map(task => (
                <TaskView
                  key={task.id}
                  task={task}
                />
              ))
            ) : (
              <p>No missed tasks.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
