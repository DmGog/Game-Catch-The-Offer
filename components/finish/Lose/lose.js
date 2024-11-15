import { data } from "../../../data/data.js";
import { RestartButton } from "../restar.js";

function formatTime(ms) {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}m ${seconds}s`;
}

function createGameInfoElement(title, score) {
    const gameInfoElement = document.createElement("div");
    gameInfoElement.classList.add("game-info");

    const titleElement = document.createElement("div");
    titleElement.classList.add("game-info__title");
    titleElement.textContent = title;

    const scoreElement = document.createElement("div");
    scoreElement.classList.add("game-info__score");
    scoreElement.textContent = score;

    gameInfoElement.append(titleElement, scoreElement);
    return gameInfoElement;
}

export function Lose() {
    const containerCardElement = document.createElement("div");
    containerCardElement.classList.add("container-card");

    const endGameCardElement = document.createElement("div");
    endGameCardElement.classList.add("end-game-card");
    endGameCardElement.style.backgroundImage = "url('./assets/images/end-game-card.svg')";

    const winImgElement = document.createElement("img");
    winImgElement.classList.add("lose-img");
    winImgElement.src = "./assets/images/lose.png";

    const containerElement = document.createElement("div");
    containerElement.classList.add("container");

    const endGameCardTitleElement = document.createElement("h2");
    endGameCardTitleElement.classList.add("end-game-card__title");
    endGameCardTitleElement.textContent = "You Lose!";

    const endGameCardSubtitleElement = document.createElement("h3");
    endGameCardSubtitleElement.classList.add("end-game-card__subtitle");
    endGameCardSubtitleElement.textContent = "You'll be lucky next time";

    const endGameCardInfoElement = document.createElement("div");
    endGameCardInfoElement.classList.add("end-game-card__info");

    // Создание элементов информации об игре
    const catchElement = createGameInfoElement("Catch:", data.scores.catchesCount);
    const missElement = createGameInfoElement("Miss:", data.scores.missesCount);
    const timeElement = createGameInfoElement("Time:", formatTime(data.elapsedTime));

    endGameCardInfoElement.append(catchElement, missElement, timeElement);

    // Кнопка перезапуска
    const playAgainElement = RestartButton();
    playAgainElement.classList.add("restart-button");

    containerElement.append(endGameCardTitleElement, endGameCardSubtitleElement, endGameCardInfoElement, playAgainElement);
    endGameCardElement.append(winImgElement, containerElement);
    containerCardElement.append(endGameCardElement);

    return containerCardElement;
}
