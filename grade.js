const prompt = require('prompt-sync')();

let marks =parseInt(prompt("Enter the students marks between 0 and 100"));
if (marks > 100 || marks < 0 ){
    console.log("Incorrect marks. Please enter  marks between 0 and 100.");
}else if(marks > 79){
    console.log("The grade is A.");
}else if(marks >= 60 ){
    console.log("The grade is B");
}else if(marks >= 49 ){
    console.log("The grade is C");
}else if (marks >=40 ){
    console.log("The grade is D");
}else{
    console.log("The grade is E");
}
