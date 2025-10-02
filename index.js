
//import readline from 'readline-sync';
//let readlineSync = readline.question("")
import readlineSync from "readline-sync";
import kuler from "kuler";

// take user input(answers)

//kular lets us use color in js (hexcode)


//score
let score = 0;

//Get Username
let userName = readlineSync.question("What's your name? ");
console.log(kuler(`Hello ${userName} welcome to Quiz-App`, "#dc2626"))

//Like a game rule
console.log("\nPlease select any options by typing either a/b/c/d\n")

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
        console.log(kuler("Correct Answer", "#059669"))
        score++;
    } else {
        console.log(kuler("Incorrect Answers", "#b91c1c"));
        console.log(kuler(`The Correct answer is : ${correctAnswer}`, "#1d4ed8"))
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
    leaderBoard.data.push({name: userName, score: score})
    let sortedScoreList = leaderBoard.data.sort((a,b) => b.score - a.score);
    console.log(kular("\nCheck your position on the Leader Board ✨", "#fde047"))
    for (let leader of sortedScoreList) {
        console.log(kuler(`${leader.name} - Score: ${leader.score}`,"#9333ea"))
    }
}

showQuestionAndOptions(dataset);
console.log(kuler(`\nYour score is - ${score}`, "#5eead4"));
showHighScore(leaderBoard)