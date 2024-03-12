import {data} from "../../../data/data.js";


export function SelectWin() {
    const containerElement = document.createElement("div");
    const select = document.createElement("select");
    const selectLabel = document.createElement("label");
    selectLabel.className = "label";
    selectLabel.textContent = "Points to win";


    const option1 = document.createElement("option");
    option1.text = "20 pts";
    const option2 = document.createElement("option");
    option2.text = "30 pts";
    const option3 = document.createElement("option");
    option3.text = "40 pts";
    const option4 = document.createElement("option");
    option4.text = "60 pts";
    const option5 = document.createElement("option");
    option5.text = "80 pts";
    const option6 = document.createElement("option");
    option6.text = "100 pts";

    select.add(option1);
    select.add(option2);
    select.add(option3);
    select.add(option4);
    select.add(option5);
    select.add(option6);
    containerElement.append(selectLabel, select)
    select.addEventListener("change", function () {
        let selectedWin;
        let selectedOption = select.value;
        switch (selectedOption) {
            case "20 pts":
                selectedWin = 20;
                break;
            case "30 pts":
                selectedWin = 30;
                break;
            case "40 pts":
                selectedWin = 40;
                break;
            case "60 pts":
                selectedWin = 60;
                break;
            case "80 pts":
                selectedWin = 80;
                break;
            case "100 pts":
                selectedWin = 100;
                break;

            // проверка если case не работают
            default:
                alert("Error");
        }

        data.settings.pointsToWin = selectedWin;

    });

    return containerElement;
}
