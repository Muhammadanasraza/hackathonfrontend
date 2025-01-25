// import React, { useState } from 'react';

// const TaskForm = ({ refreshTasks }) => {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await fetch('http://localhost:4000/api/v1/tasks/', { title, description });
//       setTitle('');
//       setDescription('');
//       refreshTasks();
//     } catch (err) {
//       console.error(err.message);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="Title"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         required
//       />
//       <textarea
//         placeholder="Description"
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//       />
//       <button type="submit">Add Task</button>
//     </form>
//   );
// };

// export default TaskForm;
