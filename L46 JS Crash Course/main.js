/*
let age=30;
age=31;

console.log(age);
*/

/*
let score;
score=10;
score=12;

console.log(score);
*/

/*
const nm=5;

console.log(nm);
*/

/*
const nm=6;
nm=7; // wrong here cz const can't be reassigned

console.log(nm);
*/

/*
const nm; // wrong here cz nm need to be assigned right away when it is declaired not after
nm=8;

console.log(nm);
*/

/*
//String, Number, Boolean, null, undefined
const name="john";
const age=30;
const rating=4.5;
const isCool=true;
const x=null; //null is basicly empty, it is a variable but nothing in it;
const y=undefined;
let z;  //right now Z is undefined;

console.log(typeof isCool);
*/

/*
const name="john";
const age=30;
// Consatenation
// console.log("my name is name and I am age");// wrong
// console.log("my name is "+name+" and I am "+age);
const hello=(`my name is ${name} and I am ${age}`);
console.log(hello);
*/

/*
const s="Hello World";
console.log(s.length);
console.log(s.toUpperCase(s));
console.log(s.toLowerCase(s));
console.log(s.substring(0,5));
console.log(s.substring(0,5).toUpperCase());
console.log(s.split(""));

const s="yesterday, today, tolorrow, future";
console.log(s.split(", "));
*/

/*
// Arrays - variables that hold multiple values;
const numbers = new Array(1,2,3,4,5);
console.log(numbers);

const fruits = ["apples", "oranges", "pears", "bananes"];
console.log(fruits);
fruits[4]="pineapples"; // add a member
console.log(fruits);
console.log(fruits[0]);
fruits.push("grapes"); // add a member to the last postion;
console.log(fruits);
fruits.unshift("strawberries"); // add a member to the first position;
console.log(fruits);
fruits.pop(); // delete the last member;
console.log(fruits);
console.log(Array.isArray(fruits)); // check if the list is an Array or not, this is 'true';
console.log(Array.isArray("hello")); // this is 'false';
console.log(Array.isArray(history)); // false;
console.log(Array.isArray(history)); // false; 
console.log(fruits.indexOf("pears")); 
*/

/*
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    hobbies: ["music", "voyage", "sports"],
    address: {
        street: "2 5th evenue",
        city: "Newyork",
        state: "NY"
    }
}
console.log(person.hobbies, person.age);
console.log(person.hobbies[1]);
console.log(person.address["city"]);
console.log(person.address.city);

person.email="j@yahoo.cn";
console.log(person);

const {firstName, lastName, address: { state }} = person;
console.log(firstName);
console.log(lastName);
console.log(state);
*/




/*
const todos = [
    {
        id: 1,
        text: "take out trash",
        isComplished: true
    },
    {
        id: 2,
        text: "go for a walk",
        isComplished: true
    },  
    {
        id: 3,
        text: "find a movie",
        isComplished: false
    }
];
*/
/*
console.log(todos);
console.log(todos[1].text);

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);
*/
/*
// for loop
for(let i = 0; i < 10; i++){
    console.log(i);
    console.log(`for loop number: ${i}`);
}
*/
/*
// while loop
let i = 0;
while(i < 10){
    console.log(`while loop number: ${i}`);
    i++;
}
*/

/*
for(let i = 0; i < todos.length; i++){
    console.log(i);
    console.log(`for loop number: ${i}`);
}

for(let i = 0; i <= todos.length; i++){
    console.log(i);
    console.log(todos[i].text);
}


for(let todo of todos){
    console.log(todo.text);
}
*/

/*
// high order array method: forEach, map, filter

todos.forEach(function(todo){
    console.log(todo.id)
});
// same as above
todos.forEach((todo)=>console.log(todo.text));
*/
/*
const todoText = todos.map(function(todo){
    return todo.text;
    //return undefined;
    //console.log(todo.text);
});
console.log(todoText);
*/
/*
const todoComplished = todos.filter(function(todo){
    return todo.isComplished === true;
});
console.log(todoComplished);


const todoComplished = todos.filter(function(todo){
    return todo.isComplished === true;
}).map(function(todo){
    return todo.text;
})
console.log(todoComplished);
*/




/*
const x = 10;
if(x == 10){
    console.log("x is 10");
}
*/

/*
const x = "10"; // x's data type is string;
if(x == 10){ // x's data type is number, "==" does not match the data type so it is still gonna work
    console.log("x is 10");
}
*/

/*
const x = "10";
if(x === 10){ // "===" matches the data type so not gonna work;
    console.log("x is 10");
}
*/

/*
const x = 10;
if(x === 10){ // gonna work
    console.log("x is 10");
}
*/

/*
const x = 12;
if(x === 10){
    console.log("x is 10");
} else if (x < 10) {
    console.log("x is smaller than 10");
} else {
    console.log("x is bigger than 10");
}
*/

/*
const x = 5;
const y = 11;
if(x > 5 || y < 16){ // "||" means "or"; gonna work as long as one condition is satisfied;
    console.log("x is greater than 5 or y is smaller than 16")
}
*/

/*
const x = 5;
const y = 11;
if(x > 4 && y < 16){ // "&&" means "and"; only works if both conditions are satisfied;
    console.log("x is greater than 4 and y is smaller than 16");
}
*/

/*
const x = 10;
const color = x > 10 ? "red" : "blue"; // "?" means if it is true; ":" means if it is not true;
console.log(color); // result is blue;
*/

