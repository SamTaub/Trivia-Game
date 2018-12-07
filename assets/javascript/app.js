var triviaQuestions = [
  {
    question:
      "In 1970 the Pittsburgh Steelers won 4 Super Bowls with their help of their tremedous defensive line.  What was their nickname?",
    questionOptions: [
      "Yellow Curtain",
      "Steel Hammers",
      "Steel Curtain",
      "Fearsome Four"
    ],
    questionAnswer: "2"
  },
  {
    question:
      "In 2012, which two brothers coached against eachother in Super Bowl XLVII (47)?",
    questionOptions: [
      "John & Jim Harbaugh",
      "John & Trey Gruden",
      "John & Trey Madden",
      "John & Chuck Pagano"
    ],
    questionAnswer: "0"
  },
  {
    question:
      "Which current NFC West Team was part of the AFC until the league realigned in 2002?",
    questionOptions: [
      "Los Angeles Rams",
      "Seattle Seahawks",
      "Arizona Cardinals",
      "San Francisco 49ers"
    ],
    questionAnswer: "1"
  },
  {
    question:
      "Which team lost 4 consecutive Superbowls (XXV to XXVII) between 1991 and 1994?",
    questionOptions: [
      "Minnesota Vikings",
      "Denver Broncos",
      "Cincinnati Bengals",
      "Buffalo Bills"
    ],
    questionAnswer: "3"
  },
  {
    question:
      'Which team was nicknamed "The Great Show on Turf" between 1999 and 2001?',
    questionOptions: [
      "Atlanta Falcons",
      "New Orleans Saints",
      "Dallas Cowboys",
      "St. Louis Rams"
    ],
    questionAnswer: "3"
  },
  {
    question:
      "After the 1983 Season, the Colts moved to Indianapolis from which city?",
    questionOptions: ["Baltimore", "Phoenix", "Los Angeles", "Houston"],
    questionAnswer: "0"
  },
  {
    question: "In 2002, the NFL added what team as it's 32nd team?",
    questionOptions: [
      "Baltimore Ravens",
      "Carolina Panthers",
      "Houston Texans",
      "Jacksonville Jaguars"
    ],
    questionAnswer: "2"
  },
  {
    question:
      "Every year since 1945, what team has hosted a home game on Thanksgiving Day?",
    questionOptions: [
      "Green Bay Packers",
      "Detroit Lions",
      "New York Giants",
      "Chicago Bears"
    ],
    questionAnswer: "1"
  }
];

//Counter Variables
let correctCounter = 0;
let incorrectCounter = 0;
let unansweredCounter = 0;
let totalAnswerCounter = 0;
let gameTimer = 30;
let intervalId;

let questionCount = 0;

//Game Interval functions

function run() {
  clearInterval(intervalId);
  intervalId = setInterval(decrement, 1000);
}

function decrement() {
  gameTimer--;
  $("#trivia-timer").html("<h2> Time Remaining: " + gameTimer + "s </h2>");
  if (gameTimer === 0) {
    stop();
    unansweredCounter++;
    totalAnswerCounter++;
    updateUnansweredCounter();
    questionCount++;
    changeQuestion();
    gameTimer = 30;
    run();
    decrement();
  }
}

function stop() {
  clearInterval(intervalId);
}

//Function to clear variables when game restarts
function startNewGame() {
  correctCounter = 0;
  incorrectCounter = 0;
  unansweredCounter = 0;
  gameTimer = 30;
  intervalId;
  totalAnswerCounter;
  updateCorrectCounter();
  updateIncorrectCounter();
  updateUnansweredCounter();
  run();
  decrement();
  $("#start-game-button").hide();
  $(".btn-answer").show();
  $("#trivia-question").show();
  changeQuestion();
}

//Update Game Functions
function updateUnansweredCounter() {
  $("#trivia-score-unanswered").text(
    "Unanswered Questions: " + unansweredCounter
  );
}

function updateCorrectCounter() {
  $("#trivia-score-correct").text("Correct Questions: " + correctCounter);
}

function updateIncorrectCounter() {
  $("#trivia-score-incorrect").text("Incorrect Questions: " + incorrectCounter);
}

//function to hide elements
function hideContent() {
  $(".btn-answer").hide();
  $("#trivia-question").hide();
  $(".trivia-image").hide();
}

window.onload = hideContent();

$("#start-game-button").click(function () {
  startNewGame();
});

$(".btn-answer").click(function () {
  var guessValue = $(this).attr("value");
  if (guessValue === triviaQuestions[questionCount].questionAnswer) {
    correctCounter++;
    totalAnswerCounter++;
    updateCorrectCounter();
  } else {
    incorrectCounter++;
    totalAnswerCounter++;
    updateIncorrectCounter();
  }
  stop();
  questionCount++;
  changeQuestion();
  gameTimer = 30;
  run();
  decrement();
});

function changeQuestion() {
  $("#trivia-question").text(triviaQuestions[questionCount].question);
  $("#a-game-button").text(triviaQuestions[questionCount].questionOptions[0]);
  $("#b-game-button").text(triviaQuestions[questionCount].questionOptions[1]);
  $("#c-game-button").text(triviaQuestions[questionCount].questionOptions[2]);
  $("#d-game-button").text(triviaQuestions[questionCount].questionOptions[3]);
}
