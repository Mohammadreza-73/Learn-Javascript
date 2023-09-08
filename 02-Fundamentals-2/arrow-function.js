const calcAge2 = function (birthYear) {
    return 2023 - birthYear;
};

// Arrow functions: special form of expression functions
const calcAge3 = birthYear => 2023 - birthYear;
const age3 = calcAge3(1995);
console.log(age3);

/*
    Arrow function with multiline of code
*/
const yearsToRetirement = birthYear => {
    const age = 2023 - birthYear;
    const retirement = 65 - age;

    return retirement;
};

console.log(yearsToRetirement(1995));

/*
    Arrow function with multiple parameters
*/
const yearsToRetirement2 = (birthYear, firstName) => {
    const age = 2023 - birthYear;
    const retirement = 65 - age;

    return `${firstName} retires in ${retirement}`;
};

console.log(yearsToRetirement2(1995, 'Mohammadreza'));