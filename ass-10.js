var data=document.getElementById("data");
//LOOP EXERCISE
// Q-1

// let n=1;;
// while (n<=15) {
    
// console.log(n);

//     n++;
// }

// Q-2

// let n=15;
// while(n>=1){

// console.log(n);
// n--;

// }

// Q-3

// for (let char = 'A'; char <= 'Z'; char++) {
//     console.log(char);
//   }
  

// Q-4

// let even=0;
// console.log("Following Numbers are even : ");
// while (even<=100) {
//     if (even%2==0) {
//         console.log(` ${even} \n`);

//     }
//     even++;
    
// }


// Q-5

// let odd=1;
// console.log("Following numbers are odd : ");
// while (odd<=100) {
//     if (odd%2!=0) {
//         console.log(odd);
//     }
//     odd++;
// }

// Q-6

// let i=100;
// let sum=0;
// for ( i = 100; i >=0; i--) {
    
//     sum= sum+i;

// }
// console.log(sum);

// Q-7

// let num=null;
// let sum=null;
// for(num=0;num<=100;num++){
//     if (num%2==0) {
//         sum=sum+num;
//     }
// }
// console.log(sum);

// Q-8

// let num=null;
// let sum=null;
// for(num=0;num<=100;num++){
//     if (num%2!=0) {
//         sum=sum+num;
//     }
// }
// console.log(sum);


//IF ELSE EXERCISE


// Q1

// let a=10;
// let b=20;
// if (a>b) {
//     console.log(`Max num is a : ${a}` );
// }
// else console.log(`Max num is b : ${b}` );

// Q2

// let a=12;
// let b=20;
// let c=30;
// if (a>b && a>c) {
//     console.log(`Max num is  a : ${a}`);
// }
// else if (b>a && b>c) {
//     console.log(`Max num is b : ${b} `);
// } else {
//     console.log(`Max num is c: ${c} `);
// }


// Q3

// let a=[1,2,-4,6,14,0,4];
// for(let i=0;i<a.length;i++){

// if (a[i]===0) {
//     console.log(`Num at index of ${i} is zero ,which is ${a[i]}`);
// }
// else if (a[i]<0) {
//     console.log(`Num at index of ${i} is negative,which is ${a[i]} `);
// } else {
    
// console.log(`Num at index of ${i} is positve,which is ${a[i]}`);

// }

// }

// Q-4
// let num=prompt("Enter any number : ");
// if (num&5==0 && num%11==0) {
//     document.write(`${num} is divisible by 5 and 11`);
// }
// else{
//     document.write(`${num} is not divisible by 5 and 11`);
// }

// Q-5

// let num=prompt("Enter a number to check whether it is even or odd : ");
// if (num%2===0) {
// data.innerHTML="number is even";
// } else {
//     data.innerHTML="number is odd"
// }


// Q-6

// let year=prompt("Enter year to check whether it is leap or not : ");
// if (year%4===0) {
//     data.innerHTML="It is a leap year";
// } else {
//     data.innerHTML="It is not a leap year";
// }


// Q-7

// let pattern=/^[A-Za-z]+$/;
// let input=prompt("Enter character to check whether it is alphabets or not : ");
// let result=pattern.test(input);
// if (result===true) {
//     data.innerHTML="Character is Alphabet";
//     document.write(typeof(result));
// } else {
//     data.innerHTML="Character is not Alphabet";
//     document.write(typeof(result));

// }

// let check=prompt("Enter Alphabet to check it is vowel or consonant : ");
// let pattern=/^[aeiou]$/i;
// let result=pattern.test(check);
// if (result===true) {
//     data.innerHTML="Alphabet is Vowel";
// } else {
//     data.innerHTML="Alphabet is Consonant";
// }

// Q-8

// let check=prompt("Enter digits to check it is alphabet,number or speacial symbol : ");
// let alphabetPattern=/^[A-Za-z]+$/;
// let numPattern=/^[0-9]+$/i;
// let speacialPattern=/^[@#$%^&*()<>~|]+$/;
// let symbolresult=speacialPattern.test(check);
// let alphabetResult=alphabetPattern.test(check);
// let numResult=numPattern.test(check);
// if (alphabetResult===true) {
//     data.innerHTML="It is Alphabet";
// }
// else if(numResult===true){

// data.innerHTML="it is Number";

// }
// else if(symbolresult===true){
//     data.innerHTML="It is special symbol ";
// }
// else{

//     data.innerHTML="You entered mix input ";
// }

// Q-9

// let check=prompt("Enter character to check it is lower or uppercase : ");

// let uCase=/^[A-Z]+$/;

// let upperCaseResult=uCase.test(check);

// let lCase=/^[a-z]+$/;

// let lowerCaseResult=lCase.test(check);

