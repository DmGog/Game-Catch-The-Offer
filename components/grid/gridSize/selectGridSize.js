import {data, setGridSize} from "../../../data/data.js";

const optionsGrid = [
    {text: "3x3", value: [3, 3]},
    {text: "4x4", value: [4, 4]},
    {text: "5x5", value: [5, 5]},
    {text: "6x6", value: [6, 6]},
];

export function SelectGridSize() {
    const containerElement = document.createElement("div");
    const select = document.createElement("select");
    select.id = "selectGrid";

    const selectLabel = document.createElement("label");
    selectLabel.className = "label";
    selectLabel.textContent = "Grid Size";

    containerElement.append(selectLabel, select);

    optionsGrid.forEach(optionData => {
        const option = document.createElement("option");
        option.value = optionData.value;
        option.text = optionData.text;
        select.add(option);
    });

    select.selectedIndex = data.settings.selectedIndexGrid

    select.addEventListener("change", function () {
        const selectedIndex = select.selectedIndex;
        const selectedOption = optionsGrid[selectedIndex].value;
        setGridSize(selectedOption, selectedIndex);
        console.log(`Выбран размер сетки  ${selectedOption}`);
    });


    return containerElement;
}



