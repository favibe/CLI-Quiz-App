
//import readline from 'readline-sync';
//let readlineSync = readline.question("")

// take user input(answers)
let readlineSync = require("readline-sync");

//score
let score = 0;

//Get Username
let userName = readlineSync.question("What's your name? ");

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

//LeaderBorad
const leaderBoard = {
    data: [
        {
            name: "Vanessa",
            score: 2
        },
        {
            name: "Elle",
            score: 1
        },
        {
            name: "Fav",
            score: 3
        }
    ]
}

//The playgame logic for correct answers
function playGame (userAnswer, correctAnswer) {
    if (userAnswer === correctAnswer) {
        console.log("Correct Answer")
        score++;
    } else {
        console.log("Incorrect Answers");
        console.log(`The Correct answer is : ${correctAnswer}`)
    }
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
        let userAnswer = readlineSync.question("Enter your answer - (a/b/c/d) - ").toLocaleLowerCase();
        playGame(userAnswer, dataset.data[i].correctAnswer);
    }
}

//Function for High score
function showHighScore(leaderBoard) {
    h
}

showQuestionAndOptions(dataset);
console.log(`Your score is - ${score}`);