$(document).ready(function () {
  let currentQuestion;
  let timeLeft = 10;
  let score = 0;
  let interval;
  // random number generator
  let randomNumberGenerator = function (size) {
    return Math.ceil(Math.random() * size);
  };

  // math question generators
  const questionGeneratorAdd = function () {
    let question = {};
    let num1 = randomNumberGenerator(10);
    let num2 = randomNumberGenerator(10);

    question.answer = num1 + num2;
    question.equation = String(num1) + " + " + String(num2);

    return question;
  };

  const questionGeneratorSubtract = function () {
    let question = {};
    let num1 = randomNumberGenerator(10);
    let num2 = randomNumberGenerator(10);

    question.answer = num1 - num2;
    if (question.answer > 0) {
      question.equation = String(num1) + " - " + String(num2);
    } else if (question.answer < 0) {
      question.answer = num2 - num1;
      question.equation = String(num2) + " - " + String(num1);
    }

    return question;
  };

  const questionGeneratorMultiply = function () {
    let question = {};
    let num1 = randomNumberGenerator(10);
    let num2 = randomNumberGenerator(10);

    question.answer = num1 * num2;
    question.equation = String(num1) + " x " + String(num2);

    return question;
  };

  const questionGeneratorDivide = function () {
    let question = {};
    let num1 = randomNumberGenerator(10);
    let num2 = randomNumberGenerator(10);

    question.answer = Math.floor(num1 / num2);
    question.equation = String(num1) + " ÷ " + String(num2);

    return question;
  };

  // function array
  let functionArray = [
    questionGeneratorAdd,
    questionGeneratorSubtract,
    questionGeneratorMultiply,
    questionGeneratorDivide,
  ];

  // randomly choosing question

  const getQuestion = function () {
    let ques =
      functionArray[Math.floor(Math.random() * functionArray.length)]();
    return ques;
  };

  //   event listener

  //   get question
  let renderNewQuestion = function () {
    currentQuestion = getQuestion();
    $("#equation").text(currentQuestion.equation);
  };

  let checkAnswer = function (userInput, answer) {
    if (userInput === answer) {
      renderNewQuestion();
      $("#user-input").val("");
      updateTimeLeft(+1);
      updateScore(+1);
    }
  };

  let startGame = function () {
    if (!interval) {
      if (timeLeft === 0) {
        updateTimeLeft(10);
        updateScore(-score);
      }
      interval = setInterval(function () {
        updateTimeLeft(-1);
        $("#time-left").text("You have " + timeLeft + " seconds left!");
        if (timeLeft === 0) {
          clearInterval(interval);
          interval = undefined;
          let again = confirm("Would you like to play again?");
          if (again) {
            updateTimeLeft(10);
            playGame();
          } else {
            $(".game").addClass("game-end");
            $("h5").removeClass("game-end");
          }
        }
      }, 1000);
    }
  };

  let updateTimeLeft = function (amount) {
    timeLeft += amount;
    $("#time-left").text("You have " + timeLeft + " seconds left!");
  };
  let updateScore = function (amount) {
    score += amount;
    $("#score").text(score);
  };

  let playGame = function () {
    renderNewQuestion();
    $("#user-input").on("keyup", function () {
      startGame();
      checkAnswer(Number($(this).val()), currentQuestion.answer);
    });
  };

  playGame();
});
