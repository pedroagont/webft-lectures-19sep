// HIGHER ORDER FUNCTION
const welcomeUser = (username, getWelcomeMessage) => {
  getWelcomeMessage(username);
};

// CALLBACKS DECLARATION
const completeProfileMessage = username => {
  console.log(`Welcome user: ${username}! Your profile is complete! 👋`);
};

const missingDataMessage = username => {
  console.log(`Welcome user: ${username}! Your profile is missing data! 👋`);
};

// CALLING OUR HIGHER ORDER FUNCTION WITH A CALLBACK AS A PARAMETER
welcomeUser('Nicholas', completeProfileMessage);
welcomeUser('Jeremy', missingDataMessage);

// MATH RESULT CALLBACK EXAMPLE
// Higher order function
const result = (val1, val2, callback) => {
  callback(val1, val2);
};

// Callbacks declaration
const sum = (num1, num2) => console.log(num1 + num2);
const minus = (num1, num2) => console.log(num1 - num2);
const multiply = (num1, num2) => console.log(num1 * num2);
const divide = (num1, num2) => console.log(num1 / num2);

// Invoking
result(2, 2, sum);
result(2, 2, minus);
result(2, 2, multiply);
result(2, 2, divide);