// if (upperCaseResult===true) {
//     data.innerHTML=`You entered uppercase character-------> ${check}` ;    
// }

//  else if(lowerCaseResult===true){

//     data.innerHTML=`You entered lowercase character---------> ${check}` ;

// }

//  else {
//     data.innerHTML=` you entered mxture of uppercase as well as lowercase characters--------> ${check}`;
// }

// Q=10

// let day = parseInt(prompt("Enter a digit to know week day : "));
// let dayName=null;

// switch (day) {
//   case 1:
//     dayName = "Monday";
//     break;
//   case 2:
//     dayName = "Tuesday";
//     break;
//   case 3:
//     dayName = "Wednesday";
//     break;
//   case 4:
//     dayName = "Thursday";
//     break;
//   case 5:
//     dayName = "Friday";
//     break;
//   case 6:
//     dayName = "Saturday";
//     break;
//   case 7:
//     dayName = "Sunday";
//     break;
//   default:
//     dayName = "Invalid day";
// }

// data.innerHTML=`Its ${dayName} `;

// Q=11


// let monthNumber = parseInt(prompt("Enter the month number (1-12):"));
// let daysInMonth;

// switch (monthNumber) {
//   case 1: // January
//   case 3: // March
//   case 5: // May
//   case 7: // July
//   case 8: // August
//   case 10: // October
//   case 12: // December
//     daysInMonth = 31;
//     break;
//   case 4: // April
//   case 6: // June
//   case 9: // September
//   case 11: // November
//     daysInMonth = 30;
//     break;
//   case 2: // February
//     let year = new Date().getFullYear(); // Get the current year
//     if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
//       daysInMonth = 29; // Leap year
//     } else {
//       daysInMonth = 28; // Non-leap year
//     }
//     break;
//   default:
//     console.log("Invalid month number.");
// }

// if (daysInMonth !== undefined) {
//  data.innerHTML=`Number of days in month ${monthNumber}: ${daysInMonth}`;
// }

// Q-12

// let triangleAngle1=parseInt(prompt("Enter first angle to make a triangle"));
// let triangleAngle2=parseInt(prompt("Enter second angle to make a triangle"));

// let triangleAngle3=parseInt(prompt("Enter third angle to make a triangle"));

// let result=triangleAngle1+triangleAngle2+triangleAngle3;

// if (result===180) {
//     data.innerHTML=`These are valid angles to make a triangle : ----------------- > ${triangleAngle1}..${triangleAngle2}..${triangleAngle3}`
// } else {
//     data.innerHTML=`These are not valid angles to make a triangle :  --------------------- > ${triangleAngle1}..${triangleAngle2}..${triangleAngle3}`
// }

// Q-13

// let triangleAngle1=parseInt(prompt("Enter first angle to make a triangle"));
// let triangleAngle2=parseInt(prompt("Enter second angle to make a triangle"));

// let triangleAngle3=parseInt(prompt("Enter third angle to make a triangle"));

// if (triangleAngle1===30 && triangleAngle2===30 && triangleAngle3===30) {
//     data.innerHTML=`Triangle is Equilaterral`;
// }
// else if(triangleAngle1===triangleAngle2 || triangleAngle2===triangleAngle3 || triangleAngle1===triangleAngle3){

// data.innerHTML=`Triangle is Isosceles`;

// }
// else if(triangleAngle1!==triangleAngle2 || triangleAngle2!==triangleAngle3 || triangleAngle1!==triangleAngle3){
// data.innerHTML=`Triangle is scalene`;
// }
// else{
//     data.innerHTML=`invalid Angles`;
// }

// function triangleChecker(){
//     let triangleAngle1=parseInt(prompt("Enter first angle to make a triangle"));
// let triangleAngle2=parseInt(prompt("Enter second angle to make a triangle"));

// let triangleAngle3=parseInt(prompt("Enter third angle to make a triangle"));

// if (triangleAngle1===triangleAngle2 && triangleAngle2===triangleAngle3 && triangleAngle1+triangleAngle2+triangleAngle3===180) {
//     data.innerHTML=`Triangle is Equilaterral`;
// }
// else if(triangleAngle1===triangleAngle2 || triangleAngle2===triangleAngle3 || triangleAngle1===triangleAngle3 && triangleAngle1+triangleAngle2+triangleAngle3===180){

// data.innerHTML=`Triangle is Isosceles`;

// }
// else if(triangleAngle1!==triangleAngle2 || triangleAngle2!==triangleAngle3 || triangleAngle1!==triangleAngle3 && triangleAngle1+triangleAngle2+triangleAngle3===180){
// data.innerHTML=`Triangle is scalene`;
// }
// else{
//     data.innerHTML=`invalid Angles`;
// }
// }

// triangleChecker();