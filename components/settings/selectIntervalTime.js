import {data} from "../../data/data.js";


export function SelectIntervalTime() {
    const containerElement = document.createElement("div")
    const select = document.createElement("select");
    const selectLabel = document.createElement("label")
    selectLabel.className = "label";
    selectLabel.textContent = "ms after the catch"


    const option1 = document.createElement("option");
    option1.text = "200-100 ms";
    const option2 = document.createElement("option");
    option2.text = "180-80 ms";
    const option3 = document.createElement("option");
    option3.text = "150-70 ms";
    const option4 = document.createElement("option");
    option4.text = "130-50 ms";
    const option5 = document.createElement("option");
    option5.text = "110-30 ms";
    const option6 = document.createElement("option");
    option6.text = "100-10 ms";

    select.add(option1);
    select.add(option2);
    select.add(option3);
    select.add(option4);
    select.add(option5);
    select.add(option6);
    containerElement.append(selectLabel, select)
    select.addEventListener("change", function () {
        let selectedTime;
        let selectedOption = select.value;
        switch (selectedOption) {
            case "200-100 ms":
                selectedTime = 2000;
                break;
            case "180-80 ms":
                selectedTime = 1800;
                break;
            case "150-70 ms":
                selectedTime = 1500;
                break;
            case "130-50 ms":
                selectedTime = 1300;
                break;
            case "110-30 ms":
                selectedTime = 1100;
                break;
            case "100-10 ms":
                selectedTime = 1000;
                break;

            // проверка если case не работают
            default:
                alert("Error");
        }

        data.settings.intervalTime = selectedTime;

    });

    return containerElement;
}