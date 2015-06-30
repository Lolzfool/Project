var userChoice = prompt("AI wants to play a game of rock paper scissors. Ur playing for $1000 and a free iphone");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
    computerChoice = "rock";
} else if (computerChoice <= 0.67) {
    computerChoice = "paper";
} else if (computerChoice <= 1.0) {
    computerChoice = "scissors";
}

alert("AI has read your mind and decided to choose the following: " + computerChoice);

var compare = function(choice1, choice2){
    if (choice1 === choice2) {
        alert("its a tie BUT WAIT! ur actually playing BlackJack and ur not the dealer so u lose all ur money and u go into depression because u lost ur money and now u work at mcdolands for 21 years until you have enough money to play AI again");
    }

//If the user chose rock...
else if (choice1 === "rock") {
    if (choice2 === "scissors") {
        alert("Rock smashes scissors");
    } else if (choice2 === "paper") {
        alert("Paper covers rock");
    } else if (choice2 === "lizard") {
        alert("Rock smashes lizard");
    } else {
        alert("Spock vaporizes rock");
    }
}

//If the user chose paper...
else if (choice1 === "paper") {
    if (choice2 === "scissors") {
        alert("Scissors cuts paper");
    } else if (choice2 === "rock") {
        alert("Paper covers rock");
    } else if (choice2 === "lizard") {
        alert("Lizard eats paper");
    } else {
        alert("Paper disproves Spock");
    }
}

//If the user chose scissors...
else if (choice1 === "scissors") {
    if (choice2 === "paper") {
        alert("Scissors cuts paper");
    } else if (choice2 === "rock") {
        alert("Rock smashes scissors");
    } else if (choice2 === "lizard") {
        alert("Scissors decapitates lizard");
    } else {
        alert("Spock vaporizes scissors");
    }
}
//otherwise...
else
    alert("You didnt put something legit so you lose lol u suck");


};
compare(userChoice, computerChoice);
