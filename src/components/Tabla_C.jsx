import { h, Component } from 'preact';

class Tabla extends Component {
  constructor() {
    super();
    this.state = {
      filas: [],
      total: 0,
    };
  }

  agregarFila = (event) => {
    event.preventDefault();
    const nuevaFila = {
      id: this.state.filas.length + 1,
      descripcion: '',
      tipoCosto: '',
      importe: '',
    };
    this.setState({ filas: [...this.state.filas, nuevaFila] });
  };

  actualizarValor = (e, id, campo) => {
    const nuevasFilas = this.state.filas.map((fila) => {
      if (fila.id === id) {
        return { ...fila, [campo]: e.target.value };
      }
      return fila;
    });

    this.setState({ filas: nuevasFilas }, () => this.calcularTotal());
  };

  calcularTotal = () => {
    const total = this.state.filas.reduce((acc, fila) => acc + parseFloat(fila.importe || 0), 0);
    this.setState({ total });
  };

  render() {
    return (
      <div class="overflow-x-auto">
        <h1 class="mb-4 text-gray-700 tracking-tight font-extrabold">Costos</h1>
        <table class="min-w-full bg-gray-400 border border-gray-400">
          <thead>
            <tr>
              <th class="py-2 px-4 border-b">Descripción</th>
              <th class="py-2 px-4 border-b">Tipo de Costo</th>
              <th class="py-2 px-4 border-b">Importe</th>
            </tr>
          </thead>
          <tbody>
            {this.state.filas.map((fila) => (
              <tr key={fila.id}>
                <td class="py-2 px-4 border-b">
                  <input
                    type="text"
                    class="w-full border rounded px-3 py-2"
                    value={fila.descripcion}
                    onInput={(e) => this.actualizarValor(e, fila.id, 'descripcion')}
                  />
                </td>
                <td class="py-2 px-4 border-b">
                  <input
                    type="text"
                    class="w-full border rounded px-3 py-2"
                    value={fila.tipoCosto}
                    onInput={(e) => this.actualizarValor(e, fila.id, 'tipoCosto')}
                  />
                </td>
                <td class="py-2 px-4 border-b">
                  <input
                    type="text"
                    class="w-full border rounded px-3 py-2"
                    value={fila.importe}
                    onInput={(e) => this.actualizarValor(e, fila.id, 'importe')}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button class="mt-4 bg-gray-600 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded" onClick={this.agregarFila}>
          Añadir Costo
        </button>
        <div class="sm:col-span-4 flex justify-end items-center mt-4">
          <div class="mr-2">
            <label class="block text-gray-800 text-sm font-bold mb-2" for="codigoProyecto">Total</label>
          </div>
          <input
            class="shadow appearance-none border rounded py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-400 dark:text-gray-800"
            id="codigoProyecto"
            name="codigoProyecto"
            type="text"
            value={this.state.total.toFixed(2)} // Ajusta el formato según tus necesidades
            readOnly
          />
        </div>
      </div>
    );
  }
}

export default Tabla;


