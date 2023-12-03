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
      cargo: '',
      nombre: '',
      firma: '',
    };
    this.setState({ filas: [...this.state.filas, nuevaFila] });
  };
  

  render() {
    return (
      <div class="overflow-x-auto">
        <h1 class="mb-4 text-gray-700 tracking-tight font-extrabold">Aprobado por:</h1>
        <table class="min-w-full bg-gray-400 border border-gray-400">
          <thead>
            <tr>
            <th class="py-2 px-4 border-b text-gray-700">Cargo</th>
            <th class="py-2 px-4 border-b text-gray-700">Nombre</th>
            <th class="py-2 px-4 border-b text-gray-700">Firma</th>
            </tr>
          </thead>
          <tbody id="activitiesTableBody">
            {this.state.filas.map((fila) => (
              <tr key={fila.id}>
                <td class="py-2 px-4 border-b">
                  <input
                    type="text"
                    class="w-full sm:w-auto border rounded px-3 py-2"
                    value={fila.cargo}
                    onInput={(e) => this.actualizarValor(e, fila.id, 'cargo')}
                    name={`cargo-${fila.id}`}
                  />
                </td>
                <td class="py-2 px-4 border-b">
                  <input
                    type="text"
                    class="w-full sm:w-auto border rounded px-3 py-2"
                    value={fila.nombre}
                    onInput={(e) => this.actualizarValor(e, fila.id, 'nombre')}
                    name={`nombre-${fila.id}`}
                  />
                </td>
                <td class="py-2 px-4 border-b">
                  <input
                    type="text"
                    class="w-full sm:w-auto border rounded px-3 py-2"
                    value={fila.firma}
                    onInput={(e) => this.actualizarValor(e, fila.id, 'firma')}
                    name={`firma-${fila.id}`}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button class="mt-4 bg-gray-600 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded" onClick={this.agregarFila}>
          Añadir Firma
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