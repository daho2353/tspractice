/*let id: number = 5;
let company: string = "le company";
let isPublished: boolean = true; 

let ids: number[] = [1,2,3,4,5];
let x: any =  "don't ever do this unless you it is absolutely necessary";
let xArr: any[] = ["anything",3, true];

//example of why ts is useful
*/
const concatenateValues = (a: string, b: string): string => { // const functionName = (var:type): returntype => {}
    return a + b; 
}

console.log(concatenateValues("hello","world"));
//console.log(concatenateValues(5,10)); // this line throws an error because of integers, without ts it would add the numbers to make 15 instead of the desired outcome of 510
console.log(concatenateValues("5","10")); 

interface UserInterface {
    id: number;
    name: string;
    age?: number; //? makes this field optional (see no error in const below)
    greet(mesage: string): void; //typing a function, the type is what it returns, in the case of a console log it would be of type void
}

const User: UserInterface = {
    id: 2,
    name: "Damian",
    //age: 25,
    greet(message) {
        console.log(message);
    },
}

if (!User.age) { //you can use types to check if a field is undefined and create a trigger based on that information
    console.log("No Age");
}
else {
    console.log(User.age);
}

User.greet("hello");

//Variables with multiple types
/*
type IDFieldType = string | number;  //use | to add multiple types which can be done in line or assigned to it's own type

const printID = (id: IDFieldType) => { 
    console.log("ID: " + id);
} // this function would accept string or integer responses

*/

interface BusinessPartner{
    name: string;
    creditScore: number;
}

interface UserIdentity{
    id: number;
    email: string;
}

type Employee = BusinessPartner & UserIdentity; // the & creates an interesection which allows it to be both types, this is different from | which only allows the variable to use one type from either option

const signContract = (employee: Employee): void => {
    console.log("Contract signed by " + employee.name + "with email: " + employee.email);
}

signContract({name: "Damian", creditScore: 690, email: "fakeemail@gmail.com",id: 1});