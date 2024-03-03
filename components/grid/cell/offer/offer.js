import {catchOffer} from "../../../../data/data.js";

export function Offer() {
    const element = document.createElement("img")
    element.src = "./assets/images/offer.png"

    function clickHandler() {
        catchOffer()
    }


    element.addEventListener("click", clickHandler)
    return element
}