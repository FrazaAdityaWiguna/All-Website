let a = "aabaA";
let b = "fraza";

function palindrome(input) {
  let newObj = input.toLowerCase();
  let obj = newObj.split("").reverse().join("");

  if (newObj === obj) {
    return true;
  } else {
    return false;
  }
}

console.log(palindrome(a));
console.log(palindrome(b));
