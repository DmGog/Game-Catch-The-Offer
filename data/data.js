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
        intervalTime: 2000,
    },
    gameStatus: GAME_STATUSES.SETTINGS,
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
        newX === data.coords.x && newY === data.coords.y
        )
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
        changeOfferCoords();
        runOfferJumpInterval();
    }
    listener();
}

export function restart() {
    data.scores.catchesCount = 0;
    data.scores.missesCount = 0;
    data.settings.gridSize.rowsCount = 3;
    data.settings.gridSize.columnCount = 3;
    data.settings.maximumMissesCount = 3;
    data.settings.pointsToWin = 20;
    data.settings.intervalTime = 2000;
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
    SetMissOffer(data.coords.x, data.coords.y);
    setTimeout((() => {
        ClearMissOffer();
        listener();
    }), data.settings.intervalTime)
    changeOfferCoords();

    if (data.scores.missesCount === data.settings.maximumMissesCount) {
        data.gameStatus = GAME_STATUSES.FINISH;
        clearInterval(offerJumpIntervalId)
    } else {
        changeOfferCoords();
        runOfferJumpInterval();
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