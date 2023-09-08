// Function Declaration
function calcAge1(birthYear) {
    return 2023 - birthYear;
}

const age1 = calcAge1(1995);
console.log('age1: ' + age1);

// Function Expression
const calcAge2 = function (birthYear) {
    return 2023 - birthYear;
};

const age2 = calcAge2(1995);
console.log('age2: ' + age2);

/*
 * NOTE: Difference between declaration and expression
 *
 * We can call function declaration before its defined, but for function expression we can`t
**/