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
        gridSize:{
            columnCount: 3,
            rowsCount: 3,
        },
        maximumMissesCount: 3,
        pointsToWin: 20,
    },
    gameStatus: GAME_STATUSES.SETTINGS,
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

// runOfferJumpInterval();

export function catchOffer() {
    data.scores.catchesCount++;

    if (data.scores.catchesCount === data.settings.pointsToWin) {
        data.gameStatus = GAME_STATUSES.FINISH;
        clearInterval(offerJumpIntervalId)
    } else {
        SetCatchOffer(data.coords.x, data.coords.y);
        setTimeout((() => {
            ClearCatchOffer();
        }), 2000);
        changeOfferCoords();
        runOfferJumpInterval();
        listener();
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
    SetMissOffer(data.coords.x, data.coords.y);
    setTimeout((() => {
        ClearMissOffer();
        // listener();
    }), 2000)
    changeOfferCoords();
    listener();

    if (data.scores.missesCount === data.settings.maximumMissesCount) {
        data.gameStatus = GAME_STATUSES.FINISH;
        clearInterval(offerJumpIntervalId)
    } else {
        changeOfferCoords();
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