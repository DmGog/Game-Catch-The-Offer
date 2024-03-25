import {setIntervalTime} from "../../data/data.js";

const optionsIntervalTime = [
    { value: 1500, text: "Low speed 🐢" },
    { value: 800, text: "Medium speed 🏃" },
    { value: 600, text: "High speed 💨" }
];

export function SelectIntervalTime() {
    const containerElement = document.createElement("div");
    const select = document.createElement("select");
    select.id = "selectTime";

    const selectLabel = document.createElement("label");
    selectLabel.className = "label";
    selectLabel.textContent = "Game speed";

    optionsIntervalTime.forEach(optionData => {
        const option = document.createElement("option");
        option.value = optionData.value;
        option.text = optionData.text;
        select.add(option);
    });

    containerElement.append(selectLabel, select);

    select.addEventListener("change", function () {
        const selectedOption = parseInt(select.value, 10);

        const selectedTime = optionsIntervalTime.find(option => option.value === selectedOption);

        setIntervalTime(selectedTime)

    });

    return containerElement;

}