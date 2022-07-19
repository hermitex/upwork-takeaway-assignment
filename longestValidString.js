function longestWordInSentence(sentence) {
  let longestWord = "";
  sentence = sentence.split(/(\s+)/); // make an array of words preserving all whitespaces
  for (let word of sentence) {
    if (word !== "") { // make sure the word is not null
      word = word.match(/^[a-z]+|(\s+)/i)[0]; // extract only alphabetic characters from a word.

    //   Find the longest word
      if (word.length > longestWord.length) { 
        longestWord = word;
      } else if(word.length < longestWord.length){
        longestWord = longestWord;
        // When there are multiple words with the same length, trim them first
        // And check which has more vowels
      }else if (word.trim().length === longestWord.trim().length) { 
        if (
          word.trim() &&
          longestWord.trim() &&
          word.match(/[aeiou]/gm).length > longestWord.match(/[aeiou]/gm).length
        ) {
          longestWord = word; // Select word with more vowels to be the longest word
        }
      } else if (longestWord.match(/[aeiou]/gm)) { // when the word is just empty whitespaces, retain the longestWord as the longestWord 
        longestWord = longestWord;
        // Otherwise the longestWord is the current word
      } else if (word.match(/[aeiou]/gm)) {
        longestWord = word;
      }
    }
  }
  return longestWord; // return the result
}

// Sample Input
let input1 =  'Given a sentence with multiple lowercase words separated by spaces, write a Javascript function that finds and returns the longest word in the sentence. If there are multiple words of the same length, choose one that has the highest number of vowels. Ignore any character in the sentence that is not an English letter or a space. Find the most efficient way to achieve this          ';

let input2 =  '          Given a sentence with multiple lowercase words separated by spaces, write a Javascript function that finds and returns the longest word in the sentence. If there are multiple words of the same length, choose one that has the highest number of vowels. Ignore any character in the sentence that is not an English letter or a space. Find the most efficient way to achieve this';

let input3 = 'Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers';

let input4 = 'Smart people learn from everything           and everyone, average people from their experience, stupid people already, have all the answers';

let input5 = 'Smart people learn from everything          and everyone, average people from their experience, stupid people already, have all the answers';

console.log(longestWordInSentence(input1)); //Javascript
console.log(longestWordInSentence(input2)); //Javascript
console.log(longestWordInSentence(input3)); //experience
console.log(longestWordInSentence(input4)); //'           '
console.log(longestWordInSentence(input5)); //experience
