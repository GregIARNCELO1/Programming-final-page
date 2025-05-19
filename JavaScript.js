/*alert("Hello World");
prompt(" Type your age: ");
confirm("Do you want to continue?:")*/
/*Do a program that can calculate the sphere
volume receiving the radius.*/
/*const pi=3.141592;
var radius=prompt("Please, type the radius: ");
var Volume=(4/3)*pi*(radius**3);
alert(Volume);

/*Do a program that, receiving one number, can determine if is positive, negative or zero.*/

/*var number=prompt("Type the number: ");
if(number>0){ 
    alert("The number is positive");
}
else if(number<0){ 
    alert("The number is negative");
}
else{ 
    alert("Number is zero");
}           

var number=prompt("Type the limit: ");
let i=0;
for(i=2;i<=number;i++){
    console.log(i);
}

let g=0;
var limit=prompt(" Type the limit given by the user")
    for(g=0; g<=limit;g++,g++,g++){
        console.log(g);

}

let x=0;
var limit=prompt("Type the limit given by the user")
    while(x<=limit){
        console.log(x);

x=x+3;
}
*/
function sendGmail(){
    document.getElementById("gmailsuccess").innerHTML="Thanks for send your email";
}


function guessNumber(number, random) {
    //Condition that evaluate if the number typed by the user is between 0 and 100.
    if (number >= 0 && number <= 100) {
        //If the user guesses the number...
        if (number == random) {
            //The paragraph will say that guessed the number.
            document.getElementById("answer").innerHTML = "Congrats! This is the number!";
        }
        //Otherwise...
        else {
            //The paragraph will say that is not the number and has to try again.
            document.getElementById("answer").innerHTML = "Oh no! Is not the number. Try again.";
        }
    }
    //If the number is not in the interval...
    else {
        //The paragraph will say that type a valid number.
        document.getElementById("answer").innerHTML = "Please, type a valid number.";
    }
}