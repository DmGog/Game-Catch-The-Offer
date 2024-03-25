import {setGridSize} from "../../../data/data.js";

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

    containerElement.append(selectLabel, select);

    options.forEach(optionData => {
        const option = document.createElement("option");
        option.value = optionData.value;
        option.text = optionData.text;
        select.add(option);
    });

    select.addEventListener("change", function () {
        const selectedIndex = select.selectedIndex;
        const selectedOption = options[selectedIndex].value;
        setGridSize(selectedOption);
        console.log(`Выбран размер сетки  ${selectedOption}`);
    });
    return containerElement;
}



