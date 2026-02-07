/* Topic:
list, 
array, 
map, 
function (annoynymous, arrow) 
Object 


DOM
Debounce

setTimeout, setInterval
clearTimeout, clearInterval
*/

// const fruits = ["Apple", "Banana", "Mango", "Orange"];

// console.log(fruits);

// const nums = [1, 2, 3, 4, 5];
// function doubled(num){
//     return num * 2;
// } 

// annoynymous function
// const doubled = function(num){
//     return num * 2;
// }

// // arrow function
// (num) => {
//     return num * 2;
// }

// const doubled = (num) => num * 2;

// const doubleNums = nums.map(doubled);
// console.log(doubleNums);


// JS Objects
// const student ={
//     "name": "John Doe",
//     age: 20,
//     grade: "A",
// }

// console.log(student);
// console.log(student["name"]);
// console.log(student.name);
// console.log(student.age);

// student.age = 21; // mutable
// console.log(student.age);

// delete student.grade; // delete property
// console.log(student);


// DOM Manipulation
const heading = document.getElementById("heading");

heading.innerHTML = "<h1>Welcome to JavaScript</h1>";
heading.style.color = "blue";
heading.style.fontSize = "24px";

const btnstyle = document.querySelectorAll("button");

// style all buttons
btnstyle.forEach((btn) => {
    btn.style.padding = "10px 20px";
    btn.style.margin = "5px";
    btn.style.fontSize = "16px";
    btn.style.backgroundColor = "green";
    btn.style.color = "white";
    btn.style.border = "none";
    btn.style.borderRadius = "5px";
});


btnstyle[1].addEventListener("click", () => {
    const countText = document.getElementById("counttext");
    let count = parseInt(countText.textContent);
    count++;
    countText.textContent = count;
});
// implement debounce for button click
let timeoutId; // to store timeout ID
btnstyle[0].addEventListener("click", () => {
    if (timeoutId) { // if timeoutId is already set, clear it
        clearTimeout(timeoutId);
    }
    console.log(timeoutId);
    timeoutId = setTimeout(() => {
        const countText = document.getElementById("counttext");
        let count = parseInt(countText.textContent);
        count--;
        countText.textContent = count;
    }, 1000);
});











