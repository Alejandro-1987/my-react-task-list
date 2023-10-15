

import { useState } from 'react';

const useTaskManager = () => {
  const [tasks, setTasks] = useState([]);

  const createTask = (task) => {
    const newTask = { id: Date.now(), task };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const updateTask = (taskId, newTaskText) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, task: newTaskText } : task
    );
    setTasks(updatedTasks);
  };

  return { tasks, createTask, deleteTask, updateTask };
};

export default useTaskManager;
