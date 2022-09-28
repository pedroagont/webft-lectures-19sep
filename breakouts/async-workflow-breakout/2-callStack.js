// FUNCTION CALL STACK
const thirdFunction = () => {
  console.log('Hi from 3rd! 👋');
}

const secondFunction = () => {
  thirdFunction();
  console.log('Hi from 2nd! 👋');
}

const mainFunction = () => {
  secondFunction();
  console.log('Hi from 1st! 👋');
}

mainFunction();
