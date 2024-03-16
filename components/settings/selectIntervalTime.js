import {data} from "../../data/data.js";


export function SelectIntervalTime() {
    const containerElement = document.createElement("div")
    const select = document.createElement("select");
    select.id = "selectTime";
    const selectLabel = document.createElement("label")
    selectLabel.className = "label";
    selectLabel.textContent = "Game speed"


    const option1 = document.createElement("option");
    option1.text = "2000 ms";
    const option2 = document.createElement("option");
    option2.text = "1800 ms";
    const option3 = document.createElement("option");
    option3.text = "1500 ms";
    const option4 = document.createElement("option");
    option4.text = "1300 ms";
    const option5 = document.createElement("option");
    option5.text = "1100 ms";
    const option6 = document.createElement("option");
    option6.text = "1000 ms";

    select.add(option1);
    select.add(option2);
    select.add(option3);
    select.add(option4);
    select.add(option5);
    select.add(option6);
    containerElement.append(selectLabel, select)

    // Устанавливаем сохраненное значение или значение по умолчанию

    const savedGameSpeed = localStorage.getItem("gameSpeed");
    const defaultGameSpeed = savedGameSpeed ? savedGameSpeed : 2000;
    select.value = `${defaultGameSpeed} ms`;



    select.addEventListener("change", function () {
        let selectedTime;
        let selectedOption = select.value;
        switch (selectedOption) {
            case "2000 ms":
                selectedTime = 2000;
                break;
            case "1800 ms":
                selectedTime = 1800;
                break;
            case "1500 ms":
                selectedTime = 1500;
                break;
            case "1300 ms":
                selectedTime = 1300;
                break;
            case "1100 ms":
                selectedTime = 1100;
                break;
            case "1000 ms":
                selectedTime = 1000;
                break;

            // проверка если case не работают
            default:
                alert("Error");
        }

        data.settings.intervalTime = selectedTime;
        localStorage.setItem("gameSpeed", selectedTime)

    });

    return containerElement;
}