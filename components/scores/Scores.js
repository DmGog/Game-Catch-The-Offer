import {data} from "../../data/data.js";

export function Scores() {
    const container = document.createElement("div");
    container.className = "scores"
    container.append(`Catch: ${data.scores.catchesCount}  Miss: ${data.scores.missesCount}`);
    return container
}