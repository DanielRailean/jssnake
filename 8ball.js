console.log("8ball.js is active");
console.log("");

var responses = [
"Just do it!",
"Maybe not today!",
"Seems to be a great idea!",
"Sounds resonable!",
"Definetly do that!"
];


console.log(responses[randomBetween(0,responses.length)]);