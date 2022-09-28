// CALL BACK QUEUE
// Higher order function
const mainFunction = (function1, function2) => {
  function1();
  function2();
};

// Callbacks declaration
const iamCallback1 = () => {
  console.log('Hi from callback1! 👋');
};

const iamCallback2 = () => {
  console.log('Hi from callback2! 👋');
};

// Invoking
mainFunction(iamCallback1, iamCallback2);
console.log('Hi after mainFunction!');
