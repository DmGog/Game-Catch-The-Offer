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
        intervalTime: 1000,
    },
    gameStatus: GAME_STATUSES.SETTINGS,
}


// Загрузка настроек из локального хранилища
const settings = loadSettings();
if (settings) {
    data.settings = settings;
} else {
    // Если настроек нет в локальном хранилище, используем значения по умолчанию
    data.settings = {
        gridSize: {
            columnCount: 3,
            rowsCount: 3,
        },
        maximumMissesCount: 3,
        pointsToWin: 20,
        intervalTime: 2000,
    };
}

// Функция для сохранения настроек в локальное хранилище и обновление данных
function saveGameSettings() {
    saveSettings(data.settings);
}

export function setIntervalTime(selectedOption) {
    data.settings.intervalTime = selectedOption.value;
    saveGameSettings()
}

export function setLose(selectedOption) {
    data.settings.maximumMissesCount = selectedOption.value;
    saveGameSettings()
}

export function setWin(selectedOption) {
    data.settings.pointsToWin = selectedOption;
    saveGameSettings()
}

export function setGridSize(selectedOption) {
    data.settings.gridSize = {
        columnCount: selectedOption[0],
        rowsCount: selectedOption[1],
    };
    saveGameSettings()
}



 let listener = null;

function randomCoords(N) {
    return Math.floor(Math.random() * N)
}

//перемещение Offer
function changeOfferCoords() {

    let newX = 0;
    let newY = 0;

    do {
        newX = randomCoords(data.settings.gridSize.columnCount)
        newY = randomCoords(data.settings.gridSize.rowsCount)
    }
    while (
        newX === data.coords.x && newY === data.coords.y)
    data.coords.x = newX;
    data.coords.y = newY;
}

let offerJumpIntervalId = null;

function runOfferJumpInterval() {
    clearInterval(offerJumpIntervalId);
    offerJumpIntervalId = setInterval(missOffer, data.settings.intervalTime)
}

export function catchOffer() {
    data.scores.catchesCount++;

    if (data.scores.catchesCount === data.settings.pointsToWin) {
        data.gameStatus = GAME_STATUSES.FINISH;
        clearInterval(offerJumpIntervalId)
    } else {
        SetCatchOffer(data.coords.x, data.coords.y);
        setTimeout((() => {
            ClearCatchOffer();
            listener();
        }), data.settings.intervalTime);
        changeOfferCoords()
        runOfferJumpInterval();
    }
    listener();
}

export function restart() {
    data.scores.catchesCount = 0;
    data.scores.missesCount = 0;
    data.gameStatus = GAME_STATUSES.SETTINGS;
    listener();
}

export function start() {
    data.gameStatus = GAME_STATUSES.IN_PROGRESS;
    runOfferJumpInterval();
    listener();
}

function missOffer() {
    data.scores.missesCount++;


    if (data.scores.missesCount === data.settings.maximumMissesCount) {
        data.gameStatus = GAME_STATUSES.FINISH;
        clearInterval(offerJumpIntervalId)
    } else {
        SetMissOffer(data.coords.x, data.coords.y);
        setTimeout((() => {
            ClearMissOffer();
            listener();
        }), data.settings.intervalTime)
        changeOfferCoords();
        runOfferJumpInterval()
    }
    listener();
}

function SetMissOffer(x, y) {
    data.missCoords = {x, y}
}

function ClearMissOffer() {
    data.missCoords = null
}

function SetCatchOffer(x, y) {
    data.catchCoords = {x, y}
}

function ClearCatchOffer() {
    data.catchCoords = null
}

export function subscribe(observer) {
    listener = observer;
}