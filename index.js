function isPalindrome(word) {
  // Write your algorithm here
  for (let i = 0; word.length - i > i; i++) {
    if (word[i] !== word[word.length - 1 - i]) return false;
  }
  return true
};

/* 
  Add your pseudocode here
*/ // Process isPalindrome
// return true if word is palindrome
// return false if word is not palindrome

/*
  Add written explanation of your solution here

  1) Loop through the string
  2) As we are looping through the string, does the first letter match the last letter?
  3) If so, does the second letter match the second-to-last letter... and so on
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
