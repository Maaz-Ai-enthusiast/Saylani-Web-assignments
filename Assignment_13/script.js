let cubeFinder=()=>{

let num=prompt("Enter any number : ");    
let result=num**3;
let btn=document.getElementById("btn");
btn.innerText=result;

};

 
let diameter=()=>{

let num=prompt("Enter radius to find diameter of circle : ");
let btn=document.getElementById("dia");
let result=2*num;
btn.innerHTML=result;

}

let max=()=>{

let num1=prompt("Enter first num : ");
let num2=prompt("Enter second num : ");
let result=null;
let btn=document.getElementById("mx");
if (num1>num2) {
    btn.innerText=`Maximum Number is ${num1}`;
} else if(num1===num2){
    btn.innerText=`Both Numbers are equal : ${num1} , ${num2}`;
}
else{
    btn.innerText=`Maximum Number is ${num2}`;
}
}

let areaCicle=()=>{

let num=prompt("Enter Radius to find area of circle :");
let area=2*3.14*(num**2);
let circleArea=document.getElementById("circleArea");
circleArea.innerText=`Area of Circle is ${area}`;

}

let oddEven=()=>{

let num=parseInt(prompt("Enter a number to check it is odd or even : "));
let btn=document.getElementById("oe");
if (num%2===0) {
    btn.innerText=`Num is Even ${num}`;
} else {
    btn.innerText=`Num is Odd ${num}`;
}

}

let primeNum=()=>{

let num=parseInt(prompt("Enter a number  :"));
let btn=document.getElementById("pm");
if (num>1) {
    for(let i=2;i<num;i++){
        if (num%i===0) {
            btn.innerText=`Number is not prime ${num}`;
            break;
        }
        else{
            btn.innerText=`Number is prime ${num}`;
        }
    }
}
else if(num===1){
    btn.innerText="Pls enter number greater than 1";
}
else{
    btn.innerText="Invalid number";
}

}



let primeNumRange=()=>{

    let num=parseInt(prompt("Enter a number  :"));
    let btn=document.getElementById("pmr");
    if (num>1) {
        for(let i=2;i<=num;i++){
            if (num%i===0) {
                btn.innerText=`Number is not prime ${num}`;
                continue;
            }
            else{
                btn.innerText=`Number is prime ${num}`;
            }
        }
    }
    else if(num===1){
        btn.innerText="Pls enter number greater than 1";
    }
    else{
        btn.innerText="Invalid number";
    }
    
    }

  