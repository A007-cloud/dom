// let name = {
//     firstname: "Aditya",
//     lastname: "Das",
// }

// let printFullName = function (hometown, state) {
// console.log(this.firstname + " " + this.lastname + " from " + hometown + "," + state);
// }

// printFullName.call(name, "Dehradun", " Uttarakhand");

// let name2 = {
//     firstname: "Sachin",
//     lastname: "Tendulkar",
// }

// // function borrowing
// printFullName.call(name2, "Mumbai", " Maharashtra");

// printFullName.apply(name2, ["Mumbai", " Maharashtra"]);

// // bind method
// let printMyName = printFullName.bind(name2, "Mumbai", " Maharashtra");
// console.log(printMyName);
// printMyName();

// let multiply = function (x, y){
// console.log(x * y);
// }

// let multiplyByTwo = multiply.bind(this, 2);
// multiplyByTwo(5);

// let multiplyByThree = multiply.bind(this, 3);
// multiplyByThree(5);

let multiply = function(x){
    return function (y) {
        console.log(x*y);
    }
}

let multiplyByTwo = multiply(2);
multiplyByTwo(3);

let multiplyByThree = multiply(3);
multiplyByThree(10);