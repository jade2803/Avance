// AprobacionSolicitud.jsx
import { h, Component } from 'preact';
import { useState } from 'preact/hooks';
import { setValues } from './content.js';

const AprobacionSolicitud = () => {
  const [aprobacion, setAprobacion] = useState('');
  const [fechaAprobacion, setFechaAprobacion] = useState('');
  const [cargo, setCargo] = useState('');
  const [nombre, setNombre] = useState('');
  const [firma, setFirma] = useState('');

  const handleInputChange = (id, value) => {
    switch (id) {
      case 'aprobacion':
        setAprobacion(value);
        break;
      case 'fechaAprobacion':
        setFechaAprobacion(value);
        break;
      case 'cargo':
        setCargo(value);
        break;
      case 'nombre':
        setNombre(value);
        break;
      case 'firma':
        setFirma(value);
        break;
      default:
        break;
    }

    // Actualizar valores en el archivo content.js
    setValues({
      aprobacion,
      fechaAprobacion,
      cargo,
      nombre,
      firma,
    });
  };

  return (
    <div>
      <div class="flex mb-4 items-center">
        <h1 class="mb-4 text-gray-700 tracking-tight font-extrabold">Aprobación de la Solicitud</h1>

        <label class="block text-gray-700 text-sm mr-8" for="si"></label>
        <input
          type="radio"
          id="si"
          name="aprobacion"
          class="form-radio h-5 w-5 ring-white"
          onChange={() => handleInputChange('aprobacion', 'SI')}
        />
        <span class="ml-2 text-gray-700 mr-6">SI</span>

        <label class="block text-white text-sm mr-8" for="no"></label>
        <input
          type="radio"
          id="no"
          name="aprobacion"
          class="form-radio h-5 w-5"
          onChange={() => handleInputChange('aprobacion', 'NO')}
        />
        <span class="ml-2 text-gray-700">NO</span>
      </div>

      <div class="sm:col-span-4 justify-center">
        <label class="block text-gray-700 text-sm font-bold mr-8" for="fecha">
          Fecha de Aprobación
        </label>
        <input
          type="date"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-400 dark:text-gray-800"
          id="fechaAprobacion"
          name="fechaAprobacion"
          onChange={(e) => handleInputChange('fechaAprobacion', e.target.value)}
        />
      </div>

      <br />

      <div class="sm:col-span-4 justify-center">
        <table class="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th class="py-2 px-4 border-b text-gray-700">Cargo</th>
              <th class="py-2 px-4 border-b text-gray-700">Nombre</th>
              <th class="py-2 px-4 border-b text-gray-700">Firma</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="py-2 px-4 border-b">
                <input
                  type="text"
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-400 dark:text-gray-800"
                  id="cargo"
                  name="cargo"
                  onChange={(e) => handleInputChange('cargo', e.target.value)}
                />
              </td>
              <td class="py-2 px-4 border-b">
                <input
                  type="text"
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-400 dark:text-gray-800"
                  id="nombre"
                  name="nombre"
                  onChange={(e) => handleInputChange('nombre', e.target.value)}
                />
              </td>
              <td class="py-2 px-4 border-b">
                <input
                  type="text"
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-400 dark:text-gray-800"
                  id="firma"
                  name="firma"
                  onChange={(e) => handleInputChange('firma', e.target.value)}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AprobacionSolicitud;
