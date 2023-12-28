import React, { useState, useEffect } from 'react';
import styles from './ListaQuehaceres.module.css';

const ListaQuehaceres = () => {
  // Estado para almacenar la lista de tareas
  const [tasks, setTasks] = useState([]);

  // Estado para almacenar la nueva tarea 
  const [newTask, setNewTask] = useState('');

  //cargar la lista de tareas desde el almacenamiento local al cargar la página
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  // Efecto para guardar la lista de tareas en el almacenamiento local cada vez que cambie
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);



  const handleNewTaskChange = (event) => {
    setNewTask(event.target.value);
  };

  //para manejar el envío del formulario para agregar una nueva tarea
  const handleAddTask = (event) => {
    event.preventDefault();
    if (newTask.trim() !== '') {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };


  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  //para manejar el cambio en la propiedad completada de una tarea
  const handleToggleComplete = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className={styles.general}>
      <h1>Lista de Quehaceres</h1>
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          placeholder="Nueva tarea"
          value={newTask}
          onChange={handleNewTaskChange}
        />
        <button type="submit">Agregar tarea</button>
      </form>
      <div>
        {tasks.map((task, index) => (
          <div key={index} style={{ marginBottom: '8px' }}>
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.text}
            </span>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggleComplete(index)}
            />
            <button className={styles.eliminar} onClick={() => handleDeleteTask(index)}>Eliminar</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListaQuehaceres;
