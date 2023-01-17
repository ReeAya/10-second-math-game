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
  question.equation = String(num1) + " - " + String(num2);

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

  question.answer = num1 / num2;
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
  let ques = functionArray[Math.floor(Math.random() * functionArray.length)]();
  return ques;
};
console.log(getQuestion());
