import inquirer from "inquirer";
console.log("WELCOME TO A.A SIMPLE CALCULATOR!!");
let answer = await inquirer.prompt([
    {
        name: "firstNumber",
        type: "number",
        message: "ENTER YOUR FIRST NUMBER"
    },
    {
        name: "secondNumber",
        type: "number",
        message: "ENTER YOUR SECOND NUMBER"
    },
    {
        name: "operation",
        type: "list",
        message: "SELECT ONE OPERATION TO PERFORM",
        choices: ["ADDITION", "SUBSTRACTION", "MULTIPLICATION", "DIVISION"]
    }
]);
if (answer.operation === "ADDITION") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operation === "SUBSTRACTION") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operation === "MULTIPLICATION") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operation === "DIVISION") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("INVALID INPUT");
}
console.log("THANKS FOR USING A.A SIMPLE CALCULATOR");
