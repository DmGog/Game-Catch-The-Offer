import {data} from "../../../data/data.js";

const options = [
    { text: "3x3", value: [3, 3] },
    { text: "4x4", value: [4, 4] },
    { text: "5x5", value: [5, 5] },
    { text: "6x6", value: [6, 6] },
    { text: "7x7", value: [7, 7] },
    { text: "8x8", value: [8, 8] },
];

export function SelectGridSize() {
    const containerElement = document.createElement("div");
    const select = document.createElement("select");
    select.id = "selectGrid";

    const selectLabel = document.createElement("label");
    selectLabel.className = "label";
    selectLabel.textContent = "Grid Size";

    options.forEach(optionData => {
        const option = document.createElement("option");
        option.text = optionData.text;
        option.value = optionData.text; // Устанавливаем значение опции как текст
        select.appendChild(option);
    });

    containerElement.append(selectLabel, select);

    const savedGridSize = localStorage.getItem("gridSize");
    if (savedGridSize) {
        select.value = savedGridSize; // Устанавливаем выбранное значение из localStorage
    }


    select.addEventListener("change", function () {
        const selectedOption = select.value;
        const selectedSize = options.find(optionData => optionData.text === selectedOption).value;

        data.settings.gridSize.columnCount = selectedSize[0];
        data.settings.gridSize.rowsCount = selectedSize[1];

        localStorage.setItem("gridSize", selectedOption);

    });

    return containerElement;
}



