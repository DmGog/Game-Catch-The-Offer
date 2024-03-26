import {data, setWin} from "../../../data/data.js";


const optionsWin = [
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

    containerElement.append(selectLabel, select);

    optionsWin.forEach(optionData => {
        const option = document.createElement("option");
        option.value = optionData.value;
        option.text = optionData.text;
        select.add(option);
    });

    select.selectedIndex = data.settings.selectedIndexWin

    select.addEventListener("change", function () {
        const selectedIndex = select.selectedIndex
        const selectedOption = parseInt(select.value, 10);
        const selectedLose = optionsWin.find(option => option.value === selectedOption);
        setWin(selectedLose, selectedIndex)
        console.log(`Выбрано кол-во очков для победы  ${selectedOption}`);

    });

    return containerElement;
}