/*
const x=10;
const color = x > 10 ? "red" : "blue";

switch(color){
    case "red":
        console.log("color is red");
        break;
    case "blue":
        console.log("color is blue");
        break;
    default: // 举例 const color = 12;
        console.log("color is not red or blue");
        break;
}
*/

/*
function addNums(num1, num2){
    console.log(num1+num2);
}
addNums(4, 5);

// same as above
const addNums = (num1, num2) => 
    console.log (num1+num2);
addNums(4, 5);
*/


/*
function addNums(num1=1, num2=1){
    console.log(num1+num2);
}
// addNums();// result is 2;
addNums(3, 4);// result is 7 over write the default value 2;
*/

/*
function addNums(num1=1, num2=1){
    return num1+num2;
}
const r = addNums(6, 7)*addNums(7, 8);
console.log(r);

// same as above
const addNums = (num1=1, num2=1) => {
    return num1+num2;
}
const r = addNums(6, 7)*addNums(7, 8);
console.log(r);

// same as above
const addNums = (num1=1, num2=1) => num1+num2;
console.log(addNums(6, 7)*addNums(7, 8));
*/

/*
function addNums(num){
    console.log(num+5);
}
addNums(5)

// same as above
const addNums = num => num+5;
console.log(addNums(5));
*/



/*
// Constructor function
function Person (firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);        
//  this equals to the function line 366;
//  this.getBirthYear = function(){
//       return this.dob.getFullYear();
//   }  

//  this equals to the function line 370;
//  this.getFullName = function (){
//      return `${this.firstName} ${this.lastName }`;
//  } 
} 

Person.prototype.getBirthYear = function(){ // "prototype" should not appear in the call area;
    return this.dob.getFullYear();
}

Person.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName }`;
}

Person.prototype.skinColor = "red";

// Instantiate object
 const person1 = new Person ("John", "Doe", "2-4-1978");
 const person2 = new Person ("Christ", "Snowdon", "3-5-1988");
// console.log (person2);
// console.log (person2.dob)
// console.log(person2.dob.getFullYear());

// console.log(person2.getBirthYear());
// console.log(person2.getFullName());
console.log(person1.getFullName());
console.log(person1.skinColor); // red
console.log(person2.skinColor); // red
*/

/*
// Class
class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }
    getBirthYear(){
        return this.dob.getFullYear();
    }
    getFullName(){
        return `${this.firstName} ${this.lastName}`
    }
    skinColor = "blue";
}

// Instantiate object
 const person1 = new Person ("John", "Doe", "2-4-1978");
 const person2 = new Person ("Christ", "Snowdon", "3-5-1988");
 person1.skinColor = "green";
// console.log (person2);
// console.log (person2.dob)
// console.log(person2.dob.getFullYear());

// console.log(person2.getBirthYear());
// console.log(person2.getFullName());
console.log(person1.getFullName());
console.log(person1.skinColor);
*/



// single element selector
// console.log(document.getElementById("my-form"));
// console.log(document.querySelector("#my-form")); // 括号内容填写方式和选择器一样需要加.#等，但是只能选择第一个不能多选


// multiple element selector
// console.log(document.querySelectorAll(".item")); // 括号内容填写方式和选择器一样需要加.#等，可以多选
// best ones to use are querySelector and querySelectorAll;
// console.log(document.getElementsByClassName("item")); // 同上可以多选
// console.log(document.getElementsByTagName("li"));

/*
const items = document.querySelectorAll(".item");
items.forEach((item)=>console.log(item));
*/

/* 
const ul = document.querySelector(".items");
// ul.remove();
// ul.lastElementChild.remove();
// ul.firstElementChild.textContent = "hello world";
// ul.children[1].innerText = "how is it"
// ul.firstElementChild.innerHTML = "hi world";
// ul.lastElementChild.innerHTML = "<h1>hellO back</h1>";
ul.firstElementChild.style.backgroundColor = "red";
*/

/*
const btn = document.querySelector(".btn");
btn.style.background = "red";
*/

/*
const btn = document.querySelector(".btn");
//btn.addEventListener("click",function(e){})
btn.addEventListener("click", (e)=>{
    e.preventDefault();
//    btn.style.background = "red";
//    console.log(e)
//    console.log(e.target)
//    console.log(e.target.className)
//    const items = document.querySelector(".items");
//    items.firstElementChild.innerText = "2020";
//    document.querySelector("#my-form").style.background = "#cccccc";
    document.querySelector("body").classList.add("bg-dark");
});
*/



const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

myForm.addEventListener("submit", onSubmit);

function onSubmit(e) {
    e.preventDefault();
//    console.log(nameInput.value); // 在页面输入一个人名 console.log会把这个名字显示出来;
    if(nameInput.value === "" || emailInput.value ===""){
        // alert("please input a name or an email");
        msg.textContent="please enter all fields";
        msg.classList.add("error");
        setTimeout(() => msg.remove(), 3000);
    }else{
        
        // console.log("success");
        const li = document.createElement("li");
        // li.appendChild(document.createTextNode(`${nameInput.value}:${emailInput.value}`))
        li.innerHTML = `${nameInput.value}:${emailInput.value}`;
        userList.appendChild(li);
        
        

        // Clear fields
        nameInput.value = "";
        emailInput.value = "";
    }
}












