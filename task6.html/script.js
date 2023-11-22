//increment & decrement

num1=8;

num1++;
console.log(num1);

num2=5;

num2--;
console.log(num2);

//assignment operator

number1=5;

number1 +=5;

console.log(number1);

number2=6;

number2 *=2;
console.log(number2);

number3=2;
number3 /=2;
console.log(number3);

num4=29;
num4 %=3;
console.log(num4);

num5=2;
num5 **=5;
console.log(num5);

//comparision op

firstnumber=5;
secondnumber=5;

console.log(firstnumber==secondnumber);

let age=21;         //integer
let weight="30";   //string
console.log(age===weight);


 
let num6 = true;      //boolean
console.log(num6);

let number7="8".charCodeAt(0);
console.log(number7)

let num10=5;
let num9=8;
console.log(num10 < 10 && num9==8);   //and opr

let age1=18;
let height=5;
console.log(age1 >= 10 || height<5);  //or opr

let class1=10;
let class2=25;
console.log(!(class1 == 10 && class2==25));

//FUNCTIONS

function addNumbers(num1 , num2){
    sum = num1 + num2;
    console.log(sum);
}
 addNumbers(10,5);

 number12= parseInt(prompt("Enter number1: "));
 number13= parseInt(prompt("Enter number2: "));
console.log(number12 + number13);

point= parseFloat(prompt("Enter the number3"));
point2= parseFloat(prompt("enter the number4"))
console.log(point - point2);

name1=prompt("Emter the name");
console.log(name1);