var userChoice;
var computerChoice;

//var userChoice =  ("Lets play an game waow");




button.onclick = function(){
    userChoice = "rock";
    if(comp_choice == userChoice){
        alert("AI has chosen rock");
        alert("This is a tie");
    }


    else if(comp_choice == "paper"){
        alert("AI has chosen paper");
        alert("You win! :O");
    }
    else {
        alert("AI has chosen scissors");
        alert("You lose XD");
    }

    
};//do something}
button.onclick = function(){
    userChoice = "paper";
    if(comp_choice == userChoice){
        alert("AI has chose");
        alert("This is a tie");
    }


   else if(comp_choice == "rock"){
        alert("AI has chosen rock");
        alert("You win :D");   
    }


    else {
        alert("AI has chosen scissors");
        alert("You lose :S");
    }



};//do something}
button.onclick = function(){
    userChoice = "scissors";
    if(comp_choice == userChoice){
        alert("AI has chosen scissors");
        alert("This is a tie");
    }
    else if(comp_choice == "paper"){
        alert("AI has chosen paper");
        alert("You win :I");
    }
    else {
        alert("AI has chosen rock");
        alert("You lose :C");
    }

};

// var nuke = function(){
//     userChoice = "nuke";
// };

var computerPick = function(){
    var computerChoice = Math.floor(Math.random()*3);
    if (computerChoice < 0.33) {
        comp_choice = "rock";
    } else if (computerChoice <= 0.66) {
        comp_choice = "paper";
    } else {
        comp_choice = "scissors";
    }






// var compare = function(choice1, choice2){
//     if (choice1 === choice2) {
//         // alert("its a tie BUT WAIT! ur actually playing BlackJack and ur not the dealer so u lose all ur money and u go into depression because u lost ur money and now u work at mcdolands for 21 years until you have enough money to play AI again");
//     }
//     else if (choice1 === "rock") {
//         if (choice2 === "scissors") {
//             alert("Rock smashes scissors");
//         } else if (choice2 === "paper") {
//             alert("Paper covers rock");
//         } else if (choice2 === "lizard") {
//             alert("Rock smashes lizard");
//         } else {
//             alert("Spock vaporizes rock");
//         }
//     }


//     else if (choice1 === "paper") {
//         if (choice2 === "scissors") {
//             alert("Scissors cuts paper");
//         } else if (choice2 === "rock") {
//             alert("Paper covers rock");
//         } else if (choice2 === "lizard") {
//             alert("Lizard eats paper");
//         } else {
//             alert("Paper disproves Spock");
//         }
//     }


//     else if (choice1 === "scissors") {
//         if (choice2 === "paper") {
//             alert("Scissors cuts paper");
//         } else if (choice2 === "rock") {
//             alert("Rock smashes scissors");
//         } else if (choice2 === "lizard") {
//             alert("Scissors decapitates lizard");
//         } else {
//             alert("Spock vaporizes scissors");
//         }
//     }

//     else {
//         alert("you didnt put something legit so like you lose lol");
//     }


// };
// compare(userChoice, computerChoice);




//else;
    //alert("you didnt put something legit so like you lose lol");



};
compare(userChoice, computerChoice);

