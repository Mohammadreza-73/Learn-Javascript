const firstName = 'Mohammadreza';
const birthYear = 1995;
const now = 2023;
const job = 'developer';

const aboutMe = "I'm " + firstName + ', a ' + (now - birthYear) + ' year old ' + job;
console.log(aboutMe);

// Template string, in ES6
const newAboutMe = `I'm ${firstName}, a ${now - birthYear} year old ${job}`;
console.log(newAboutMe);