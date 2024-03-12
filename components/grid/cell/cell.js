import {data} from "../../../data/data.js";
import {Offer} from "./offer/offer.js";
import {CatchOffer} from "./offer/catchOffer.js";
import {MissOffer} from "./offer/missOffer.js";

export function Cell(x, y) {
    const cellElement = document.createElement("td")
    if (x === data.coords.x && y === data.coords.y) {
        cellElement.append(Offer())
    }
    if (x === data.catchCoords?.x && y === data.catchCoords?.y) {
        cellElement.append(CatchOffer())
    }
    if (x === data.missCoords?.x && y === data.missCoords?.y) {
        cellElement.append(MissOffer())
    }
    return cellElement
}

