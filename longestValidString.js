function longestWordInSentence(sentence) {
  let longestWord = "";
  sentence = sentence.split(/(\s+)/);
  for (let word of sentence) {
    if (word !== "") {
      word = word.match(/^[a-z]+|(\s+)/i)[0];
      if (word && word.length > longestWord.length) {
        longestWord = word;
      } else if (word.trim().length === longestWord.trim().length) {
        if (
          word.trim() &&
          longestWord.trim() &&
          word.match(/[aeiou]/gm).length > longestWord.match(/[aeiou]/gm).length
        ) {
          longestWord = word;
        }
      } else if (longestWord.match(/[aeiou]/gm)) {
        longestWord = longestWord;
      } else if (word.match(/[aeiou]/gm)) {
        longestWord = word;
      }
    }
  }
  return longestWord;
}

// Sample Input
let input1 =  'Given a sentence with multiple lowercase words separated by spaces, write a Javascript function that finds and returns the longest word in the sentence. If there are multiple words of the same length, choose one that has the highest number of vowels. Ignore any character in the sentence that is not an English letter or a space. Find the most efficient way to achieve this          ';

let input2 =  '          Given a sentence with multiple lowercase words separated by spaces, write a Javascript function that finds and returns the longest word in the sentence. If there are multiple words of the same length, choose one that has the highest number of vowels. Ignore any character in the sentence that is not an English letter or a space. Find the most efficient way to achieve this';

let input3 = 'Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers';

console.log(longestWordInSentence(input3));
