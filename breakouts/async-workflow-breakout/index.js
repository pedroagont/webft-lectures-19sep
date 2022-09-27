// // SYNC
console.log('Sync...');
console.log(1);
console.log(2);
console.log(3);
//
// // ASYNC
console.log('Async...');
console.log(1);
setTimeout(() => {
  console.log(2);
}, 2000);
console.log(3);

// setTimeout(() => {
//   console.log('Hello!');
// }, 3000);
//
// setTimeout(() => {
//   console.log('Hello from second setTimeout!');
// }, 2000);

// console.log('Before setTimeout...');
//
// setTimeout(() => {
//   console.log('Inside the setTimeout!');
// }, 0);
//
// console.log('After setTimeout...');

const fs = require('fs');

// will read my-doc.txt synchronously
const data = fs.readFileSync('./my-doc.txt', { encoding: 'utf8' });
console.log(data);

// will read my-doc.txt asynchronously
fs.readFile('./my-doc.txt', { encoding: 'utf8' }, (err, data) => {
  console.log(data);
});
