import {loadSettings, saveSettings} from "./localStorage.js";

export const GAME_STATUSES = {
    SETTINGS: "settings",
    IN_PROGRESS: "in-progress",
    FINISH: "Finish",
};

export const data = {
    scores: {
        catchesCount: 0,
        missesCount: 0,
    },
    coords: {
        x: 0,
        y: 0,
    },
    catchCoords: null,
    missCoords: null,
    settings: {
        gridSize: {
            columnCount: 3,
            rowsCount: 3,
        },
        maximumMissesCount: 3,
        pointsToWin: 20,
        intervalTime: 1600,
        selectedIndexGrid: 0,
        selectedIndexInterval: 0,
        selectedIndexWin: 0,
        selectedIndexLose: 0,
    },
    elapsedTime: 0,
    timerIntervalId: null,
    gameStatus: GAME_STATUSES.SETTINGS,
};

const settings = loadSettings();
if (settings) data.settings = settings;

function saveGameSettings() {
    saveSettings(data.settings);
}

export function setIntervalTime(selectedOption, selectedIndex) {
    updateSetting("intervalTime", selectedOption.value, "selectedIndexInterval", selectedIndex);
}

export function setLose(selectedOption, selectedIndex) {
    updateSetting("maximumMissesCount", selectedOption.value, "selectedIndexLose", selectedIndex);
}

export function setWin(selectedOption, selectedIndex) {
    updateSetting("pointsToWin", selectedOption.value, "selectedIndexWin", selectedIndex);
}

export function setGridSize(selectedOption, selectedIndex) {
    data.settings.gridSize = {
        columnCount: selectedOption[0],
        rowsCount: selectedOption[1],
    };
    data.settings.selectedIndexGrid = selectedIndex;
    saveGameSettings();
}

function updateSetting(settingKey, value, indexKey, indexValue) {
    data.settings[settingKey] = value;
    data.settings[indexKey] = indexValue;
    saveGameSettings();
}

let listener = null;

function randomCoords(N) {
    return Math.floor(Math.random() * N);
}

function startTimer() {
    data.elapsedTime = 0;
    data.timerIntervalId = setInterval(() => {
        data.elapsedTime += 1000;
    }, 1000);
}

function stopTimer() {
    clearInterval(data.timerIntervalId);
}

function changeOfferCoords() {
    let newCoords;
    do {
        newCoords = {
            x: randomCoords(data.settings.gridSize.columnCount),
            y: randomCoords(data.settings.gridSize.rowsCount),
        };
    } while (newCoords.x === data.coords.x && newCoords.y === data.coords.y);

    data.coords = newCoords;
}

let offerJumpIntervalId = null;

function runOfferJumpInterval() {
    clearInterval(offerJumpIntervalId);
    offerJumpIntervalId = setInterval(missOffer, data.settings.intervalTime);
}

export function catchOffer() {
    data.scores.catchesCount++;
    if (data.scores.catchesCount === data.settings.pointsToWin) {
        endGame();
    } else {
        updateOffer("catch");
    }
}

export function restart() {
    data.scores.catchesCount = 0;
    data.scores.missesCount = 0;
    data.gameStatus = GAME_STATUSES.SETTINGS;
    listener();
}

export function start() {
    data.gameStatus = GAME_STATUSES.IN_PROGRESS;
    startTimer();
    runOfferJumpInterval();
    listener();
}

function missOffer() {
    data.scores.missesCount++;
    if (data.scores.missesCount === data.settings.maximumMissesCount) {
        endGame();
    } else {
        updateOffer("miss");
    }
}

function updateOffer(type) {
    const {x, y} = data.coords;
    if (type === "catch") {
        SetCatchOffer(x, y);
    } else {
        SetMissOffer(x, y);
    }

    setTimeout(() => {
        if (type === "catch") {
            ClearCatchOffer();
        } else {
            ClearMissOffer();
        }
        listener();
    }, data.settings.intervalTime);

    changeOfferCoords();
    runOfferJumpInterval();
}

function endGame() {
    data.gameStatus = GAME_STATUSES.FINISH;
    stopTimer();
    clearInterval(offerJumpIntervalId);
    listener();
}

function SetMissOffer(x, y) {
    data.missCoords = {x, y};
}

function ClearMissOffer() {
    data.missCoords = null;
}

function SetCatchOffer(x, y) {
    data.catchCoords = {x, y};
}

function ClearCatchOffer() {
    data.catchCoords = null;
}

export function subscribe(observer) {
    listener = observer;
}