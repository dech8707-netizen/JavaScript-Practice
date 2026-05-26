//Check if ageis greater than 18
let age = 17;
if(age>=18) {
    console.log("Eligible");
}
else {
    console.log("Not eligible");
}
           
//Check if wifi is connected or mobile data is connected
let wifi = true;
let mobileData = false;
console.log(wifi || mobileData);

// Check whether a number is even or odd
let num = 4;
if(num%2==0) {
    console.log("even");
}
else {
    console.log("Odd");
}

// Check whether a person can vote 
let age1 = 24;
if(age1>=18) {
    console.log("can vote");
}
else {
    console.log("can not vote");
}

// Check pass or fail using ternary operator
let marks = 65;
let result = marks>=33 ? "Pass" : "Fail";
console.log(result);

// Check adult or minor using ternary operator
let age2 = 65;
let result2 = age2>=18 ? "adult" : "minor";
console.log(result2);

// Print the current date using data object
let date = new Date();
console.log(date);

// print the current year using date object
let date1 = new Date();
console.log(date1.getFullYear);

// Print numbers from 1 to 10 using for loop
for(let i=1; i<=10;i++) {
    console.log(i);
}

// Print even numbers from 1 to 20
for(let i=1; i<=10;i++) {
    if(i%2==0){
        console.log(i);

    }

}
