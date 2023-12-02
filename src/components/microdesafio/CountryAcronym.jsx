import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CountryAcronym = () => {
  // Estado para almacenar la info
  const [data, setData] = useState([]);
  // Nombre del país del que vamos a buscar el acrónimo.
  const countryName = "Argentina";

  useEffect(() => {
    // Función asincrónica con la que vamos a realizar la solicitud a la API.
    const fetchData = async () => {
      // URL de la API con la que vamos a obtener todos los países.
      const allCountriesURL = 'https://restcountries.com/v3.1/all';

      // Realizamos la solicitud GET utilizando Axios.
      axios.get(allCountriesURL)
        .then(response => {
          // Verificamos si no hay datos o si el array de datos está vacío.
          if (!response.data || response.data.length === 0) {
            console.error('No se encontraron datos para los países');
            return;
          }

          // Encuentra el acrónimo del país que definímos en la línea 8 en la respuesta
          const countryData = response.data.find(country => country.name.common === countryName);
          const countryAcr = countryData?.cca2 || `No se encontró acrónimo de ${countryName}`;

          // Almacenamos los datos en el estado.
          setData(countryAcr);
        })
        .catch(error => {
          console.error('Error en la solicitud:', error);
        });
    };

    // Llama a la función fetchData al montar el componente.
    fetchData();
  }, []);

  return (
    <div>
      <h1>Acrónimo de {countryName}: {data}</h1>
    </div>
  );
};

export default CountryAcronym;
