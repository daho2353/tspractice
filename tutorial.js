"use strict";
let id = 5;
let company = "le company";
let isPublished = true;
let ids = [1, 2, 3, 4, 5];
let x = "don't ever do this unless you it is absolutely necessary";
let xArr = ["anything", 3, true];
//example of why ts is useful
const concatenateValues = (a, b) => {
    return a + b;
};
console.log(concatenateValues("hello", "world"));
//console.log(concatenateValues(5,10)); // this line throws an error because of integers, without ts it would add the numbers to make 15 instead of the desired outcome of 510
console.log(concatenateValues("5", "10"));
const User = {
    id: 2,
    name: "Damian",
    //age: 25,
    greet(message) {
        console.log(message);
    },
};
if (!User.age) { //you can use types to check if a field is undefined and create a trigger based on that information
    console.log("No Age");
}
else {
    console.log(User.age);
}
User.greet("hello");
