export const GAME_STATUSES = {
    SETTINGS: "settings",
    IN_PROGRESS: "in-progress",
    FINISH: {
        win: true,
    }
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
    settings: {
        gridSize: {
            columnCount: 4,
            rowsCount: 4,
        },
        maximumMissesCount: 3,
        pointsToWin: 10,
    },
    gameStatus: GAME_STATUSES.IN_PROGRESS,
}

let listener = null;

function randomCoords(N) {
    return Math.floor(Math.random() * N)
}

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
    offerJumpIntervalId = setInterval(missOffer, 2000)
}

runOfferJumpInterval();

export function catchOffer() {
    data.scores.catchesCount++;

    if (data.scores.catchesCount === data.settings.pointsToWin) {
        data.gameStatus = GAME_STATUSES.FINISH;
        clearInterval(offerJumpIntervalId)
    } else {
        changeOfferCoords();
        runOfferJumpInterval();
    }
    listener();
}

export function restart() {
    data.scores.catchesCount = 0;
    data.scores.missesCount = 0;
    data.gameStatus = GAME_STATUSES.SETTINGS;
    runOfferJumpInterval();
    listener();
}
export function start() {
    data.gameStatus = GAME_STATUSES.IN_PROGRESS;
    listener();
}

function missOffer() {
    data.scores.missesCount++;

    if (data.scores.missesCount === data.settings.maximumMissesCount) {
        data.gameStatus = GAME_STATUSES.FINISH;
        clearInterval(offerJumpIntervalId)
    } else {
        changeOfferCoords();
    }
    listener();
}

export function subscribe(observer) {
    listener = observer;
}