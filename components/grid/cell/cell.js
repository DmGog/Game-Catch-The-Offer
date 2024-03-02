import {data} from "../../../data/data.js";

export function Cell(x, y) {
    const cellElement = document.createElement("td")
    if (x === data.coords.x && y === data.coords.y) {
        cellElement.append(Offer())
    }
    return cellElement
}

export function Offer() {
    const element = document.createElement("img")
    element.src = "./assets/images/offer.png"
    return element
}