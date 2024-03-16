import {Scores} from "./scores/scores.js";
import {Grid} from "./grid/grid.js";
import {Settings} from "./settings/Settings.js";
import {data} from "../data/data.js";


export function Game() {

    const container = document.createElement("div");
    const settingsElement = Settings();
    const scoresElement = Scores();
    const gridElement = Grid();

    container.append(settingsElement, scoresElement, gridElement);

    // Загружаем сохраненные значения настроек при инициализации игры

    // Win
    const savedPointsToWin = localStorage.getItem("pointsToWin");
    data.settings.pointsToWin = savedPointsToWin ? parseInt(savedPointsToWin) : 20;

    //lose
    const savedMaximumMisses = localStorage.getItem("maximumMisses");
    data.settings.maximumMissesCount = savedMaximumMisses ? parseInt(savedMaximumMisses) : 3;

    //intervalTime
    const savedGameSpeed = localStorage.getItem("gameSpeed");
    data.settings.intervalTime = savedGameSpeed ? parseInt(savedGameSpeed) : 2000;

    // GridSize
    const savedGridSize = localStorage.getItem("gridSize");
    if (savedGridSize) {
        const selectElement = container.querySelector("#selectGrid");
        selectElement.value = savedGridSize;
    }

    return container

}
