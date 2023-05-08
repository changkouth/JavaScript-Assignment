// 1. Write a JavaScript function that reverse a number.
// Example x = 32243;
// Expected Output : 34223
const reverseInteger = (number) => {
    if (number < 0) {
        return -1 * reverseInteger(-number);
    }
    const result = (number + '').split('').reverse().join('');
    return result;
}
// console.log(reverseInteger(123));


// 2. Write a JavaScript function that checks whether a passed string is palindrome or not?
function isPalindrome(string) {
    return (string === string.split('').reverse().join(''));
}
// console.log(isPalindrome("madam"));

// 3. Write a JavaScript function that generates all combinations of a string.
// Example string : 'dog'
// Expected Output : d,do,dog,o,og,g
function allCombinations(string) {
    list = [];
    for (let i = 0; i < string.length; i++) {
        for (let j = i + 1; j < string.length+1; j++) {
            list.push(string.slice(i,j));
        }
    }
    return list.join(",");
}
// console.log(allCombinations('dog'));


// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order.
function alphabeticalOrderString(string) {
    return [...string].sort().join('');
}
// console.log(alphabeticalOrderString('webmaster'));

// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each
// word of the string in upper case.
function convertWord(string) {
    words = string.split(' ');
    for(let i = 0; i < words.length; i++) {
        words[i] = words[i].at(0).toUpperCase() + words[i].substr(1);
    }
    return words.join(' ');
}
// console.log(convertWord('the quick brown fox'))

// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
function longestWord(string) {
    s = string.split(' ');
    let longest = 0;
    for (let i = 0; i < s.length; i++) {
        longest = Math.max(longest, s[i].length);
        if (s[i].length === longest) {
            var longestFoundWord = s[i];
        }
    }
    return longestFoundWord;
}
// console.log(longestWord("string as a"));

// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
// Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
function countVowels(string) {
    let count = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let char of string) {
        if (vowels.includes(char)) {
            count += 1;
        }
    }
    return count;
}
// console.log(countVowels('the quick brown fox'));

 // 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.
 function isPrime(number) {
    if (number <= 1) return false;
    if (number % 2 === 0 && number > 2) return false;
    const squareNumber = Math.sqrt(number);
    for (let i = 3; i <= squareNumber; i += 2) {
        if (number % i === 0) return false;
    }
    return true;
 }
//  console.log(isPrime(5))

//  9. Write a JavaScript function which accepts an argument and returns the type.
function sayPrimitiveType(p) {
    return (typeof p);
}
// console.log(sayPrimitiveType(function add(n){
//     console.log(n + 1)
// }));

// 10. Write a JavaScript function which returns the n rows by n columns identity matrix.
function identityMatrix(n) {
    const matrix = [];
    for (let i = 0; i < n; i++) {
        const row = [];
        for (let j = 0; j < n; j++) {
            (j === i) ? row.push(1) : row.push(0)
        }
        matrix.push(row);
    }
    return matrix;
}
// console.log(identityMatrix(5));

// 11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second
// greatest numbers, respectively.
function findNumbers(arr) {
    arr.sort(); 
    return arr.at(1) + ", " + arr.at(-2);
}
// arr = [2,3,6,5]
// console.log(findNumbers(arr));

/* 12. Write a JavaScript function which says whether a number is perfect.
According to Wikipedia : In number theory, a perfect number is a positive integer that is equal to the sum of its proper
positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum).
Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).
Example : The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently,
the number 6 is equal to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1
+ 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128. */
function perfect(number) {
    let sum = 0;
    for (let i = 1; i < number; i++) {
        if (number % i === 0) {
            sum = sum + i;
        }
    }
    return (sum === number);
}
// console.log(perfect(6))

// 13. Write a JavaScript function to compute the factors of a positive integer.
function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n-1);
    }
}
// console.log(factorial(3));

// 14. Write a JavaScript function to convert an amount to coins.
// Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
// Output : 25, 10, 10, 1
function amountToCoins(amount, coins) {
    if (amount === 0) return new Array();
    if (amount >= coins[0]) {
        l = (amount - coins[0]);
        return [coins[0]].concat(amountToCoins(l, coins)).join(", ");
    } else {
        coins.shift();
        return amountToCoins(amount, coins);
    }
}
// let amount = 46;
// A = [25, 10, 5, 2, 1];
// console.log(amountToCoins(amount, A));

// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n
// from the user and display the result.
function exponent(b, n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result = b * result;
    }
    return result;
}
// console.log(exponent(2,3));

// 16. Write a JavaScript function to extract unique characters from a string.
// Example string : "thequickbrownfoxjumpsoverthelazydog"
// Expected Output : "thequickbrownfxjmpsvlazydg"
function extractUnique(string) {
    let unique = string.split(" ");
    unique = new Set(string);
    return ([...unique].join(""));
}
// console.log(extractUnique('thequickbrownfoxjumpsoverthelazydog'));

// 17. Write a JavaScript function to get the number of occurrences of each letter in specified string.
function occurrences(string) {
    return [...string].reduce((a,c) => {
        a[c] = a[c] ? a[c] + 1 : 1
        return a },
    {});
}
// console.log(occurrences('goodevening'));


