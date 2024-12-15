"use strict";
// using the switch variable for rateriving 
// a data for a specific command 
var todayDate = 7;
switch (todayDate) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.error("You put wrong number");
        break;
}
// if and else condition statement using
var number = 80;
if (number > 80) {
    console.log("You in A grade");
}
else {
    console.log("You have less then 80 number");
}
// using a if and else if condition in variacble
var number = 10;
if (number >= 1 && number <= 12) {
    console.log("You are Child.");
}
else if (number >= 13 && number <= 19) {
    console.log("You are Teenager.");
}
else if (number >= 20 && number <= 64) {
    console.log("You are Adult.");
}
else if (number >= 65) {
    console.log("You are seniro citizen.");
}
