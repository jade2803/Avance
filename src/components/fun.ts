// fun.ts
export function addRow() {
    const tableBody = document.getElementById('activitiesTableBody');
    const newRow = document.createElement('tr');
  
    const columns: string[] = ['text', 'text', 'date', 'date'];
  
    columns.forEach((type) => {
      const cell = document.createElement('td');
      const input = document.createElement('input');
      input.type = type;
      input.className = 'w-full border rounded px-3 py-2';
      cell.appendChild(input);
      newRow.appendChild(cell);
    });
  
    if (tableBody != null) {
      tableBody.appendChild(newRow);
    }
  }
  