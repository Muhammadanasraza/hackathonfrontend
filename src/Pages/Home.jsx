import React, { useState, useEffect } from 'react';

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [newTaskDescription, setNewTaskDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);

  // Fetch tasks when component mounts or refresh state changes
  useEffect(() => {
    const fetchTasks = async () => {
      setLoading(true);
      try {
        const response = await fetch("http://localhost:4000/api/v1/tasks/available");
        const data = await response.json();
        setTasks(data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, [refresh]);

  // Handle task addition
  const handleAddTask = async (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      const newTaskObj = {
        title: newTask,
        description: newTaskDescription, // Added description from the form
        status: 'pending' // Default status is 'pending'
      };
      try {
        const response = await fetch("http://localhost:4000/api/v1/tasks/", {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newTaskObj)
        });
        const addedTask = await response.json();
        setTasks((prevTasks) => [...prevTasks, addedTask]);
        setNewTask('');
        setNewTaskDescription('');
        setRefresh(!refresh);  // Trigger re-fetch of tasks
      } catch (error) {
        console.error("Error adding task:", error);
      }
    }
  };

  // Toggle task status between 'pending', 'in-progress', and 'completed'
  const handleToggleStatus = async (taskId, currentStatus) => {
    const updatedStatus = currentStatus === 'pending'
      ? 'in-progress'
      : currentStatus === 'in-progress'
      ? 'completed'
      : 'pending';
    try {
      const response = await fetch(`http://localhost:4000/api/v1/tasks/${taskId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: updatedStatus }),
      });
      const updatedTask = await response.json();
      setTasks((prevTasks) => prevTasks.map(task => task.id === taskId ? updatedTask : task));
    } catch (error) {
      console.error("Error updating task status:", error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">Task Manager</h1>

      {loading ? (
        <p className="text-center text-gray-500">Loading tasks...</p>
      ) : (
        <div>
          <ul className="space-y-4">
            {tasks.map((task,key) => (
              <li key={key} className={`flex justify-between items-center p-4 rounded-lg shadow-md 
                ${task.status === 'pending' ? 'bg-yellow-100' : task.status === 'in-progress' ? 'bg-blue-100' : 'bg-green-100'}`}>
                <span className="text-gray-700">{task.title}</span>
                <button 
                  onClick={() => handleToggleStatus(task.id, task.status)}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                  Mark as {task.status === 'pending' ? 'In Progress' : task.status === 'in-progress' ? 'Completed' : 'Pending'}
                </button>
              </li>
            ))}
          </ul>

          <form onSubmit={handleAddTask} className="mt-6 flex flex-col space-y-2">
            <input
              type="text"
              placeholder="Add new task title"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Add description (optional)"
              value={newTaskDescription}
              onChange={(e) => setNewTaskDescription(e.target.value)}
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button type="submit" className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600">
              Add Task
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Home;
