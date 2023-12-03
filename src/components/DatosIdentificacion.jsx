// DatosIdentificacion.jsx
import { h, Component } from 'preact';
import { useState } from 'preact/hooks';
import { setValues } from '../components/content';

const DatosIdentificacion = () => {
  const [nombreProyecto, setNombreProyecto] = useState('');
  const [codigoProyecto, setCodigoProyecto] = useState('');
  const [nombreDirector, setNombreDirector] = useState('');

  const handleInputChange = (id, value) => {
    switch (id) {
      case 'nombreProyecto':
        setNombreProyecto(value);
        break;
      case 'codigoProyecto':
        setCodigoProyecto(value);
        break;
      case 'nombreDirector':
        setNombreDirector(value);
        break;
      default:
        break;
    }

    // Actualizar valores en el archivo content.js
    setValues({
      nombreProyecto,
      codigoProyecto,
      nombreDirector,
    });
  };

  return (
    <div>
      <h1 class="mb-4 text-gray-700 tracking-tight font-extrabold">Datos de Identificación</h1>

      <div class="sm:col-span-4 justify-center">
        <label class="block text-gray-800 text-sm font-bold mb-2" for="nombreProyecto">
          Nombre del Proyecto
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-400 dark:text-gray-800"
          id="nombreProyecto"
          name="nombreProyecto"
          type="text"
          onInput={(e) => handleInputChange('nombreProyecto', e.target.value)}
        />
      </div>

      <br />

      <div class="sm:col-span-4 justify-center">
        <label class="block text-gray-800 text-sm font-bold mb-2" for="codigoProyecto">
          Código del Proyecto
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-400 dark:text-gray-800"
          id="codigoProyecto"
          name="codigoProyecto"
          type="text"
          onInput={(e) => handleInputChange('codigoProyecto', e.target.value)}
        />
      </div>

      <br />

      <div class="sm:col-span-4 justify-center">
        <label class="block text-gray-800 text-sm font-bold mb-2" for="nombreDirector">
          Nombre del Director del Proyecto
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-400 dark:text-gray-800"
          id="nombreDirector"
          name="nombreDirector"
          type="text"
          onInput={(e) => handleInputChange('nombreDirector', e.target.value)}
        />
      </div>

      <br />
    </div>
  );
};

export default DatosIdentificacion;
