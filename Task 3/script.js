class Table {
	constructor(element) {
		 this.element = element;
		 this.rows = [];
		 this.columns = [];
	}
	addRow(rowData) {
		 this.rows.push(rowData);
		 this.updateTable();
	}
	addColumn(columnData) {
		 this.columns.push(columnData);
		 this.updateTable();
	}

	updateTable() {
		 this.element.innerHTML = ""; 

		 let table = document.createElement("table");

		 if (this.columns.length > 0) {
			  let headerRow = document.createElement("tr");
			  for (let j = 0; j < this.columns.length; j++) {
					let headerCell = document.createElement("th");
					headerCell.textContent = this.columns[j];
					headerRow.appendChild(headerCell);
			  }
			  table.appendChild(headerRow);
		 }
		 for (let i = 0; i < this.rows.length; i++) {
			  let row = document.createElement("tr");
			  for (let j = 0; j < this.rows[i].length; j++) {
					let cell = document.createElement("td");
					cell.textContent = this.rows[i][j];
					row.appendChild(cell);
			  }
			  table.appendChild(row);
		 }

		 this.element.appendChild(table);
	}
}
const table = new Table(document.querySelector("#table-container"));

table.addRow(["Дані 1", "Дані 2", "Дані 3"]);
table.addRow(["Дані 4", "Дані 5", "Дані 6"]);
table.addColumn("Стовпець 1");
table.addColumn("Стовпець 2");
table.addColumn("Стовпець 3");
