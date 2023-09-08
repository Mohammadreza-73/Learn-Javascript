// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Mohammadreza'));
console.log(Boolean({}));
console.log(Boolean(''));

let money = 0;
if (money) {
    console.log("Do not spend at all");
} else {
    console.log("Earn money");
}