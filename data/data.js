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
    },
}

let listener = null;

function randomCoords(N) {
    return Math.floor(Math.random() * N)
}

function changeOfferCoords (){
    data.coords.x = randomCoords(data.settings.gridSize.rowsCount)
    data.coords.y = randomCoords(data.settings.gridSize.columnCount)
    listener();
}

setInterval(changeOfferCoords,2000)

export function subscribe(observer) {
    listener = observer;
}