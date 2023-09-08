const inputYear = '1995';
// console.log(inputYear + 20);
console.log(Number(inputYear) + 20);
console.log(String(20));
console.log(Number('Mohammadreza'));
console.log(typeof NaN); // Actually is invalid number

// Type coercion
// JavaScript convert number to string behind the scene
console.log('I am ' + 20 + ' year old');
console.log('I am ' + '20' + ' year old');
// String convert to number
console.log('30' - '15' - 5);
console.log('30' + '15' + 5);

// Let`s play game
let n = '1' + 1;
n = n - 1;
console.log(n);