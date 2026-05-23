//Q1
let age = 17;
if(age>=18) {
    console.log("Eligible");
}
else {
    console.log("Not eligible");
}
           
//Q2
let wifi = true;
let mobileData = false;
console.log(wifi || mobileData);

// Q3
let num = 4;
if(num%2==0) {
    console.log("even");
}
else {
    console.log("Odd");
}

//Q4
let age1 = 24;
if(age1>=18) {
    console.log("can vote");
}
else {
    console.log("can not vote");
}

//Q5
let marks = 65;
let result = marks>=33 ? "Pass" : "Fail";
console.log(result);

//Q6
let age2 = 65;
let result2 = age2>=18 ? "adult" : "minor";
console.log(result2);

//Q7
let date = new Date();
console.log(date);

//Q8
let date1 = new Date();
console.log(date1.getFullYear);

//Q9
for(let i=1; i<=10;i++) {
    console.log(i);
}

//Q10
for(let i=1; i<=10;i++) {
    if(i%2==0){
        console.log(i);

    }

}
