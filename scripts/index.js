const arrayOfNames = ["Bryan", "Axel", "Daniel", "Chelsea", "Ethan"];

function ascendingArray(_array) {
    console.log(_array.sort());
}

function descendingArray(_array) {
    console.log(_array.reverse());
}

function checkItemArray() {
    let userInput = document.getElementById("user-input1").value;
    userInput = userInput.trim();

    let result = arrayOfNames.includes(userInput) ? "Ada" : "Tidak Ada";
    console.log(result);
}