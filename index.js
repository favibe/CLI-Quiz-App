
//import readline from 'readline-sync';
//let readlineSync = readline.question("")

// take user input(answers)
let readlineSync = require("readline-sync");

//Creating a data structure for the questions
const dataset = {
    data: [
        {
            question: `let a = {}, b = {}
console.log(a == b)
console.log(a === b)`,
            options: {
                a: "false false",
                b: "false true",
                c: "true false",
                d: "true true"
            },
            correctAnswer: "a"
        },
        {
            question: "Object.assign(target, sources) creates which type of copy?",
            options: {
                a: "Deep Copy",
                b: "Shallow Copy",
                c: "Nested Copy",
                d: "Creates a new reference"
            },
            correctAnswer: "b"
        },
        {
            question: "Is method chaining possible with forEach",
            options: {
                a: "Yes",
                b: "No"
            },
            correctAnswer: "b"
        }
    ]
}

/* My questions, option are in a array, which allows me be able 
to loop through thrm (datatset.data)*/
//  A fuction that loops to show Qustion and Answer

function showQuestionAndOptions(dataset) {
    for (let i = 0; i<dataset.data.length; i++) {
        //console.log(dataset.data[i].question)
        console.log(`\nQ${i +1} - ${dataset.data[i].question}\n`)
        for(let key in dataset.data[i].options){
            console.log(`${key} - ${dataset.data[i].options[key]}`)
        }
        let userAnswer = readlineSync.question("Enter your answer - (a/b/c/d) - ");
    }
}
showQuestionAndOptions(dataset);