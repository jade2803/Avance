// components/Tabla.jsx
import { h, Component } from 'preact';

class Tabla extends Component {
  constructor() {
    super();
    this.state = {
      filas: [],
    };
  }

  agregarFila = (event) => {
    event.preventDefault(); // Evitar la recarga de la página
    const nuevaFila = {
      id: this.state.filas.length + 1,
      actividad: '',
      entregable: '',
      fechaInicio: '',
      fechaFin: '',
    };
    this.setState({ filas: [...this.state.filas, nuevaFila] });
  };
  

  render() {
    return (
      <div class="overflow-x-auto">
        <h1 class="mb-4 text-gray-700 tracking-tight font-extrabold">Actividades</h1>
        <table class="min-w-full bg-gray-400 border border-gray-400">
          <thead>
            <tr>
              <th class="py-2 px-4 border-b">Actividad</th>
              <th class="py-2 px-4 border-b">Entregable</th>
              <th class="py-2 px-4 border-b">Fecha de Inicio</th>
              <th class="py-2 px-4 border-b">Fecha de Fin</th>
            </tr>
          </thead>
          <tbody id="activitiesTableBody">
            {this.state.filas.map((fila) => (
              <tr key={fila.id}>
                <td class="py-2 px-4 border-b">
                  <input
                    type="text"
                    class="w-full sm:w-auto border rounded px-3 py-2"
                    value={fila.actividad}
                    onInput={(e) => this.actualizarValor(e, fila.id, 'actividad')}
                    name={`actividad-${fila.id}`}
                  />
                </td>
                <td class="py-2 px-4 border-b">
                  <input
                    type="text"
                    class="w-full sm:w-auto border rounded px-3 py-2"
                    value={fila.entregable}
                    onInput={(e) => this.actualizarValor(e, fila.id, 'entregable')}
                    name={`entregable-${fila.id}`}
                  />
                </td>
                <td class="py-2 px-4 border-b">
                  <input
                    type="date"
                    class="w-full sm:w-auto border rounded px-3 py-2"
                    value={fila.fechaInicio}
                    onInput={(e) => this.actualizarValor(e, fila.id, 'fechaInicio')}
                    name={`fechaInicio-${fila.id}`}
                  />
                </td>
                <td class="py-2 px-4 border-b">
                  <input
                    type="date"
                    class="w-full sm:w-auto border rounded px-3 py-2"
                    value={fila.fechaFin}
                    onInput={(e) => this.actualizarValor(e, fila.id, 'fechaFin')}
                    name={`fechaFin-${fila.id}`}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <button class="mt-4 bg-gray-600 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded" onClick={this.agregarFila}>
          Añadir Actividad
        </button>
      </div>
    );
  }

  actualizarValor = (e, id, campo) => {
    const nuevasFilas = this.state.filas.map((fila) => {
      if (fila.id === id) {
        return { ...fila, [campo]: e.target.value };
      }
      return fila;
    });

    this.setState({ filas: nuevasFilas });
  };
}

export default Tabla;
