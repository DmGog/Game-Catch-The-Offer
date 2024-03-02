import {data} from "../../data/data.js";
import {Cell} from "./cell/cell.js";
// алгоритм отрисовки данных
export function Grid() {
    const container = document.createElement("table");

    for (let y = 0; y < data.settings.gridSize.rowsCount; y++) {
        const rowElement = document.createElement("tr")

        for (let x = 0; x < data.settings.gridSize.columnCount; x++) {
            const cellElement = Cell(x, y)
            rowElement.append(cellElement)
        }
        container.append(rowElement)
    }
    return container
}

