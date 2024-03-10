import {data} from "../../../data/data.js";

export function SelectLose() {
    const containerElement = document.createElement("div")
    // containerElement.className = "select"
    const select = document.createElement("select");
    const selectLabel = document.createElement("label")
    selectLabel.className = "label";
    selectLabel.textContent = "Maximum misses"


    const option1 = document.createElement("option");
    option1.text = "3";
    const option2 = document.createElement("option");
    option2.text = "5";
    const option3 = document.createElement("option");
    option3.text = "7";
    const option4 = document.createElement("option");
    option4.text = "9";
    const option5 = document.createElement("option");
    option5.text = "11";
    const option6 = document.createElement("option");
    option6.text = "13";

    select.add(option1);
    select.add(option2);
    select.add(option3);
    select.add(option4);
    select.add(option5);
    select.add(option6);
    containerElement.append(selectLabel, select)
    select.addEventListener("change", function () {
        let selectedLose;
        let selectedOption = select.value;
        switch (selectedOption) {
            case "3":
                selectedLose = 3;
                break;
            case "5":
                selectedLose = 5;
                break;
            case "7":
                selectedLose = 7;
                break;
            case "9":
                selectedLose = 9;
                break;
            case "11":
                selectedLose = 11;
                break;
            case "13":
                selectedLose = 13;
                break;

            // проверка если case не работают
            default:
                alert("Error points to lose");
        }

        data.settings.maximumMissesCount = selectedLose;

    });

    return containerElement;
}