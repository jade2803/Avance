// DescripcionCambio.jsx
import { h, Component } from 'preact';
import { useState } from 'preact/hooks';
import { setValues } from './content.js';

const DescripcionCambio = () => {
  const [descripcionCambio, setDescripcionCambio] = useState('');
  const [justificacionPropuesta, setJustificacionPropuesta] = useState('');
  const [riesgos, setRiesgos] = useState('');

  const handleInputChange = (id, value) => {
    switch (id) {
      case 'descripcionCambio':
        setDescripcionCambio(value);
        break;
      case 'justificacionPropuesta':
        setJustificacionPropuesta(value);
        break;
      case 'riesgos':
        setRiesgos(value);
        break;
      default:
        break;
    }

    // Actualizar valores en el archivo content.js
    setValues({
      descripcionCambio,
      justificacionPropuesta,
      riesgos,
    });
  };

  return (
    <div>
      <h1 class="mb-4 text-gray-700 tracking-tight font-extrabold">Descripción del Cambio</h1>

      <div class="sm:col-span-4 justify-center">
        <textarea
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-400 dark:text-gray-800"
          id="descripcionCambio"
          name="descripcionCambio"
          onInput={(e) => handleInputChange('descripcionCambio', e.target.value)}
        ></textarea>
      </div>

      <br />

      <h1 class="mb-4 text-gray-700 tracking-tight font-extrabold">Justificación de la Propuesta</h1>
      <div class="sm:col-span-4 justify-center">
        <textarea
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-400 dark:text-gray-800"
          id="justificacionPropuesta"
          name="justificacionPropuesta"
          onInput={(e) => handleInputChange('justificacionPropuesta', e.target.value)}
        ></textarea>
      </div>

      <br />

      <h1 class="mb-4 text-gray-700 tracking-tight font-extrabold">Riesgos</h1>
      <div class="sm:col-span-4 justify-center">
        <textarea
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-400 dark:text-gray-800"
          id="riesgos"
          name="riesgos"
          onInput={(e) => handleInputChange('riesgos', e.target.value)}
        ></textarea>
      </div>

      <br />
    </div>
  );
};

export default DescripcionCambio;
