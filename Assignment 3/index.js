// Create two arrays [1,2,3] and [4,5,6] and join them using concat()
let arr1 = [1,2,3];
let arr2 = [4,5,6];
let result = arr1.concat(arr2);
console.log(result);

// Print numbers from 1 to 20
let num = 1;
while(num<=20) {
    console.log(num);
    num++;
}

// Print all even numbers from 1 to 50
let num1 = 1;
while(num1<=50) {
    console.log(num1);
    num1++;
}

// Print numbers from 10 to 1 
let num2 = 10;
do{
    console.log(num2);
    num2--;
}while(num2>=1);

// *
// **
// ***
for(let i=1; i<=3; i++) {
    let space = "";
    for(let j=1; j<=i; j++) {
        space = space+"*";
    }
    console.log(space);
    
}

//Create an array [10,20,30] and add 40 using push()
let arr_1 = [10,20,30];
arr_1.push(40);
console.log(arr_1);

// Create an array ["HTML", "CSS", "JAVASCRIPT"] and remove the last element
let arr_2 = ["HTML", "CSS", "JavaScript"];
arr_2.pop();
console.log(arr_2);

// Create an array ["Delhi", "Jaipur", "Mumbai"] and remove the first element
let arr_3 = ["Delhi", "Jaipur", "Mumbai"];
arr_3.shift();
console.log(arr_3);

// Create an array [20,30,40] and add 10 at the beggining
let arr_4 = [20,30,40];
arr_4.unshift(10);
console.log(arr_4);

// Create an array [1,2,3,4,5] and print elements from index 1 to 3 
let arr_5 = [1,2,3,4,5];
let result_5 = arr_5.slice(1,4);
console.log(result_5);