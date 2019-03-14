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

    function scoreCheck(x) {
        if (x === goalNumber) {
            winCount++;
            $("#winsDiv").html("Wins: " + winCount);
            reset();
        } else if (x > goalNumber) {
            lossCount++;
            $("#lossesDiv").html("Losses: " + lossCount);
            reset();
        }
    }

    function reset() {
        // GENERATE RANDOM GOAL NUMBER (BETWEEN 19 AND 120)
        
            goalNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
        
            // ADD NUMBER TO HTML DIV
        
            $("#goalNumDiv").html(goalNumber);

            score = 0;
            $("#scoreDiv").html(score);

        // GENERATE RANDOM CRYSTAL NUMBERS

            crystNum1 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
            console.log("Crystal 1 is: " + crystNum1);
            $("cryst1").data( "val", crystNum1 );
            crystNum2 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
            console.log("Crystal 2 is: " + crystNum2);
            $("cryst2").data( "val", crystNum2 );
            crystNum3 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
            console.log("Crystal 3 is: " + crystNum3);
            $("cryst3").data( "val", crystNum3 );
            crystNum4 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
            console.log("Crystal 4 is: " + crystNum4);
            $("cryst4").data( "val", crystNum4 );

        
    }

// ADD WINS & LOSSES NUMBER TO HTML

    $("#winsDiv").append("Wins: " + winCount);
    $("#lossesDiv").append("Losses: " + lossCount);
    


reset();



console.log(goalNumber);


    
      

// WHEN CRYSTALS ARE CLICKED POINTS ARE ADDED TO THE TOTAL SCORE

$("#cryst1").on("click", function () {
    score = score + crystNum1;
    $("#scoreDiv").text(score);
    scoreCheck(score);
});
$("#cryst2").on("click", function () {
    score = score + crystNum2;
    $("#scoreDiv").text(score);
    scoreCheck(score);
});
$("#cryst3").on("click", function () {
    score = score + crystNum3;
    $("#scoreDiv").text(score);
    scoreCheck(score);
});
$("#cryst4").on("click", function () {
    score = score + crystNum4;
    $("#scoreDiv").text(score);
    scoreCheck(score);
});

// IF TOTAL SCORE === GOAL NUMBER, INCREASE WIN COUNTER

// if (score === goalNumber) {
//     winCount ++;
//     $("#winsDiv").html(winCount);
    
// }

// IF TOTAL SCORE > GOAL NUMBER RESET GAME, INCREASE LOSS COUNTER