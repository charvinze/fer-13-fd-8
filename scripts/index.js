const arrayOfNames = ["Bryan", "Axel", "Daniel", "Chelsea", "Ethan"];

function ascendingArray() {
    console.log(arrayOfNames.sort());
}

function descendingArray() {
    console.log(arrayOfNames.reverse());
}

function checkItemArray() {
    let userInput = document.getElementById("user-input1").value;
    userInput = userInput.trim();

    let result = arrayOfNames.includes(userInput) ? "Ada" : "Tidak Ada";
    console.log(result);
}