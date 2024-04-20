function allOperate(){
    // Problem 1:
// Write a JavaScript program to calculate the area of a rectangle. Take the length and width as inputs from the user.
function area_ofRectangle(){
    let length = prompt("Submit the length of your desk(in metre): ");
    let width = prompt("Submit the width of your desk(in metre): ");
    const area = length * width;
    console.log("The area of rectangle is: " + area + " square metre");
}
area_ofRectangle();

// Problem 2:
// Write a JavaScript program to swap two variables without using a temporary variable. 
function swapVariable(){
    let a = 2;
    let b = 3;
    console.log("Before swapping: " + a);
    console.log("Before swapping: " + b);
    [a, b] = [b, a];
    console.log("After swapping: " + a);
    console.log("After swapping: " + b);
}
swapVariable();

// Problem 3:
// Write a JavaScript program to check whether a number is even or odd. Take the number as input from the user.

function even_oddCheck(){
    let num = prompt("Enter an integer: ");

    if( num <= 0 || isNaN(num)){
        console.log("Invalid input!")
    }
    else if(num % 2 === 0){
        console.log("Even: " + num);
    }
    else{
        console.log("Odd " + num);
    }
}
even_oddCheck();

// Problem 4:
// Write a JavaScript program to calculate the factorial of a number. Take the number as input from the user. 

function factorialCheck(){
    let number_range = prompt("Enter an integer (factorial): ");
    let fact = 1;

    for(let i = 1; i <= number_range; i++){
        fact *= i;
    }
    return fact;
}
console.log("Factorial: " + factorialCheck());

// Problem 5:
// Write a JavaScript program to check whether a year is a leap year or not. Take the year as input from the user.

function isLeapYear(){
    let year = prompt("Type a random year: ");

    if((year % 4 === 0) && (year % 400 !== 0) || (year % 100 === 0)){
        console.log(year + " is a Leap Year");
    }
    else{
        console.log(year + " is Not a Leap Year");
    }
}
isLeapYear();

}