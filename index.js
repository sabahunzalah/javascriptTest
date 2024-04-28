


// 1 .Given an integer array nums, find a subarray that has the largest
// product, and return the product.

function maxProduct(nums) {
    if (nums.length === 0) return 0;

    let maxProd = nums[0];
    let minProd = nums[0];
    let result = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < 0) {
            let temp = maxProd;
            maxProd = minProd;
            minProd = temp;
        }
        maxProd = Math.max(nums[i], maxProd * nums[i]);
        minProd = Math.min(nums[i], minProd * nums[i]);

        result = Math.max(result, maxProd);
    }

    return result;
}

let nums = [2, 3, -3, 4];
console.log(maxProduct(nums)); 
// Question # 02: Given an array of integers nums and an integer target, return indices of
// the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the
// same element twice.







// Question # 03: Reverse each word in a given input string.
function reverseInPlace(inp) {
  
    let words = inp.split(" ");
 
    let reverseWords = words.map(word => {
        return word.split("").reverse().join("");
    });
    let updatedSentence = reverseWords.join(" ");
    return updatedSentence;
}

let inp = "Welcome to JavaScript guide!";
let updatedSentence = reverseInPlace(inp);
console.log(updatedSentence);


// Question # 04: Write a JavaScript program to display the reading change (i.e. display
//     // book name, author name and reading change) of the following books.
var library = [
    {
        author: "Bill Gates",
        title: "The Road to Hell",
        readingchange: true
    },
    {
        author: "Gates",
        title: "The Road",
        readingchange: false
    },
    {
        author: "Steive",
        title: "Wolter",
        readingchange: true
    }
];

function change(library) {
    for (let i = 0; i < library.length; i++) {
        let book = library[i];
        let change = book.readingchange ? "already read" : "not read yet";
        console.log("Book: " + book.title + " " + "by" + book.author + " "+ " Reading change " + change);
    }
}
change(library)
// Question # 05:
// Write a JavaScript function to convert an amount into coins.
// Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
// Output : 25, 10, 10, 1
// You can return the answer in any order.
function countCoins(amount, coins) {
    let result = [];
    let remamount = amount;

    for (let i = 0; i < coins.length; i++) {
        const coin = coins[i];
        while (remamount >= coin) {
            result.push(coin);
            remamount -= coin;
        }
    }

    return result;
}

const coins = countCoins(46, [25, 10, 5, 2, 1]);
console.log(coins);




















 

//   1. Write a function which checks if string is palindrom
//   A phrase is a palindrome if, after converting all uppercase letters into lowercase letters
//   and
//   removing all non-alphanumeric characters, it reads the same forward and backward.
//   Alphanumeric characters include letters and numbers.
//   Given a string s, return true if it is a palindrome, or false otherwise.
//   Example 1:
//   Input: s = "A man, a plan, a canal: Panama"
//   Output: true
//   Explanation: "amanaplanacanalpanama" is a palindrome.
//   Example 2:
//   Input: s = "race a car"
//   Output: false
//   Explanation: "raceacar" is not a palindrome.
//   Example 3:
//   Input: s = " "
//   Output: true
//   Explanation: s is an empty string "" after removing non-alphanumeric characters.
//   Since an empty string reads the same forward and backward, it is a palindrome.


const  sentence_1 = "A man, a plan, a canal: Panama "
const newSentence = sentence_1.toLocaleLowerCase()
console.log(newSentence)
const removeSpace =newSentence.replace(/[^a-z0-9]/g, "")
console.log(removeSpace)
const splitSentence = removeSpace.split('').reverse().join("")
console.log(splitSentence)



// 2. Given five positive integers, find the minimum and maximum values that can be
// calculated by summing exactly four of the five integers. Then print the respective minimum
// and maximum values as a single line of two space-separated long integers

const numbers = [1,3,5,7,9];
const miniMaxSum = (arr) => {
    let minSum = Infinity;
    let maxSum = -Infinity;
    let totalSum = 0;
    for (let i = 0; i < arr.length; i++) {
        totalSum += arr[i];
    }
    for (let i = 0; i < arr.length; i++) {
        let sum = totalSum - arr[i];
        if (sum < minSum) {
            minSum = sum;
        }
        if (sum > maxSum) {
            maxSum = sum;
        }
    }
    console.log(`${minSum} ${maxSum}`);
};
miniMaxSum(numbers);