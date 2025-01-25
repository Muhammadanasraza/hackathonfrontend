// import { useState, useEffect } from 'react';

// const TaskeList = () => {
//   const [tasks, setTasks] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [refresh, setRefresh] = useState(false);

//   useEffect(() => {
//     const fetchTasks = async () => {
//       setLoading(true); // Set loading to true before fetching
//       try {
//         const response = await fetch("http://localhost:4000/api/v1/tasks/available");
//         const data = await response.json(); // Parse response as JSON
//         setTasks(data); // Update tasks state with fetched data
//       } catch (error) {
//         console.error("Error fetching tasks:", error);
//       } finally {
//         setLoading(false); // Set loading to false once fetching is done
//       }
//     };

//     fetchTasks();
//   }, [refresh]); // Dependency array to refetch when 'refresh' changes

//   return (
//     <div>
//       {loading ? <p>Loading...</p> : <ul>{tasks.map(task => <li key={task.id}>{task.title}</li>)}</ul>}
//     </div>
//   );
// };

// export default TaskeList;