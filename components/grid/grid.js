import {data} from "../../data/data.js";
import {Cell} from "./cell/cell.js";

export function Grid() {
    const containerTable = document.createElement("div")
    containerTable.className = "table-container"
    const container = document.createElement("table");


    for (let y = 0; y < data.settings.gridSize.rowsCount; y++) {
        const rowElement = document.createElement("tr")

        for (let x = 0; x < data.settings.gridSize.columnCount; x++) {
            const cellElement = Cell(x, y)
            rowElement.append(cellElement)
        }
        container.append(rowElement)
        containerTable.appendChild(container)
    }
    return containerTable
}

