// 1
// Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
// function vowel_count(str1) {
//   const vowelList = 'aeiouAEIOU';
//   let vowelCount = 0; 
//   for (let i = 0; i < str1.length; i++) {
//     if (vowelList.indexOf(str1[i]) !== -1) {
//       vowelCount += 1;
//     }
//   }
//   return vowelCount

// }

function vowel_count(str1) {
  const vowelList = 'aeiouAEIOU';
  let vowelCount = 0; 
  for (let i = 0; i < str1.length; i++) {
    if (vowelList.includes(str1[i])) {
      vowelCount++;
    }
  }
  return vowelCount

}


console.log(vowel_count("The quick brown fox"));
console.log(vowel_count("aaaaaaaaaooooooooo"));

//2
// Write a JavaScript function that generates a string id (specified length) of random characters.
function makeid(l) {
  let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let gen = "";
  for (let i = 0; i < l; i++) {
    gen += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return gen
}
console.log(makeid(8));

// 3
// Write a JavaScript program to pass a 'JavaScript function' as parameter.
function abc() {
  //write your code here
}

abc();
