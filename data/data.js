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
    catchCoords: 0,
    missCoords: 0,
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
    gameStatus: GAME_STATUSES.SETTINGS,
}


const settings = loadSettings();
if (settings) data.settings = settings;

function saveGameSettings() {
    saveSettings(data.settings);
}

export function setIntervalTime(selectedOption, selectedIndex) {
    data.settings.intervalTime = selectedOption.value;
    data.settings.selectedIndexInterval = selectedIndex
    saveGameSettings()
}

export function setLose(selectedOption, selectedIndex) {
    data.settings.maximumMissesCount = selectedOption.value;
    data.settings.selectedIndexLose = selectedIndex
    saveGameSettings()
}

export function setWin(selectedOption, selectedIndex) {
    data.settings.pointsToWin = selectedOption.value;
    data.settings.selectedIndexWin = selectedIndex
    saveGameSettings()
}

export function setGridSize(selectedOption, selectedIndex) {
    data.settings.gridSize = {
        columnCount: selectedOption[0],
        rowsCount: selectedOption[1],
    };
    data.settings.selectedIndexGrid = selectedIndex
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
        }), data.settings.intervalTime)
        changeOfferCoords();
        runOfferJumpInterval()
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