import {data} from "../../../data/data.js";
import {Offer} from "./offer/offer.js";

export function Cell(x, y) {
    const cellElement = document.createElement("td")
    if (x === data.coords.x && y === data.coords.y) {
        cellElement.append(Offer())

    }
    return cellElement
}

