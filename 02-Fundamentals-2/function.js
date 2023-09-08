function logger() {
    console.log('My name is Mohammadreza');
}

// Calling - Running - Invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;

    return juice;
}

const juice = fruitProcessor(5, 0);
console.log(juice);
console.log(fruitProcessor(4, 2));