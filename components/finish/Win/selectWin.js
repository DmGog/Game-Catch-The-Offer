import {setWin} from "../../../data/data.js";


const options = [
    {value: 20, text: "20 pts"},
    {value: 30, text: "30 pts"},
    {value: 40, text: "40 pts"},
    {value: 60, text: "60 pts"},
    {value: 80, text: "80 pts"},
    {value: 100, text: "100 pts"}
];

export function SelectWin() {
    const containerElement = document.createElement("div");
    const select = document.createElement("select");
    select.id = "selectWin";
    const selectLabel = document.createElement("label");
    selectLabel.className = "label";
    selectLabel.textContent = "Points to win";

    options.forEach(optionData => {
        const option = document.createElement("option");
        option.value = optionData.value;
        option.text = optionData.text;
        select.add(option);
    });

    containerElement.append(selectLabel, select);

    select.addEventListener("change", function () {
        const selectedOption = parseInt(select.value, 10);
        setWin(selectedOption)
        // data.settings.pointsToWin = selectedOption;
    });

    return containerElement;
}

