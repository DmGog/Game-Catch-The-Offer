import {data} from "../../data/data.js";

export function Scores() {
    const container = document.createElement("div");
    container.className = "scores"
    const catchElement = document.createElement("div")
    catchElement.className="catch"
    catchElement.textContent = `Catch: ${data.scores.catchesCount}`
    const missElement = document.createElement("div")
    missElement.className="miss"
    missElement.textContent = `Miss: ${data.scores.missesCount}`
    container.append(catchElement, missElement);
    return container
}