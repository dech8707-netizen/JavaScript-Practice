//Q1
let arr1 = [1,2,3];
let arr2 = [4,5,6];
let result = arr1.concat(arr2);
console.log(result);

//Q2
let num = 1;
while(num<=20) {
    console.log(num);
    num++;
}

//Q3
let num1 = 1;
while(num1<=50) {
    console.log(num1);
    num1++;
}

//Q4
let num2 = 10;
do{
    console.log(num2);
    num2--;
}while(num2>=1);

//Q5
for(let i=1; i<=3; i++) {
    let space = "";
    for(let j=1; j<=i; j++) {
        space = space+"*";
    }
    console.log(space);
    
}

//Q6
let arr_1 = [10,20,30];
arr_1.push(40);
console.log(arr_1);

//Q7
let arr_2 = ["HTML", "CSS", "JavaScript"];
arr_2.pop();
console.log(arr_2);

//Q8
let arr_3 = ["Delhi", "Jaipur", "Mumbai"];
arr_3.shift();
console.log(arr_3);

//Q9
let arr_4 = [20,30,40];
arr_4.unshift(10);
console.log(arr_4);

//Q10
let arr_5 = [1,2,3,4,5];
let result_5 = arr_5.slice(1,4);
console.log(result_5);