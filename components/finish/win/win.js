import {data} from "../../../data/data.js";
import {RestartButton} from "../restar.js";

function formatTime(ms) {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}m ${seconds}s`;
}

export function Win() {
    const containerCardElement = document.createElement("div")
    containerCardElement.classList.add("container-card")
    const endGameCardElement = document.createElement("div");
    endGameCardElement.classList.add("end-game-card");
    endGameCardElement.style.backgroundImage = "url(\"./assets/images/end-game-card.svg\")";

    const winImgElement = document.createElement("img");
    winImgElement.classList.add("win-img");
    winImgElement.src = "./assets/images/win.png";


    const containerElement = document.createElement("div");
    containerElement.classList.add("container")
    const endGameCardTitleElement = document.createElement("h2");
    endGameCardTitleElement.classList.add("end-game-card__title");
    endGameCardTitleElement.textContent = "You Win!";
    const endGameCardSubtitleElement = document.createElement("h3");
    endGameCardSubtitleElement.classList.add("end-game-card__subtitle");
    endGameCardSubtitleElement.textContent = "Congratulations"


    const endGameCardInfoElement = document.createElement("div")
    endGameCardInfoElement.classList.add("end-game-card__info");

    // очки победы

    const endGameCardInfoCatchElement = document.createElement("div")
    endGameCardInfoCatchElement.classList.add("game-info");
    const catchTitleElement = document.createElement("div")
    catchTitleElement.classList.add("game-info__title");
    catchTitleElement.textContent = "Catch:"
    const catchScoreElement = document.createElement("div")
    catchScoreElement.classList.add("game-info__score");
    catchScoreElement.textContent = data.scores.catchesCount;
    endGameCardInfoCatchElement.append(catchTitleElement, catchScoreElement);

    // очки пропуска

    const endGameCardInfoMissElement = document.createElement("div")
    endGameCardInfoMissElement.classList.add("game-info");
    const missTitleElement = document.createElement("div")
    missTitleElement.classList.add("game-info__title");
    missTitleElement.textContent = "Miss:"
    const missScoreElement = document.createElement("div")
    missScoreElement.classList.add("game-info__score");
    missScoreElement.textContent = data.scores.missesCount;
    endGameCardInfoMissElement.append(missTitleElement, missScoreElement);

    // время игры

    const endGameCardInfoTimeElement = document.createElement("div");
    endGameCardInfoTimeElement.classList.add("game-info");
    const timeTitleElement = document.createElement("div");
    timeTitleElement.classList.add("game-info__title");
    timeTitleElement.textContent = "Time:"
    const timeScoreElement = document.createElement("div")
    timeScoreElement.classList.add("game-info__score");
    timeScoreElement.textContent = formatTime(data.elapsedTime);
    endGameCardInfoTimeElement.append(timeTitleElement, timeScoreElement);

    endGameCardInfoElement.append(endGameCardInfoCatchElement, endGameCardInfoMissElement, endGameCardInfoTimeElement);

    // кнопка restart

    const playAgainElement = RestartButton();
    playAgainElement.classList.add("restart-button")

    containerElement.append(endGameCardTitleElement, endGameCardSubtitleElement, endGameCardInfoElement, playAgainElement);

    endGameCardElement.append(winImgElement, containerElement)
    containerCardElement.append(endGameCardElement)

    return containerCardElement
}