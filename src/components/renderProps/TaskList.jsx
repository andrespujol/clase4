import React from 'react';

// Componente TaskList que renderiza la lista de tareas
const TaskList = ({ tasks }) => {
  return (
    <div>
      <h2>Lista de tareas:</h2>
      <ul>
        {/* Mapear y renderizar cada tarea en la lista */}
        {tasks.map((task) => (
          <li
            key={task.id}
            // si la tarea está completa, con line-through la tachamos. Sino, no va a tener estilos
            style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
          >
            {task.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
