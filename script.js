function callVowels(alph) {
    if (alph==='a' || alph==='e' || alph==='i'|| alph==='o' || alph==='u') {
        console.log("Alphabat is vowel")
    }
    else{
        console.log("Alphabat is not vowel")
    }
}
callVowels("r")



let num='3';
if (num==='2' || num==='4' || num==='6') {  
    console.log('Number is even')
}
else{
    console.log('Number is odd')
}
//const number = "2";
for (let index = 0; index <= 10; index++) {  
    console.log(`2*${index} = ${index*2}`)
}
for (let index = 0; index <= 10; index++) {  
    console.log(`3*${index} = ${index*3}`)
}
for (let index = 0; index <= 10; index++) {  
    console.log(`4*${index} = ${index*4}`)
}

function table(num , Num2) {
    console.log(`-------Table of ${num}`)
    for (let index = 0; index <= Num2; index++) {
        console.log(`${num} * ${index} = ${index*num}`)
        
    }
}
table(5 ,2);
table(6,10);

function sum(num,num1) {
    return num+num1
}
let result= sum(4,4)
console.log(result);

function checkNum(num) {
    if (num===0) {
        return true;
    }
    return false;
}

/*let a=81;
let b=80;
let c=70;
function comparasion(a, b, c) {
    if (a>b && a>c) {
        console.log("it is the biggest number")
    }
   else{
    console.log("")
   }
}
comparasion(a)*/


function checkEvenorOdd(num) {
    if (num % 2===0) {
        console.log(`${num} is even`)
    }
    else{
        console.log(`${num} is odd`)
    }   
}
checkEvenorOdd(8)
checkEvenorOdd(5)

//let name= ["jawad , sajid"];
//let age=["21 , 55"];
//console.log( age)


let person1 = {
    name:"sajid saeed",
    age:"55"
}
let person2 = {
    name:"jawad",
    age:"21"
}
//console.log(person1.name);
let allperson=[person1,person2]
//allperson.forEach(blob => {
//    console.log(blob)
//});

    let Name=allperson.map((items)=>{
        return items.name;
    })
// console.log(Name);

function max(num1, num2, num3) {
    let maxNum;
    if (num1 > num2 && num1 > num3) {
        maxNum = num1;
        return maxNum;
    } else if (num2 > num1 && num2 > num3) {
        maxNum = num2;
        return maxNum;
    } else {
        maxNum = num3;
    }
    return maxNum;
}

/* 
start
get num1, num2, num3 from user
create max function
check if num1 is greater than num2 AND num1 is greater then num3
    then give num1 value to maxNum
    return maxNum
*/

let maxNum = max(100, 50, 30);
console.log(maxNum);

