// Notes on the random and floor methods of Math:


// let randomNum = Math.random();   // To create a random rumber in JavaScript, you can use the random method of Math. 
// This will generate a random number between 0 and 1.
// This will most likely give you a number with a long decimal portion.

// console.log(randomNum);


// let randomNum = Math.floor(Math.random() * 6) + 1;   // If hypothetically, you wanted to roll a six-sided dice, you would need a random number 
// between 1 and 6, not including the decimal portion.
// The First Step is that you will multiply Math.random() * 6. What this will do is give 
// you a random number between 0 and 6 exclusive.
// Then you're not going to want the decimal portion, instead you would like a whole integer.
// So the Second Step will be to enclose this equation with the floor method of Math.
// So far, this will generate a random number between 0 and 5 but you need 1 through 6.
// For the Third Step, you can increase the minimum by adding plus one. Now this should give
// you a random number between 1 and 6.

// console.log(randomNum);


// If you're looking for a random number between a certain range, for example between 50 and 100, you can do so by applying the following equation:

// const min = 50;
// const max = 100;

// let randomNum = Math.floor(Math.random() * (max - min)) + min;

// console.log(randomNum);



// RANDOM NUMBER GENERATOR


const myButton = document.getElementById("myButton");
const myLabel1 = document.getElementById("myLabel1");
const myLabel2 = document.getElementById("myLabel2");
const myLabel3 = document.getElementById("myLabel3");
const min = 1;
const max = 6;
let randomNum1;
let randomNum2;
let randomNum3;

myButton.onclick = function () {
    randomNum = Math.floor(Math.random() * max) + min;
    myLabel.textContent = randomNum;
}