// 18. Write a function for searching JavaScript arrays with a binary search.
// Note : A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.
function binarySearch(t, array) {
    let start = 0;
    let stop = array.length - 1;
    while (start <= stop) {
        let mid = Math.floor(start + (stop - start));
        if (array[mid] < t) {
            start = mid + 1;
        } else if (array[mid] === t) {
            return mid;
        } else {
            stop = mid - 1;
        }
    }
    return -1;
}
// array = [4,5,6,7,8]
// console.log(binarySearch(8, array));

// 19. Write a JavaScript function that returns array elements larger than a number
function elementsLargerThanNumber(array, number) {
    return array.reduce((acc, cur) => {
        return (cur > number) ? acc.concat(cur) : acc;
    }, [])
}
// console.log(elementsLargerThanNumber([7,5,3], 4));

// 20. Write a JavaScript function that generates a string id (specified length) of random characters.
// Sample character list : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
function generateRandomStringID(s, size) {
    let result = "";
    for (let i = 0; i < size; i++) {
        result += s.charAt(Math.floor(Math.random() * s.length));
    }
    return result;
}
// s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
// console.log(generateRandomStringID(s,8));

// 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array.
// Sample array : [1, 2, 3] and subset length is 2
// Expected output : [[2, 1], [3, 1], [3, 2], [3, 2, 1]]
function subsetCombinations(array, size) {
    let resultSet = [];
    let result;
    for (let i = 0; i < Math.pow(2, array.length); i++) {
        result = [];
        let j = array.length - 1;
        do {
            if ((i & (1 << j)) !== 0) {
                result.push(array[j]);
            }
        } while(j--);

        if (result.length >= size) {
            resultSet.push(result);
        }
    }
    return resultSet;
}
// console.log(subsetCombinations([1,2,3],2))

// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number
// of occurrences of the specified letter within the string.
// Sample arguments : 'microsoft.com', 'o'
// Expected output : 3
function countLetterOccurrences(string, letter) {
  let count = 0;
  string.split('').forEach(x => x == letter ? count ++ : null);
  return count;
}
// console.log(countLetterOccurrences('microsoft.com', 'o'));

// 23. Write a JavaScript function to find the first not repeated character.
// Sample arguments : 'abacddbec'
// Expected output : 'e'
function nonRepeatedCharacter(s) {
    for (let i = 0; i < s.length; i++) {
        if (s.indexOf(s.charAt(i)) === s.lastIndexOf(s.charAt(i))) {
            return s.charAt(i);
        }
    }
    return null;
}
// console.log(nonRepeatedCharacter('abacddbcec'));


// 24. Write a JavaScript function to apply Bubble Sort algorithm.
function bubbleSort(array) {
    let isSorted = false;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j] > array[j+1]) {
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
                isSorted = true;
            }
        }
        if (!isSorted) break;
    }
    return array.reverse();
}
// console.log(bubbleSort([5,3,7,4]));

// 25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output.
// Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output : "United States of America"
function longestCountryName(array) {
    let longest = 0;
    let answer = "";
    array.forEach(string => {
        longest = Math.max(longest, string.length);
        if (string.length === longest) {
            answer = string;
        }
    })
    return answer;
}
// array = ["Australia", "Germany", "United States of America"];
// console.log(longestCountryName(array));

// 26. Write a JavaScript function to find longest substring in a given a string without repeating characters.
function findLongestSubstring(string) {
    let i;
    let beginCurrentLength = 0;
    let currentLength;
    let maxLength = 0;
    let beginMaxLength;
    let mapData = new Map();
    mapData.set(string[0], 0);

    for (let j = 1; j < string.length; j++) {
        if (!mapData.has(string[j])) {
            mapData.set(string[j], j);
        } else {
            if (mapData.get(string[j]) >= beginCurrentLength) {
                currentLength = j - beginCurrentLength;
                if (maxLength < currentLength) {
                    maxLength = currentLength;
                    beginMaxLength = beginCurrentLength;
                }
                beginCurrentLength = mapData.get(string[j]) + 1;
            }
            mapData.set(string[j], j);
        }
    }
    if (maxLength < i - beginCurrentLength) {
        maxLength = i - beginCurrentLength;
        beginMaxLength = beginCurrentLength;
    }
    return string.substr(beginMaxLength, maxLength);
}
// console.log(findLongestSubstring("geeksforgeeks"));

// 27. Write a JavaScript function that returns the longest palindrome in a given string.
function longestPalindrome(s) {
    let answer = "";
    for (let i = 0; i < s.length; i++) {
        const oddSubstring = longestPalindromeHelper(s, i);
        if (oddSubstring.length > answer.length) {
            answer = oddSubstring;
        }
        const evenSubstring = longestPalindromeHelper(s, i, odd=false);
        if (evenSubstring.length > answer.length) {
            answer = evenSubstring;
        }
    }
    return answer;
}

function longestPalindromeHelper(s, i, odd = true) {
    let r = i;
    let l = i + (odd ? 0 : 1);
    while (r >= 0 && l < s.length && s[r] === s[l]) {
        r -= 1;
        l += 1;
    }
    return s.substring(r + 1, l);
}
// console.log(longestPalindrome("bananas"));

// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter.
function sayHello() { 
    return "hello"; 
}

function helloName(user, func) {
    const message = func();
    return (`${message} ${user}`);
}
// console.log(helloName("alice", sayHello));


// 29. Write a JavaScript function to get the function name.
function functionName() {
    return functionName.prototype.constructor.name;
}
// console.log(functionName());