import {data} from "../../../data/data.js";

export function SelectGridSize() {
    const containerElement = document.createElement("div")
    const select = document.createElement("select");
    const selectLabel = document.createElement("label")
    selectLabel.textContent = "Grid Size"
    // select.className = "select-style";

    const option1 = document.createElement("option");
    option1.text = "Board 3x3";
    const option2 = document.createElement("option");
    option2.text = "Board 4x4";
    const option3 = document.createElement("option");
    option3.text = "Board 5x5";
    const option4 = document.createElement("option");
    option4.text = "Board 6x6";
    const option5 = document.createElement("option");
    option5.text = "Board 7x7";
    const option6 = document.createElement("option");
    option6.text = "Board 8x8";

    select.add(option1);
    select.add(option2);
    select.add(option3);
    select.add(option4);
    select.add(option5);
    select.add(option6);
    containerElement.append(selectLabel, select)
    select.addEventListener("change", function () {
        let selectedSize;
        let selectedOption = select.value;
        switch (selectedOption) {
            case "Board 3x3":
                selectedSize = [3, 3];
                break;
            case "Board 4x4":
                selectedSize = [4, 4];
                break;
            case "Board 5x5":
                selectedSize = [5, 5];
                break;
            case "Board 6x6":
                selectedSize = [6, 6];
                break;
            case "Board 7x7":
                selectedSize = [7, 7];
                break;
            case "Board 8x8":
                selectedSize = [8, 8];
                break;

                // проверка если case не работают
            default:
                alert("Error board size");
        }

        data.settings.gridSize.columnCount = selectedSize[0];
        data.settings.gridSize.rowsCount = selectedSize[1];
    });

    return containerElement;
}



