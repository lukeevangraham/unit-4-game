// DECLARE VARIABLES

var goalNumber = 0;
var crystNum1 = '';
var crystNum2 = '';
var crystNum3 = '';
var crystNum4 = '';
var winCount = 0;
var lossCount = 0;
var crystalNums = [];
var score = 0;

// DECLARE FUNCTIONS


// GENERATE RANDOM GOAL NUMBER (BETWEEN 19 AND 120)

    goalNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;

    // ADD NUMBER TO HTML DIV

    $("#goalNumDiv").append(goalNumber);

// ADD WINS & LOSSES NUMBER TO HTML

    $("#winsDiv").append("Wins: " + winCount);
    $("#lossesDiv").append("Losses: " + lossCount);
    $("#scoreDiv").append(score);


console.log(goalNumber);

// GENERATE RANDOM CRYSTAL NUMBERS

    crystNum1 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
      console.log("Crystal 1 is: " + crystNum1);
    crystNum2 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
      console.log("Crystal 2 is: " + crystNum2);
    crystNum3 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
      console.log("Crystal 3 is: " + crystNum3);
    crystNum4 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
      console.log("Crystal 4 is: " + crystNum4);
    
      

// WHEN CRYSTALS ARE CLICKED POINTS ARE ADDED TO THE TOTAL SCORE

$(".image").on("click", function () {

});

// IF TOTAL SCORE === GOAL NUMBER, INCREASE WIN COUNTER

// IF TOTAL SCORE > GOAL NUMBER RESET GAME, INCREASE LOSS COUNTER