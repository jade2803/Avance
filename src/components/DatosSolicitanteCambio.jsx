// DatosSolicitanteCambio.jsx
import { h, Component } from 'preact';
import { useState } from 'preact/hooks';
import { setValues } from './content';

const DatosSolicitanteCambio = () => {
  const [nombreSolicitante, setNombreSolicitante] = useState('');
  const [departamento, setDepartamento] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');

  const handleInputChange = (id, value) => {
    switch (id) {
      case 'nombreSolicitante':
        setNombreSolicitante(value);
        break;
      case 'departamento':
        setDepartamento(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'telefono':
        setTelefono(value);
        break;
      default:
        break;
    }

    // Actualizar valores en el archivo content.js
    setValues({
      nombreSolicitante,
      departamento,
      email,
      telefono,
    });
  };

  return (
    <div>
      <h1 class="mb-4 text-gray-700 tracking-tight font-extrabold">Datos del Solicitante del Cambio</h1>

      <div class="sm:col-span-4 justify-center">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="nombreSolicitante">
          Nombre del Solicitante
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-400 dark:text-gray-800"
          id="nombreSolicitante"
          name="nombreSolicitante"
          type="text"
          onInput={(e) => handleInputChange('nombreSolicitante', e.target.value)}
        />
      </div>

      <br />

      <div class="sm:col-span-4 justify-center">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="departamento">
          Departamento
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-400 dark:text-gray-800"
          id="departamento"
          name="departamento"
          type="text"
          onInput={(e) => handleInputChange('departamento', e.target.value)}
        />
      </div>

      <br />

      <div class="sm:col-span-4 justify-center">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
          Email
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-400 dark:text-gray-800"
          id="email"
          name="email"
          type="text"
          onInput={(e) => handleInputChange('email', e.target.value)}
        />
      </div>

      <br />

      <div class="sm:col-span-4 justify-center">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="telefono">
          Teléfono
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-400 dark:text-gray-800"
          id="telefono"
          name="telefono"
          type="text"
          onInput={(e) => handleInputChange('telefono', e.target.value)}
        />
      </div>

      <br />
    </div>
  );
};

export default DatosSolicitanteCambio;
