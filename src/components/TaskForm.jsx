import React, { useState } from 'react';
import { RxCross2 } from "react-icons/rx";

const TaskForm = ({ handleSubmit, formTitle, formName, hideModal }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [priority, setPriority] = useState('Low');
    const [status, setStatus] = useState('To Do');

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
            <form onSubmit={handleSubmit}>
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
                            onChange={e => setName(e.target.value)}
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
                            onChange={e => setDescription(e.target.value)}
                        ></textarea>
                    </div>
                    <div>
                        <label htmlFor="dueDate" className="block text-lg font-medium text-gray-700">
                            Due Date
                        </label>
                        <input
                            type="date"
                            id="dueDate"
                            className="mt-1 p-2 w-full border text-black rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            required
                            onChange={e => setDueDate(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="priority" className="block text-lg font-medium text-gray-700">
                            Priority
                        </label>
                        <select
                            id="priority"
                            className="mt-1 p-2 w-full border text-black rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            value={priority}
                            onChange={e => setPriority(e.target.value)}
                        >
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="status" className="block text-lg font-medium text-gray-700">
                            Status
                        </label>
                        <select
                            id="status"
                            className="mt-1 p-2 w-full border text-black rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            value={status}
                            onChange={e => setStatus(e.target.value)}
                        >
                            <option value="To Do">To Do</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Completed">Completed</option>
                        </select>
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

export default TaskForm;
