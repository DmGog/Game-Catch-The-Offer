import {setLose} from "../../../data/data.js";


const options = [
    { value: 3, text: '3' },
    { value: 5, text: '5' },
    { value: 7, text: '7' },
    { value: 9, text: '9' },
    { value: 11, text: '11' },
    { value: 13, text: '13' }
];
export function SelectLose() {
    const containerElement = document.createElement("div");
    const select = document.createElement("select");
    select.id = "selectLose";

    const selectLabel = document.createElement("label");
    selectLabel.className = "label";
    selectLabel.textContent = "Maximum misses";

    options.forEach(optionData => {
        const option = document.createElement("option");
        option.value = optionData.value;
        option.text = optionData.text;
        select.add(option);
    });

    containerElement.append(selectLabel, select);

    select.addEventListener("change", function () {
        const selectedOption = parseInt(select.value, 10);
        const selectedLose = options.find(option => option.value === selectedOption);
        // data.settings.maximumMissesCount = selectedOption;
        setLose(selectedLose)
        console.log("Выбран кол-во промахов");

    });

    return containerElement;
}
