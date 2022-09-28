// SYNCHRONOUS
console.log('Sync...');
console.log(1);
console.log(2);
console.log(3);

// ASYNCHRONOUS
console.log('Async...');
console.log(1);
setTimeout(() => console.log(2), 3000)
console.log(3);
