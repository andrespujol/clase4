import React, { useState } from 'react';

const Filter = ({ children }) => {
  // Estado local para almacenar el estado del filtro. Ponemos all para representar que todas las tareas tienen
  // que ser mostradas
  const [filterState, setFilterState] = useState('all');

  // Función que maneja cambios en el filtro
  const handleChange = (event) => {
    // target se refiere al elemento que desencadenó el evento (en este caso, el elemento <select>). value es la propiedad que contiene el valor actualmente seleccionado
    setFilterState(event.target.value);
  };

  return (
    <div>
      <label htmlFor="filter">Filtrar por estado: </label>
      <select id="filter" value={filterState} onChange={handleChange}>
        <option value="all">Todos</option>
        <option value="completed">Completados</option>
        <option value="uncompleted">Sin completar</option>
      </select>

      {/* Renderizar los hijos (children) pasando el estado del filtro */}
      {children(filterState)}
    </div>
  );
};

export default Filter;
