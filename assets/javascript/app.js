//Counter Variables
let correctCounter = 0;
let incorrectCounter = 0;
let unansweredCounter = 0;

//Question Variables
let questionOne = "In the 1970's, the Pittsburgh Steelers won 4 Super Bowls with the help of a tremendous defensive line with which nickname?"
let questionTwo = "In 2012, which two brothers coached against eachother in Super Bowl XLVII (47)?"
let questionThree = "Which current NFC West Team was part of the AFC up until the year 2002?"
let questionFour = "Which team lost 4 consecutive Superbowls (XXV to XXVII) between 1991 and 1994?"
let questionFive = 'Which team was nicknamed "The Great Show on Turf" between 1999 and 2001?'
let questionSix =  "After the 1983 Season, the Colts moved to Indianapolis from which city?"
let questionSeven = "in 2002 the NFL added it's 32nd team to the league.  This team is?"
let questionEight = "Every year since 1945, what team has hosted a home game on Thanksgiving Day?"

let questionArray = ["In the 1970's, the Pittsburgh Steelers won 4 Super Bowls with the help of a tremendous defensive line with which nickname?", "In 2012, which two brothers coached against eachother in Super Bowl XLVII (47)?", "Which current NFC West Team was part of the AFC up until the year 2002?", "Which team lost 4 consecutive Superbowls (XXV to XXVII) between 1991 and 1994?", 'Which team was nicknamed "The Great Show on Turf" between 1999 and 2001?', "After the 1983 Season, the Colts moved to Indianapolis from which city?", "in 2002 the NFL added it's 32nd team to the league.  This team is?", "Every year since 1945, what team has hosted a home game on Thanksgiving Day?"]



//Timer Function



$("#start-game-button").click(function (){
    $("#start-game-button").hide();
    $("#trivia-question").text(questionOne);
});