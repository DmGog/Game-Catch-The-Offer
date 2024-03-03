export const GAME_STATUSES = {
    SETTINGS: "settings",
    IN_PROGRESS: "in-progress",
    FINISH: "finish",
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
            columnCount: 3,
            rowsCount: 3,
        },
        maximumMissesCount: 3,
        pointsToWin: 3,
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
    clearInterval(offerJumpIntervalId)
    data.scores.catchesCount++;

    if (data.scores.catchesCount === data.settings.pointsToWin) {
        data.gameStatus = GAME_STATUSES.FINISH;
    } else {
        changeOfferCoords();
        runOfferJumpInterval();
    }
    listener();
}

function missOffer() {
    data.scores.missesCount++;

    if (data.scores.missesCount === data.settings.maximumMissesCount) {
        data.gameStatus = GAME_STATUSES.FINISH;
    } else {
        changeOfferCoords();
    }
    listener();
}

export function subscribe(observer) {
    listener = observer;
}