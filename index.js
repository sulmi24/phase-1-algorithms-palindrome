function isPalindrome(word) {
  // Write your algorithm here
  return word.split("").reverse().join("") == word;
}
/* 
  Add your pseudocode here
  ------------------------------
  1.Define the isPalindrome function that accepts a string argument word.
2.Split the word into an array of characters using the split method and store it in a variable.
3.Reverse the array of characters using the reverse method.
4.Join the reversed array of characters into a string using the join method and store it in a variable.
5.Compare the reversed string with the original word using the == operator.
6.If they are equal, return true, indicating that the word is a palindrome. Otherwise, return false.
  write fun
  accpet arrugment 
  if start simmler the end done 
  else not done 
*/

/*
  Add written explanation of your solution here
  The isPalindrome function checks if a given word is a palindrome or not. A palindrome is a word that reads the same way forwards and backwards. To check if a word is a palindrome, the function first splits the word into an array of characters. It then reverses the order of the characters in the array using the reverse method. The reversed array is then joined back together into a string using the join method. The resulting string is compared to the original word using the == operator. If the two are equal, the word is a palindrome and the function returns true. Otherwise, the word is not a palindrome and the function returns false.
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
