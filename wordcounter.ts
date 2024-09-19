// Word Counter
import inquirer from "inquirer";

const answer: {
sentence: string 
 } = await inquirer.prompt(
    [
        {
            name: "sentence",
            type: "input",
            message: "Enter your sentence to count the words:"
        }
    ]
)

const words = answer.sentence.trim().split(" ")

// Print the array of words to the console
console.log(words);

// Print the word count of the sentence to the console
console.log(`Your sentence word count is ${words.length}`);