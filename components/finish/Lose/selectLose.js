import { data, setLose } from "../../../data/data.js";

const optionsLose = [
    { value: 3, text: '3' },
    { value: 5, text: '5' },
    { value: 7, text: '7' },
    { value: 9, text: '9' },
    { value: 11, text: '11' },
    { value: 13, text: '13' }
];

function createSelectElement() {
    const select = document.createElement("select");
    select.id = "selectLose";

    optionsLose.forEach(optionData => {
        const option = document.createElement("option");
        option.value = optionData.value;
        option.text = optionData.text;
        select.add(option);
    });

    select.selectedIndex = data.settings.selectedIndexLose;

    return select;
}

function createLabelElement() {
    const selectLabel = document.createElement("label");
    selectLabel.className = "label";
    selectLabel.textContent = "Maximum misses";
    return selectLabel;
}

export function SelectLose() {
    const containerElement = document.createElement("div");
    const select = createSelectElement();
    const selectLabel = createLabelElement();

    containerElement.append(selectLabel, select);

    select.addEventListener("change", function () {
        const selectedOption = parseInt(select.value, 10);
        const selectedLose = optionsLose.find(option => option.value === selectedOption);
        setLose(selectedLose, select.selectedIndex);
        console.log(`Выбрано кол-во промахов: ${selectedOption}`);
    });

    return containerElement;
}
