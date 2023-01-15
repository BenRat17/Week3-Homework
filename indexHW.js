//Week 3 Coding Homework Assignment//
//Benjamin Ratliff//

// 1. //
let ages = [3, 9, 23, 64, 2, 8, 28, 93, 66];// 1.b added 66 to the array to confirm dynamic code// 
function returnLastAge(ages){
    return ages.at(-1);
}
function returnFirstAge(ages){
    return ages.at(0);
}
var lastAge = returnLastAge(ages);
var firstAge = returnFirstAge(ages);

//These are to test to make sure the variables would actually print and have been commented out as they are unnecessary//
//console.log (lastAge);//
//console.log (firstAge);//

console.log (lastAge - firstAge);
//---------------------------------------------------//
//1.c The loop to iterate and calculate average.//
let totalAge = 0;
for (let i = 0; i < ages.length; i++){
    totalAge += ages[i];
    
}
// console.log(totalAge); this step was to test I was getting a total for the array //

console.log('The average age is',totalAge / ages.length);
//---------------------------------------------------//

// 2. //
let names = ['Sam ','Tommy ','Tim ','Sally ','Buck ','Bob '];

// 2a. Use a loop to iterate through the array and calculate the average number of letters per name //
let lengthOfNames = names.map(function(element){
    return element.length -1;
})
let totalNumberOfLetters = 0;
for (let i = 0; i < names.length; i++){
    totalNumberOfLetters += lengthOfNames[i];
}
console.log('The average length of the names is ',totalNumberOfLetters / lengthOfNames.length);


// 2b. Use a loop to iterate through the array and concatenate all names together separated by a space. //
let allNames = [];
for (let i = 0; i < names.length; i++){
   allNames += (names[i]);
}
console.log(allNames);
//---------------------------------------------------//

//3. How do you access the last element in an array? //

// arrayName.at[-1]; //

//4. How do you access the last element in an array? //

// arrayName.at[0]; //

// 5. Creat a new array called nameLengths. and write a loop to add the lengths to the new array.//

// This is already been done by the function on line 36, the array is called lengthOfNames. //

//6. Write a loop to iterate over the lengthOfNames array and calculate the sum off elements in the array.//
console.log(totalNumberOfLetters); // This was performed at line 39-42 //

//7. Writing a function that takes two parameters and returns a word concatenated to itself n number of times.//

function repeatWords(word, n){
    for (let i = 0; i < n; i++){
         console.log(word);
     }
}
repeatWords('Hello', 3);

//8. Write a function that takes a first and last name as two parameters and returns a full name.//

function fullNameFunction(firstName, lastName){
    console.log(firstName + ' ' + lastName)
}
fullNameFunction('Ben', 'Ratliff');

//9. Write a function that takes an array of numbers and returns True if the sum of all the number in the array are greater than 100.//
let userArray = [1, 2, 3, 4, 99];
function isOver100(){
    const initialValue = 0;
    const sumOfArray = userArray.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
if (sumOfArray >= 100){
    console.log('True');
}else 
        console.log('False');

}
isOver100(userArray);

//10. Write a Function that takes an array of numbers and returns the average of all the elements in the array.//

let number10Array = [1, 2, 3, 4, 99, 55];
function averageOfArray10 (){
    const initialValue = 0;
    const sumOfArray10 = number10Array.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
    return sumOfArray10 / number10Array.length;
}
console.log(averageOfArray10(number10Array));

//11. Write a function that takes two arrays and returns true if the average of the first array is greater than the second array.//

let number11Array1 = [1, 2, 3, 4, 99];
let number11Array2 = [10, 11, 12, 13];
function averageOfArrays11 (){
    const initialValue1 = 0;
    const sumOfArray1 = number11Array1.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue1);
    const initialValue2 = 0;
    const sumOfArray2 = number11Array2.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue2);
if ((sumOfArray1 / number11Array1.length) >= (sumOfArray2 / number11Array2.length)){
    console.log('True');
}else 
        console.log('False');
}

console.log(averageOfArrays11(number11Array1, number11Array2));

//12. Write a function called willBuyDrink that takes a boolean isHotOutside and a number moneyInPocket, and returns true if it is hot outside and money is greater than 10.50.//

let isHotOutside = prompt ('Is it hot outside?');
let moneyInPocket = prompt ('How much money do you have?');
function willBuyDrink(a, b){
    if (a == 'Yes' && b >= 10.50){
       console.log('True');
    }
    else console.log('False');
}
willBuyDrink(isHotOutside, moneyInPocket);

// 13. Write a function of your own that solves a problem.//

let currentTime = prompt ('What is the current time?');
let lastFeeding = prompt ('When did the baby eat last?');
function isTimeToFeed (a,b){
    if (a - b >= 3){
        console.log('Yes, it is time to feed the baby!');
    }
    else console.log('No, its not quite time to feed yet, ask again later.');
}
isTimeToFeed(currentTime, lastFeeding);