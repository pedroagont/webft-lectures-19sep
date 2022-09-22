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
