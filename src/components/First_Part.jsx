// First_Part.jsx
import { h, Component } from 'preact';
import { solicitudCambio, codigoSolicitud, version, fecha } from '../components/content.js';

export default class First_Part extends Component {
  handleInputChange = (e) => {
    const { id, value } = e.target;
    
    // Actualiza las variables en content.js
    switch (id) {
      case 'solicitudCambio':
        solicitudCambio = value;
        break;
      case 'codigoSolicitud':
        codigoSolicitud = value;
        break;
      case 'version':
        version = value;
        break;
      case 'fecha':
        fecha = value;
        break;
      default:
        break;
    }
  };

  render() {
    return (
      <div class="mb-6">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label class="block text-gray-800 text-sm font-bold mb-2" for="nya">
              Solicitud de Cambio
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-400 dark:text-gray-800"
              id="solicitudCambio"
              name="solicitudCambio"
              type="text"
              onInput={this.handleInputChange}
            />
          </div>
          <div>
            <label class="block text-gray-800 text-sm font-bold mb-2" for="codigoSolicitud">
              Código de Solicitud
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-400 dark:text-gray-800"
              id="codigoSolicitud"
              name="codigoSolicitud"
              type="text"
              onInput={this.handleInputChange}
            />
          </div>
          <div>
            <label class="block text-gray-800 text-sm font-bold mb-2" for="version">
              Versión
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-400 dark:text-gray-800"
              id="version"
              name="version"
              type="text"
              onInput={this.handleInputChange}
            />
          </div>
          <div>
            <label class="block text-gray-800 text-sm font-bold mb-2" for="fecha">
              Fecha
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-400 dark:text-gray-800"
              id="fecha"
              name="fecha"
              placeholder="29/10/2023"
              type="text"
              onInput={this.handleInputChange}
            />
          </div>
        </div>
      </div>
    );
  }
}
