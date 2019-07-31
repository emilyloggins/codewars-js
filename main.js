// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

const sentence = "I love practicing javascript";

let newArray = sentence.split(' ');
console.log("newArray:", newArray);

let singleWordsArray = newArray.map(singleWord => {
    // console.log(singleWord)
    return singleWord.split('').reverse().join('');
});

let finalResult = singleWordsArray.join(' ');

console.log("finalResult:", finalResult);

// Word.split('’).reverse().join(‘’) inside the .map