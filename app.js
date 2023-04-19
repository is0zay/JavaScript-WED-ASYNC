// Remove the spaces found in a string

let str1 = "   Remove   the   extra  space  ";
let fixedString = str1.trim(); // trim method removes extra whitespace

function removeWhiteSpace (str) {
    let newStr = "";
    newStr = str.trim();
    console.log(newStr);
}


// Return a Boolean if a number is divisible by 10, Create a function

function isDivisibleBy10 (num) {
    if(num % 10 === 0) {
        true;
        return console.log(true);
    }else {
        false;
        return console.log(false);
    }
}
isDivisibleBy10(20);
isDivisibleBy10(38);


// Return the number of vowels in a string



function returnVowel(str) {
    let count = 0;
    let strArray = str.split(""); // use split("") to turn string into an array and split each character in the string

    for (let i = 0; i < strArray.length; i++) { //use OR operator ||
        if (strArray[i] === "a" || strArray[i] === "A" || strArray[i] === "e" || strArray[i] === "E" || strArray[i] === "i" || strArray[i] === "I" || strArray[i] === "o" || strArray[i] === "O" || strArray[i] === "u" || strArray[i] === "U") {
            count ++;
        }
    }
    console.log(count)
    
}

returnVowel("Hey my name is Isaiah and I love to play basketball.");
